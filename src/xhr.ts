import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig) {
  const {
    data = null,
    url,
    method = 'get',
    headers = {}
  } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  Object.keys(headers).forEach(name => {
    if (data === null && name.toUpperCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })


  // 可以设置body数据
  // 支持 BodyInit (Blob BufferSource FormDate URLSearchParams ReadableStream USVString)
  //  Document 和 null
console.log(data)
  request.send(data)
}

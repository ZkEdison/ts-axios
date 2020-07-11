import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from "./types";
import xhr from "./xhr";
import { buildURL } from "./helpers/url";
import { transformRequest, transformResponse } from "./helpers/data";
import { processHeaders } from "./helpers/headers";

function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config)
}

function processConfig(config: AxiosRequestConfig) {
  config.url = transfromUrl(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestdata(config)
}

function transfromUrl(config: AxiosRequestConfig) {
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestdata(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}

export default axios

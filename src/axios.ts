import Axios from "./core/Axios";
import { extend } from "./helpers/util";
import { AxiosInstance } from "./types";

function createInstance(): AxiosInstance {
  const content = new Axios()
  const instance = Axios.prototype.request.bind(content)

  extend(instance, content)

  return instance as AxiosInstance
}

const axios = createInstance()
console.dir(axios)
export default axios

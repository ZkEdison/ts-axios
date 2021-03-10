import axios, { AxiosError }  from '../../src/index'

const paramsString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString)

// axios({
//   method: 'post',
//   url: '/base/post',
//   data: searchParams
// }).then(res => {
//   console.log(res)
// })


axios({
  method: 'get',
  url: '/error/get1'
}).then((res) => {
  console.log(res)
}).catch((e: AxiosError) => {
  console.log(e)
})

axios({
  method: 'get',
  url: '/error/get'
}).then((res) => {
  console.log(res)
}).catch((e) => {
  console.log(e)
})

setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/get'
  }).then((res) => {
    console.log(res)
  }).catch((e) => {
    console.log(e)
  })
}, 5000)

axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
}).then((res) => {
  console.log(res)
}).catch((e) => {
  console.log(e.message)
})



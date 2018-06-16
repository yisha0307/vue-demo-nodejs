// 接口调用工具

// 配置api接口地址
var root = '/api/v1'

var axios = require('axios')

const apiAxios = ({ method, callback, url, params }) => {
  if (params) {
    params = JSON.stringify(params)
  }
  let options = {
    method,
    url,
    baseURL: root,
    data: params || null,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json'
  }
  axios(options)
    .then(res => callback(res))
    .catch(err => {
      let res = err.response
      this.$Message.error(`api error, HTTTP CODE: ${res.status}`)
    })
}

export default {
  get: (url, callback) => {
    return apiAxios({ method: 'GET', url, callback })
  },
  post: (url, callback, params) => {
    return apiAxios({ method: 'POST', url, callback, params })
  },
  delete: (url, callback, params) => {
    return apiAxios({ method: 'DELETE', callback, params, url })
  },
  put: (url, callback, params) => {
    return apiAxios({ method: 'DELETE', url, callback, params })
  }
}

import axios from 'axios'
import config from '../config'

export const request = (method, uri, data = null) => {
  if (!method) {
    console.error('API function call requires method argument')
    return
  }

  if (!uri) {
    console.error('API function call requires uri argument')
    return
  }

  var url = config.serverURI + uri
  return axios({ method, url, data })
}

export const uploadRequest = (method, uri, data = null) => {
  if (!method) {
    console.error('API function call requires method argument')
    return
  }

  if (!uri) {
    console.error('API function call requires uri argument')
    return
  }

  var url = 'http://static.snowmusic.cc' + uri
  return axios({ method, url, data })
}

// export default {
//
//   // request (method, uri, data = null) {
//   //   if (!method) {
//   //     console.error('API function call requires method argument')
//   //     return
//   //   }
//   //
//   //   if (!uri) {
//   //     console.error('API function call requires uri argument')
//   //     return
//   //   }
//   //
//   //   var url = config.serverURI + uri
//   //   return axios({ method, url, data })
//   // }
// }

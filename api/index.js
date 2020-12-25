import request from '@/utils/request'
export default {
  getAllList() {
    return request({
      url: `/serviceedu/indexfront/index`,
      method: 'get'
    })
  }
}
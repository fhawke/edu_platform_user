import request from '@/utils/request'
export default {
  getPageList(page, limit, searchObj) {
    return request({
      url: `/serviceedu/course/AllList/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  // 获取课程二级分类
  getAllSubject() {
    return request({
      url: '/serviceedu/subject/getAllSubject',
      method: 'get'
    })
  },
  getCourseInfo(courseId) {
    return request({
        url: `/serviceedu/course/${courseId}`,
        method: 'get'
    })
}
}
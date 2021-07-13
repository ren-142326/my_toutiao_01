/**
 * 封装 axios 请求模块
 */
import axios from 'axios'

//  实例化axios对象，
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 基准路径
})

//  导出这个对象，
export default request

import axios from "axios"
import { baseURL, timeout } from "./config"

const service = axios.create({
    baseURL,
    timeout
})
// 设置请求头
service.defaults.headers.post["Content-Type"] = "application/json" // post
// 请求拦截
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截
service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data
        } else {
            return Promise.reject(response.data)
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service

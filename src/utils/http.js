import axios from "axios"

let baseURL = ""
switch (process.env.NODE_ENV === "development") {
    case "development":
        baseURL = "http://localhost::3000"
        break

    default:
        break
}
const service = axios.create({
    baseURL,
    timeout: 5000
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

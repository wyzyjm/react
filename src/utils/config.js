let baseURL
switch (process.env.NODE_ENV === "development") {
    case "development":
        baseURL = "http://localhost::3000"
        break

    default:
        break
}
let timeout = 5000 // 超时时间
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    baseURL,
    // eslint-disable-next-line no-undef
    timeout
}

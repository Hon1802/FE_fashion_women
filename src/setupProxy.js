// Thay cho trường "proxy" trong package.json (gây lỗi
// "options.allowedHosts[0] should be a non-empty string" với react-scripts 5).
// Chỉ chuyển tiếp các request API, file tĩnh và trang HTML vẫn do dev server phục vụ.
const { createProxyMiddleware } = require("http-proxy-middleware")

const API_TARGET = "https://web-service-booking-tour.onrender.com"

module.exports = function (app) {
    app.use(
        createProxyMiddleware(["/api", "/auth"], {
            target: API_TARGET,
            changeOrigin: true,
        })
    )
}

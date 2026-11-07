import { useState } from "react"
import { Alert, Button, Form, Input } from "antd"
import Breadcrumb from "../../components/breadcrumb/Breadcrumb"

const PHONE_PATTERN = /^(0|\+84)\d{9,10}$/
const HOTLINE = "19001393"

const Oders = () => {
    const [form] = Form.useForm()
    const [submitted, setSubmitted] = useState(null)

    // Chưa có API tra cứu đơn hàng ở backend: chỉ validate phía client
    // và hướng dẫn khách liên hệ hotline để được kiểm tra đơn.
    const handleSubmit = (values) => setSubmitted(values)

    return (
        <section id="oder-page" className="static-page">
            <Breadcrumb items={[{ label: "Kiểm tra đơn hàng" }]} />
            <h1 className="static-page-title">Kiểm tra đơn hàng</h1>

            <div className="order-lookup">
                <p className="order-lookup-desc">
                    Nhập số điện thoại đặt hàng và mã đơn hàng để kiểm tra tình trạng đơn của bạn.
                </p>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    requiredMark={false}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Số điện thoại"
                        name="phone"
                        rules={[
                            { required: true, message: "Vui lòng nhập số điện thoại" },
                            { pattern: PHONE_PATTERN, message: "Số điện thoại không hợp lệ" },
                        ]}
                    >
                        <Input size="large" inputMode="tel" placeholder="VD: 0912345678" />
                    </Form.Item>
                    <Form.Item
                        label="Mã đơn hàng"
                        name="orderCode"
                        rules={[{ required: true, whitespace: true, message: "Vui lòng nhập mã đơn hàng" }]}
                    >
                        <Input size="large" placeholder="VD: #1001" />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" size="large" block>
                        Kiểm tra
                    </Button>
                </Form>

                {submitted && (
                    <Alert
                        className="order-lookup-result"
                        type="info"
                        showIcon
                        message={`Đã ghi nhận yêu cầu cho đơn ${submitted.orderCode.trim()}`}
                        description={
                            <span>
                                Tra cứu trực tuyến đang được cập nhật. Vui lòng gọi hotline{" "}
                                <a href={`tel:${HOTLINE}`}>{HOTLINE}</a> để được kiểm tra đơn hàng ngay.
                            </span>
                        }
                    />
                )}
            </div>
        </section>
    )
}
export default Oders;

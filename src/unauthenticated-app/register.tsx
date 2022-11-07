import { Button, Form, Input, message } from 'antd'
import { useAuth } from 'context/auth-context'
import { LongButton } from 'unauthenticated-app'
import { useAsync } from 'utils/useAsync'

export const RegisterSreen = () => {
    const { register } = useAuth()
    const {run , isLoading} = useAsync()
    const handleSubmit = ({ cpassword, ...values }: { username: string; password: string; cpassword: string }) => {
        if (cpassword != values.password) {
            message.error('两次密码不一致')
        } else
            register(values)
                .then(() => {
                    message.success('注册成功')
                })
                .catch((e) => {
                    message.error(e.message)
                })
    }
    return (
        <Form onFinish={handleSubmit}>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: '请输入用户名',
                    },
                ]}>
                <Input placeholder="用户名" type="text" id="username"></Input>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: '请输入密码',
                    },
                ]}>
                <Input placeholder="密码" type="password" id="password"></Input>
            </Form.Item>
            <Form.Item
                name="cpassword"
                rules={[
                    {
                        required: true,
                        message: '请确认密码',
                    },
                ]}>
                <Input placeholder="确认密码" type="password" id="cpassword"></Input>
            </Form.Item>
            <Form.Item>
                <LongButton htmlType="submit" type="primary">
                    注册
                </LongButton>
            </Form.Item>
        </Form>
    )
}

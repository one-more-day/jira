import { useAuth } from 'context/auth-context'
import { Button, Form, Input, message } from 'antd'
import { LongButton } from 'unauthenticated-app'
import { useAsync } from 'utils/useAsync'
export const LoginSreen = () => {
    const { login } = useAuth()
    const { run, isLoading } = useAsync()
    const handleSubmit = (values: { username: string; password: string }) => {
        run(
            login(values)
                .then(() => {
                    message.success('登陆成功')
                })
                .catch((e) => {
                    message.error(e.message)
                }),
        )
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
            <Form.Item>
                <LongButton loading={isLoading} htmlType="submit" type="primary">
                    登录
                </LongButton>
            </Form.Item>
        </Form>
    )
}

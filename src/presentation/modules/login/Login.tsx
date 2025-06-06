import { Button, Form, Input } from 'antd'
import type { Credentials, LoginUseCase } from '../../../domain/usecase'

type Props = {
  loginUseCase: LoginUseCase
}

const Login = ({ loginUseCase }: Props) => {
  const [form] = Form.useForm<Credentials>()

  const onFinish = async (values: Credentials) => {
    await loginUseCase.execute(values)
  }

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}> 
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true }]}> 
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Login</Button>
      </Form.Item>
    </Form>
  )
}

export default Login

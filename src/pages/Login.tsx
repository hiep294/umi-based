import React from 'react';
import { Form, Input, Button, Checkbox, Layout, Row, Card } from 'antd';
import { history } from 'umi';
import styles from '@/styles/Login.less';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 24 },
};

const Login = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    history.push('/');
  };

  return (
    <div className={styles.loginContainer}>
      <Card bordered className={styles.loginForm}>
        <Form onFinish={onFinish} {...layout}>
          <Row justify="center">
            <h2>LOGIN</h2>
          </Row>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Username is required!' }]}
            labelAlign="left"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Password is required!' }]}
            labelAlign="left"
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button block type="primary" htmlType="submit">
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;

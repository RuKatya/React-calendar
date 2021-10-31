import { Button, Input, Layout, Row } from "antd";
import React, { FC } from "react";
import { Form } from "antd";
import { rules } from "../utils/rules";

const LoginForm: FC = () => {
  const submit = () => {
    console.log("submit");
  };
  return (
    <Form onFinish={submit}>
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required("Please input your username!")]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please input your password!")]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;

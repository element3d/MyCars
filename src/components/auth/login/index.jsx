import React, { useCallback } from "react";
import { Button, Form, Input, Typography } from "antd";

import styles from "./styles.module.css";
import Link from "next/link";
const { Title } = Typography;

const Login = () => {
  const onFinish = useCallback((values) => {
    console.log("Success:", values);
  }, []);

  const onFinishFailed = useCallback((errorInfo) => {
    console.log("Failed:", errorInfo);
  }, []);

  return (
    <div className={styles.container}>
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 1000 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          className={styles.formItem}
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className={styles.formItem}
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item className={styles.submitButton}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div>
        <Title level={5}>Other login methods</Title>
        <div className={styles.otherMethodsContainer}>
          <Link href="#">Google</Link>
          <Link href="#">OK</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

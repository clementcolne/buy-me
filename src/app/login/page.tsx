'use client';

import React from 'react';
import { Card } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

import './style.css';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginComponent = () => (
  <Card title="Connexion" className="card">
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Mail"
        name="username"
        rules={[{ required: true, message: 'Veuillez entrer votre mail' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Mot de passe"
        name="password"
        rules={[
          { required: true, message: 'Veuillez entrer votre mot de passe' },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Connexion
        </Button>
      </Form.Item>
    </Form>
  </Card>
);

export default LoginComponent;

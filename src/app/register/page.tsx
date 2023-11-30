'use client';

import './style.css';

import React from 'react';
import { Card } from 'antd';
import { Button, Form, Input } from 'antd';
import { redirect } from 'next/navigation';

const onFinish = (values: any) => {
  redirect('/login');
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  firstName?: string;
  lastName?: string;
  username?: string;
  password?: string;
  remember?: string;
};

const RegisterComponent = () => (
  <Card title="Créer un compte" className="card" bordered={false}>
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
        label="Prénom"
        name="firstName"
        rules={[{ required: true, message: 'Veuillez entrer votre prénom' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Nom"
        name="lastName"
        rules={[{ required: true, message: 'Veuillez entrer votre nom' }]}
      >
        <Input />
      </Form.Item>

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
          Créer mon compte
        </Button>
      </Form.Item>
    </Form>
  </Card>
);

export default RegisterComponent;

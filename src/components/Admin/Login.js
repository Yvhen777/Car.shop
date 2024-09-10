import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { login } from '../../utils/authHelper';

const Login = ({ setIsLoggedIn }) => {
  const onFinish = (values) => {
    if (login(values.username, values.password)) {
      setIsLoggedIn(true);
      message.success('Успешный вход');
    } else {
      message.error('Неверный логин или пароль');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: '100px auto' }}>
      <Form onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true, message: 'Введите имя пользователя' }]}>
          <Input placeholder="Имя пользователя" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Введите пароль' }]}>
          <Input.Password placeholder="Пароль" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
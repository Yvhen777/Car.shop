import React from 'react';
import { Form, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const EditAboutPage = ({ language }) => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // В будущем здесь будет логика сохранения данных
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item name="title" label="Заголовок" rules={[{ required: true, message: 'Пожалуйста, введите заголовок' }]}>
        <Input placeholder="Введите заголовок страницы" />
      </Form.Item>
      <Form.Item name="description" label="Описание" rules={[{ required: true, message: 'Пожалуйста, введите описание' }]}>
        <TextArea rows={6} placeholder="Введите описание компании" />
      </Form.Item>
      <Form.Item name="image" label="Фотография">
        <Upload beforeUpload={() => false}>
          <Button icon={<UploadOutlined />}>Загрузить изображение</Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Сохранить изменения
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditAboutPage;
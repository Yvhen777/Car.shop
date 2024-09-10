import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const ChipTuning = () => {
  const [form] = Form.useForm();
  const [apiKey, setApiKey] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const savedApiKey = localStorage.getItem('chipTuningApiKey');
    const savedImageUrl = localStorage.getItem('chipTuningImageUrl');
    if (savedApiKey) {
      setApiKey(savedApiKey);
      form.setFieldsValue({ apiKey: savedApiKey });
    }
    if (savedImageUrl) {
      setImageUrl(savedImageUrl);
    }
  }, [form]);

  const onFinish = (values) => {
    localStorage.setItem('chipTuningApiKey', values.apiKey);
    setApiKey(values.apiKey);
    message.success('API ключ успешно сохранен');
  };

  const handleImageUpload = (info) => {
    if (info.file.status === 'done') {
      // В реальном приложении здесь бы был ответ от сервера с URL загруженного изображения
      const imageUrl = info.file.response.url || 'https://example.com/placeholder-image.jpg';
      setImageUrl(imageUrl);
      localStorage.setItem('chipTuningImageUrl', imageUrl);
      message.success(`${info.file.name} успешно загружен`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} не удалось загрузить.`);
    }
  };

  return (
    <div className="chip-tuning-admin">
      <h2>Настройки Чип-Тюнинга</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="apiKey"
          label="API Ключ для сервиса чип-тюнинга"
          rules={[{ required: true, message: 'Пожалуйста, введите API ключ' }]}
        >
          <Input.Password placeholder="Введите API ключ" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Сохранить API ключ
          </Button>
        </Form.Item>
      </Form>
      
      <h3>Загрузка изображения для лид-формы</h3>
      <Upload
        name="chipTuningImage"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76" // Замените на ваш реальный URL для загрузки
        onChange={handleImageUpload}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="chip-tuning" style={{ width: '100%' }} />
        ) : (
          <div>
            <UploadOutlined />
            <div style={{ marginTop: 8 }}>Загрузить</div>
          </div>
        )}
      </Upload>
      
      {apiKey && (
        <div className="mt-4">
          <p>Текущий API ключ: {apiKey.substring(0, 5)}...{apiKey.substring(apiKey.length - 5)}</p>
        </div>
      )}
    </div>
  );
};

export default ChipTuning;
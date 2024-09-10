import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message, Tabs, Select, Card } from 'antd';

const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;

const SEO = () => {
  const [form] = Form.useForm();
  const [language, setLanguage] = useState('ru');
  const [page, setPage] = useState('home');

  useEffect(() => {
    const savedSEO = JSON.parse(localStorage.getItem(`seo_${language}_${page}`)) || {};
    form.setFieldsValue(savedSEO);
  }, [form, language, page]);

  const onFinish = (values) => {
    localStorage.setItem(`seo_${language}_${page}`, JSON.stringify(values));
    message.success(`Настройки SEO для ${page} (${language.toUpperCase()}) успешно сохранены`);
  };

  const pages = [
    { value: 'home', label: 'Главная' },
    { value: 'catalog', label: 'Все предложения' },
    { value: 'services', label: 'Услуги' },
    { value: 'contacts', label: 'Контакты' },
    { value: 'car_template', label: 'Шаблон страницы автомобиля' },
  ];

  const PreviewCard = ({ title, description }) => (
    <Card title="Предпросмотр" style={{ marginTop: 16 }}>
      <div style={{ fontFamily: 'Arial', maxWidth: '600px' }}>
        <h3 style={{ color: '#1a0dab', fontSize: '18px', marginBottom: '3px' }}>{title}</h3>
        <p style={{ color: '#006621', fontSize: '14px', marginBottom: '3px' }}>
          https://вашсайт.com/{page !== 'home' ? page : ''}
        </p>
        <p style={{ color: '#545454', fontSize: '13px', lineHeight: '1.4' }}>{description}</p>
      </div>
    </Card>
  );

  return (
    <div className="seo-settings">
      <h2>Настройки SEO</h2>
      <Select
        style={{ width: 200, marginBottom: 16 }}
        value={language}
        onChange={setLanguage}
      >
        <Option value="ru">Русский</Option>
        <Option value="en">English</Option>
        <Option value="es">Español</Option>
      </Select>
      <Select
        style={{ width: 200, marginBottom: 16, marginLeft: 16 }}
        value={page}
        onChange={setPage}
      >
        {pages.map(p => (
          <Option key={p.value} value={p.value}>{p.label}</Option>
        ))}
      </Select>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="title"
          label="Title"
          rules={[
            { required: true, message: 'Пожалуйста, введите title' },
            { max: 60, message: 'Title не должен превышать 60 символов' }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            { required: true, message: 'Пожалуйста, введите description' },
            { max: 160, message: 'Description не должен превышать 160 символов' }
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          name="keywords"
          label="Keywords"
        >
          <TextArea rows={2} />
        </Form.Item>
        {page === 'car_template' && (
          <>
            <Form.Item
              name="og_title"
              label="OG Title"
              rules={[{ required: true, message: 'Пожалуйста, введите OG Title' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="og_description"
              label="OG Description"
              rules={[{ required: true, message: 'Пожалуйста, введите OG Description' }]}
            >
              <TextArea rows={4} />
            </Form.Item>
          </>
        )}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Сохранить настройки SEO
          </Button>
        </Form.Item>
      </Form>
      <PreviewCard 
        title={form.getFieldValue('title')} 
        description={form.getFieldValue('description')}
      />
    </div>
  );
};

export default SEO;
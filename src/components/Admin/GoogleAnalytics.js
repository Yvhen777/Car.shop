import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Switch, message, Card, Typography } from 'antd';

const { Text } = Typography;

const GoogleAnalytics = () => {
  const [form] = Form.useForm();
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Загрузка сохраненных настроек при монтировании компонента
    const savedSettings = JSON.parse(localStorage.getItem('googleAnalyticsSettings')) || {};
    form.setFieldsValue(savedSettings);
    setIsEnabled(savedSettings.isEnabled || false);
  }, [form]);

  const onFinish = (values) => {
    const settings = { ...values, isEnabled };
    localStorage.setItem('googleAnalyticsSettings', JSON.stringify(settings));
    message.success('Настройки Google Analytics успешно сохранены');
  };

  const handleSwitchChange = (checked) => {
    setIsEnabled(checked);
  };

  const getTrackingCode = (trackingId) => {
    return `
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${trackingId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${trackingId}');
</script>
    `;
  };

  return (
    <div className="google-analytics-settings">
      <h2>Настройки Google Analytics</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="trackingId"
          label="ID отслеживания Google Analytics"
          rules={[
            { required: true, message: 'Пожалуйста, введите ID отслеживания' },
            { pattern: /^UA-\d+-\d+$|^G-[A-Z0-9]+$/, message: 'Неверный формат ID отслеживания' }
          ]}
        >
          <Input placeholder="UA-XXXXXXXXX-X или G-XXXXXXXXXX" />
        </Form.Item>
        <Form.Item label="Включить отслеживание">
          <Switch checked={isEnabled} onChange={handleSwitchChange} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Сохранить настройки
          </Button>
        </Form.Item>
      </Form>
      
      <Card title="Инструкция по установке" style={{ marginTop: 20 }}>
        <Text>
          1. Создайте аккаунт Google Analytics, если у вас его еще нет.<br />
          2. Создайте новый ресурс для вашего сайта и получите ID отслеживания.<br />
          3. Введите полученный ID отслеживания в поле выше и сохраните настройки.<br />
          4. Скопируйте приведенный ниже код и вставьте его в раздел &lt;head&gt; на всех страницах вашего сайта:
        </Text>
        <pre style={{ background: '#f0f0f0', padding: 10, marginTop: 10, whiteSpace: 'pre-wrap' }}>
          {getTrackingCode(form.getFieldValue('trackingId') || 'UA-XXXXXXXXX-X')}
        </pre>
      </Card>
    </div>
  );
};

export default GoogleAnalytics;
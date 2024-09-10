import React, { useState, useEffect } from 'react';
import { Tabs, Radio, Form, Input, Button, message, TimePicker, Select, Space } from 'antd';
import EditHomePage from './EditHomePage';
import ReviewsManager from './ReviewsManager';
import EditAboutPage from './EditAboutPage';
import moment from 'moment';

const { TabPane } = Tabs;
const { Option } = Select;

const ContactSettings = ({ language }) => {
  const [form] = Form.useForm();
  const [workingHours, setWorkingHours] = useState({
    weekdays: { open: true, lunch: true, openTime: '09:00', closeTime: '17:00', lunchStart: '12:00', lunchEnd: '13:00' },
    saturday: { open: true, openTime: '09:00', closeTime: '13:00' },
    sunday: { open: false }
  });

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem(`contacts_${language}`)) || {};
    form.setFieldsValue(savedContacts);
    if (savedContacts.workingHours) {
      setWorkingHours(savedContacts.workingHours);
    }
  }, [form, language]);

  const onFinish = (values) => {
    const dataToSave = { ...values, workingHours };
    localStorage.setItem(`contacts_${language}`, JSON.stringify(dataToSave));
    message.success(`Контактные данные для языка ${language.toUpperCase()} успешно сохранены`);
  };

  const handleWorkingHoursChange = (day, field, value) => {
    setWorkingHours(prev => ({
      ...prev,
      [day]: { ...prev[day], [field]: value }
    }));
  };

  const renderTimePicker = (day, field) => (
    <TimePicker
      format="HH:mm"
      value={moment(workingHours[day][field], 'HH:mm')}
      onChange={(time, timeString) => handleWorkingHoursChange(day, field, timeString)}
    />
  );

  return (
    <div className="contact-settings">
      <h2>Настройки контактных данных ({language.toUpperCase()})</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="address"
          label="Адрес"
          rules={[{ required: true, message: 'Пожалуйста, введите адрес' }]}
        >
          <Input placeholder="Введите адрес" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: 'email', message: 'Пожалуйста, введите корректный email' }]}
        >
          <Input placeholder="Введите email" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Телефон"
          rules={[{ required: true, message: 'Пожалуйста, введите номер телефона' }]}
        >
          <Input placeholder="Введите номер телефона" />
        </Form.Item>
        <Form.Item
          name="googleMapsLink"
          label="Ссылка на Google Maps"
          rules={[{ required: true, type: 'url', message: 'Пожалуйста, введите корректную ссылку на Google Maps' }]}
        >
          <Input placeholder="Введите ссылку на локацию офиса в Google Maps" />
        </Form.Item>
        
        <h3>Часы работы</h3>
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          <div>
            <h4>Понедельник - Пятница</h4>
            <Space>
              <Select
                value={workingHours.weekdays.open ? 'open' : 'closed'}
                onChange={(value) => handleWorkingHoursChange('weekdays', 'open', value === 'open')}
              >
                <Option value="open">Открыто</Option>
                <Option value="closed">Закрыто</Option>
              </Select>
              {workingHours.weekdays.open && (
                <>
                  {renderTimePicker('weekdays', 'openTime')}
                  {renderTimePicker('weekdays', 'closeTime')}
                  <Select
                    value={workingHours.weekdays.lunch ? 'yes' : 'no'}
                    onChange={(value) => handleWorkingHoursChange('weekdays', 'lunch', value === 'yes')}
                  >
                    <Option value="yes">Обед</Option>
                    <Option value="no">Без обеда</Option>
                  </Select>
                  {workingHours.weekdays.lunch && (
                    <>
                      {renderTimePicker('weekdays', 'lunchStart')}
                      {renderTimePicker('weekdays', 'lunchEnd')}
                    </>
                  )}
                </>
              )}
            </Space>
          </div>
          <div>
            <h4>Суббота</h4>
            <Space>
              <Select
                value={workingHours.saturday.open ? 'open' : 'closed'}
                onChange={(value) => handleWorkingHoursChange('saturday', 'open', value === 'open')}
              >
                <Option value="open">Открыто</Option>
                <Option value="closed">Закрыто</Option>
              </Select>
              {workingHours.saturday.open && (
                <>
                  {renderTimePicker('saturday', 'openTime')}
                  {renderTimePicker('saturday', 'closeTime')}
                </>
              )}
            </Space>
          </div>
          <div>
            <h4>Воскресенье</h4>
            <Select
              value={workingHours.sunday.open ? 'open' : 'closed'}
              onChange={(value) => handleWorkingHoursChange('sunday', 'open', value === 'open')}
            >
              <Option value="open">Открыто</Option>
              <Option value="closed">Закрыто</Option>
            </Select>
            {workingHours.sunday.open && (
              <>
                {renderTimePicker('sunday', 'openTime')}
                {renderTimePicker('sunday', 'closeTime')}
              </>
            )}
          </div>
        </Space>

        <Form.Item style={{ marginTop: '20px' }}>
          <Button type="primary" htmlType="submit">
            Сохранить контактные данные
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const SocialMediaSettings = ({ language }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    const savedSocialMedia = JSON.parse(localStorage.getItem(`socialMedia_${language}`)) || {};
    form.setFieldsValue(savedSocialMedia);
  }, [form, language]);

  const onFinish = (values) => {
    localStorage.setItem(`socialMedia_${language}`, JSON.stringify(values));
    message.success(`Настройки социальных сетей для языка ${language.toUpperCase()} успешно сохранены`);
  };

  return (
    <div className="social-media-settings">
      <h2>Настройки социальных сетей ({language.toUpperCase()})</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="instagram"
          label="Instagram"
          rules={[{ type: 'url', message: 'Пожалуйста, введите корректный URL' }]}
        >
          <Input placeholder="https://www.instagram.com/your_account" />
        </Form.Item>
        <Form.Item
          name="youtube"
          label="YouTube"
          rules={[{ type: 'url', message: 'Пожалуйста, введите корректный URL' }]}
        >
          <Input placeholder="https://www.youtube.com/your_channel" />
        </Form.Item>
        <Form.Item
          name="whatsapp"
          label="WhatsApp"
          rules={[{ pattern: /^\+?[1-9]\d{1,14}$/, message: 'Пожалуйста, введите корректный номер телефона' }]}
        >
          <Input placeholder="+1234567890" />
        </Form.Item>
        <Form.Item
          name="facebook"
          label="Facebook"
          rules={[{ type: 'url', message: 'Пожалуйста, введите корректный URL' }]}
        >
          <Input placeholder="https://www.facebook.com/your_page" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Сохранить настройки социальных сетей
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const EditSuite = () => {
  const [language, setLanguage] = useState('ru');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <div style={{ marginBottom: 16, textAlign: 'right' }}>
        <Radio.Group value={language} onChange={handleLanguageChange}>
          <Radio.Button value="en">En</Radio.Button>
          <Radio.Button value="es">Es</Radio.Button>
          <Radio.Button value="ru">Ru</Radio.Button>
        </Radio.Group>
      </div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Главная" key="1">
          <EditHomePage language={language} />
        </TabPane>
        <TabPane tab="Контакты" key="2">
          <ContactSettings language={language} />
        </TabPane>
        <TabPane tab="О нас" key="3">
          <EditAboutPage language={language} />
        </TabPane>
        <TabPane tab="Отзывы" key="4">
          <ReviewsManager reviewType="general" />
        </TabPane>
        <TabPane tab="Отзывы на чип-тюнинг" key="5">
          <ReviewsManager reviewType="chipTuning" />
        </TabPane>
        <TabPane tab="Социальные сети" key="6">
          <SocialMediaSettings language={language} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default EditSuite;
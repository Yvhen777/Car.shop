import React, { useState } from 'react';
import { Table, Select, Card, Button, Modal, Form, Input, DatePicker } from 'antd';
import { DownOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const Orders = () => {
  const [expandedSection, setExpandedSection] = useState('testDrive');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const columns = [
    {
      title: 'Имя',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Номер телефона',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Дата/Время',
      dataIndex: 'dateTime',
      key: 'dateTime',
    },
    {
      title: 'Комментарий',
      dataIndex: 'comment',
      key: 'comment',
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Select defaultValue={status} style={{ width: 120 }}>
          <Option value="Новый">Новый</Option>
          <Option value="В обработке">В обработке</Option>
          <Option value="Готов">Готов</Option>
          <Option value="Ч/С">Ч/С</Option>
          <Option value="Завершен">Завершен</Option>
        </Select>
      ),
    },
  ];

  const data = [
    {
      key: 1,
      name: 'Sam',
      email: 'sam@gmail.com',
      phone: '+31 22816181',
      dateTime: '10/09/2024',
      comment: '-',
      status: 'Новый',
    },
    // Добавьте больше данных по мере необходимости
  ];

  const renderOrderSection = (title, key) => (
    <Card
      title={
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => setExpandedSection(expandedSection === key ? null : key)}
        >
          {title} <DownOutlined rotate={expandedSection === key ? 180 : 0} />
        </div>
      }
      style={{ marginBottom: 16 }}
    >
      {expandedSection === key && <Table columns={columns} dataSource={data} />}
    </Card>
  );

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then(values => {
      form.resetFields();
      setIsModalVisible(false);
      // Здесь вы можете добавить логику для сохранения нового заказа
      console.log('Новый заказ:', values);
    }).catch(info => {
      console.log('Validate Failed:', info);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button 
        type="primary" 
        icon={<PlusOutlined />} 
        onClick={showModal}
        style={{ marginBottom: 16 }}
      >
        Добавить заказ
      </Button>
      {renderOrderSection('Заказ на тест драйв', 'testDrive')}
      {renderOrderSection('Заказ консультации', 'consultation')}
      {renderOrderSection('Заказ на обмен автомобиля', 'carExchange')}
      {renderOrderSection('Заказ на Чип-Тюнинг', 'chipTuning')}

      <Modal 
        title="Добавить новый заказ" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Имя" rules={[{ required: true, message: 'Пожалуйста, введите имя' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Пожалуйста, введите корректный email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Номер телефона" rules={[{ required: true, message: 'Пожалуйста, введите номер телефона' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="dateTime" label="Дата/Время" rules={[{ required: true, message: 'Пожалуйста, выберите дату и время' }]}>
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
          </Form.Item>
          <Form.Item name="comment" label="Комментарий">
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="status" label="Статус" rules={[{ required: true, message: 'Пожалуйста, выберите статус' }]}>
            <Select>
              <Option value="Новый">Новый</Option>
              <Option value="В обработке">В обработке</Option>
              <Option value="Готов">Готов</Option>
              <Option value="Ч/С">Ч/С</Option>
              <Option value="Завершен">Завершен</Option>
            </Select>
          </Form.Item>
          <Form.Item name="orderType" label="Тип заказа" rules={[{ required: true, message: 'Пожалуйста, выберите тип заказа' }]}>
            <Select>
              <Option value="testDrive">Заказ на тест драйв</Option>
              <Option value="consultation">Заказ консультации</Option>
              <Option value="carExchange">Заказ на обмен автомобиля</Option>
              <Option value="chipTuning">Заказ на Чип-Тюнинг</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Orders;
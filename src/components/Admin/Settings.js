import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message, Table, Modal, Select, DatePicker, Upload } from 'antd';
import { ExclamationCircleOutlined, UploadOutlined } from '@ant-design/icons';
import moment from 'moment';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { confirm } = Modal;

const Settings = () => {
  const [form] = Form.useForm();
  const [admins, setAdmins] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState(null);
  const [favicon, setFavicon] = useState(null);

  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem('siteSettings')) || {};
    form.setFieldsValue(savedSettings);
    const savedAdmins = JSON.parse(localStorage.getItem('admins')) || [];
    setAdmins(savedAdmins);
    const savedFavicon = localStorage.getItem('favicon');
    if (savedFavicon) {
      setFavicon(savedFavicon);
    }
  }, [form]);

  const onFinish = (values) => {
    localStorage.setItem('siteSettings', JSON.stringify(values));
    message.success('Настройки успешно сохранены');
  };

  const showModal = () => {
    setIsModalVisible(true);
    setEditingAdmin(null);
  };

  const handleOk = () => {
    form.validateFields().then(values => {
      if (editingAdmin) {
        const updatedAdmins = admins.map(admin =>
          admin.id === editingAdmin.id ? { ...admin, ...values } : admin
        );
        setAdmins(updatedAdmins);
        localStorage.setItem('admins', JSON.stringify(updatedAdmins));
      } else {
        const newAdmin = { ...values, id: Date.now() };
        setAdmins([...admins, newAdmin]);
        localStorage.setItem('admins', JSON.stringify([...admins, newAdmin]));
      }
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleEdit = (record) => {
    setEditingAdmin(record);
    setIsModalVisible(true);
    form.setFieldsValue(record);
  };

  const handleDelete = (id) => {
    confirm({
      title: 'Вы уверены, что хотите удалить этого администратора?',
      icon: <ExclamationCircleOutlined />,
      content: 'Это действие нельзя отменить',
      onOk() {
        const updatedAdmins = admins.filter(admin => admin.id !== id);
        setAdmins(updatedAdmins);
        localStorage.setItem('admins', JSON.stringify(updatedAdmins));
        message.success('Администратор успешно удален');
      },
    });
  };

  const handleFaviconUpload = (info) => {
    if (info.file.status === 'done') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target.result;
        setFavicon(dataUrl);
        localStorage.setItem('favicon', dataUrl);
        message.success('Favicon успешно загружен');
      };
      reader.readAsDataURL(info.file.originFileObj);
    } else if (info.file.status === 'error') {
      message.error('Ошибка загрузки favicon');
    }
  };

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
      title: 'Роль',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Действия',
      key: 'actions',
      render: (_, record) => (
        <span>
          <Button onClick={() => handleEdit(record)}>Редактировать</Button>
          <Button onClick={() => handleDelete(record.id)} style={{ marginLeft: 8 }}>Удалить</Button>
        </span>
      ),
    },
  ];

  const handleExport = (dates) => {
    const [startDate, endDate] = dates;
    const orders = [
      { id: 1, date: '2023-05-01', customer: 'John Doe', total: 1000 },
      { id: 2, date: '2023-05-02', customer: 'Jane Smith', total: 1500 },
    ];

    const filteredOrders = orders.filter(order =>
      moment(order.date).isBetween(startDate, endDate, null, '[]')
    );

    const csv = filteredOrders.map(order =>
      Object.values(order).join(',')
    ).join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", `orders_${startDate.format('YYYY-MM-DD')}_${endDate.format('YYYY-MM-DD')}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="site-settings">
      <h2>Общие настройки сайта</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="siteName" label="Название сайта" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="siteUrl" label="URL сайта" rules={[{ required: true, type: 'url' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="adminEmail" label="Email администратора" rules={[{ required: true, type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Favicon">
          <Upload
            name="favicon"
            listType="picture"
            maxCount={1}
            accept=".ico,.png"
            onChange={handleFaviconUpload}
          >
            <Button icon={<UploadOutlined />}>Загрузить Favicon</Button>
          </Upload>
        </Form.Item>
        {favicon && (
          <div style={{ marginBottom: 16 }}>
            <p>Текущий Favicon:</p>
            <img src={favicon} alt="Current Favicon" style={{ width: 32, height: 32 }} />
          </div>
        )}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Сохранить настройки
          </Button>
        </Form.Item>
      </Form>

      <h2>Управление администраторами</h2>
      <Button onClick={showModal} style={{ marginBottom: 16 }}>
        Добавить администратора
      </Button>
      <Table columns={columns} dataSource={admins} rowKey="id" />

      <Modal
        title={editingAdmin ? "Редактировать администратора" : "Добавить администратора"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Имя" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="role" label="Роль" rules={[{ required: true }]}>
            <Select>
              <Option value="admin">Администратор</Option>
              <Option value="editor">Редактор</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>

      <h2>Экспорт заказов</h2>
      <RangePicker
        style={{ marginBottom: 16 }}
        onChange={handleExport}
      />
    </div>
  );
};

export default Settings;

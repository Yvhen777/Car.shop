import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, Upload, Radio, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const ReviewsManager = ({ reviewType }) => {
  const [reviews, setReviews] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [language, setLanguage] = useState('ru');

  useEffect(() => {
    // В реальном приложении здесь бы загружались отзывы с сервера
    setReviews([
      { id: 1, title: 'Отличный сервис!', description: 'Я очень доволен своей покупкой.', purchasedCar: 'Audi A4 2020', language: 'ru' },
      { id: 2, title: 'Great service!', description: 'I am very satisfied with my purchase.', purchasedCar: 'BMW X5 2019', language: 'en' },
    ]);
  }, []);

  const columns = [
    {
      title: 'Заголовок',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
    },
    {
      title: reviewType === 'chipTuning' ? 'Автомобиль' : 'Купленный автомобиль',
      dataIndex: 'purchasedCar',
      key: 'purchasedCar',
    },
    {
      title: 'Язык',
      dataIndex: 'language',
      key: 'language',
    },
    {
      title: 'Действия',
      key: 'actions',
      render: (_, record) => (
        <span>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)} style={{ marginLeft: 8 }} />
        </span>
      ),
    },
  ];

  const handleAdd = () => {
    setEditingReviewId(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEdit = (record) => {
    setEditingReviewId(record.id);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter(review => review.id !== id));
    message.success('Отзыв успешно удален');
  };

  const handleModalOk = () => {
    form.validateFields().then(values => {
      if (editingReviewId) {
        setReviews(reviews.map(review => review.id === editingReviewId ? { ...review, ...values } : review));
        message.success('Отзыв успешно обновлен');
      } else {
        setReviews([...reviews, { ...values, id: reviews.length + 1 }]);
        message.success('Новый отзыв успешно добавлен');
      }
      setIsModalVisible(false);
    });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button icon={<PlusOutlined />} onClick={handleAdd} style={{ marginBottom: 16 }}>
        Добавить отзыв
      </Button>
      <Table columns={columns} dataSource={reviews} rowKey="id" />
      <Modal
        title={editingReviewId ? "Редактировать отзыв" : "Добавить новый отзыв"}
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="language" label="Язык" rules={[{ required: true }]}>
            <Radio.Group onChange={(e) => setLanguage(e.target.value)} value={language}>
              <Radio.Button value="ru">Ru</Radio.Button>
              <Radio.Button value="en">En</Radio.Button>
              <Radio.Button value="es">Es</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="title" label="Заголовок" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Описание" rules={[{ required: true }]}>
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item name="purchasedCar" label={reviewType === 'chipTuning' ? 'Автомобиль' : 'Купленный автомобиль'} rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="image" label="Фото">
            <Upload>
              <Button icon={<UploadOutlined />}>Загрузить фото</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ReviewsManager;
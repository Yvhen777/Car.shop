import React from 'react';
import { Form, Input, Button, Upload, Space, Card, Divider } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const EditHomePage = ({ language }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Сохраненные значения:', values);
    console.log('Текущий язык:', language);
    // Здесь будет логика сохранения данных на сервере с учетом выбранного языка
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Card title="Блок 1 Баннер">
        <Form.Item name={['banner', 'title1']} label="Заголовок 1">
          <Input placeholder="Введите текст Заголовка 1" />
        </Form.Item>
        <Form.Item name={['banner', 'title2']} label="Заголовок 2">
          <Input placeholder="Введите текст Заголовка 2" />
        </Form.Item>
        <Form.Item name={['banner', 'description']} label="Описание">
          <TextArea placeholder="Введите текст Описание" />
        </Form.Item>
        <Form.Item name={['banner', 'buttonText']} label="Кнопка главного Баннера">
          <Input placeholder="Введите текст кнопки" />
        </Form.Item>
        <Form.Item name={['banner', 'buttonLink']} label="Ссылка кнопки">
          <Input placeholder="Вставьте ссылку для кнопки" />
        </Form.Item>
      </Card>

      <Divider />

      <Card title="Главный слайдер">
        <Form.Item name="sliderImage1" label="Add Photo_1/ 1920x1080">
          <Upload>
            <Button icon={<UploadOutlined />}>Загрузить</Button>
          </Upload>
        </Form.Item>
        <Form.Item name="sliderImage2" label="Add Photo_2/ 1920x1080">
          <Upload>
            <Button icon={<UploadOutlined />}>Загрузить</Button>
          </Upload>
        </Form.Item>
        <Form.Item name="sliderImage3" label="Add Photo_3/ 1920x1080">
          <Upload>
            <Button icon={<UploadOutlined />}>Загрузить</Button>
          </Upload>
        </Form.Item>
      </Card>

      <Divider />

      <Card title="Блок 3 Преимущества">
        <Form.Item name={['advantages', 'title']} label="Введите текст Главного Заголовка блока">
          <Input placeholder="МЫ ГОТОВЫ ДЛЯ ВАС" />
        </Form.Item>
        <Form.Item name={['advantages', 'image1']} label="Add Photo_1/ 1920x1080">
          <Upload>
            <Button icon={<UploadOutlined />}>Загрузить</Button>
          </Upload>
        </Form.Item>
        <Form.Item name={['advantages', 'image2']} label="Add Photo_2/ 1920x1080">
          <Upload>
            <Button icon={<UploadOutlined />}>Загрузить</Button>
          </Upload>
        </Form.Item>
        <Form.Item name={['advantages', 'image3']} label="Add Photo_3/ 1920x1080">
          <Upload>
            <Button icon={<UploadOutlined />}>Загрузить</Button>
          </Upload>
        </Form.Item>
      </Card>

      <Divider />

      <Card title="Текст с кнопкой 1">
        <Form.Item name={['text1', 'title']} label="Введите текст Заголовка 1">
          <Input />
        </Form.Item>
        <Form.Item name={['text1', 'buttonText']} label="Введите текст кнопки">
          <Input />
        </Form.Item>
        <Form.Item name={['text1', 'buttonLink']} label="Вставьте ссылку кнопки">
          <Input />
        </Form.Item>
      </Card>

      <Divider />

      <Card title="Текст с кнопкой 2">
        <Form.Item name={['text2', 'title']} label="Введите текст Заголовка 2">
          <Input />
        </Form.Item>
        <Form.Item name={['text2', 'description']} label="Введите Описание">
          <TextArea />
        </Form.Item>
        <Form.Item name={['text2', 'buttonText']} label="Введите текст кнопки">
          <Input />
        </Form.Item>
        <Form.Item name={['text2', 'buttonLink']} label="Вставьте ссылку кнопки">
          <Input />
        </Form.Item>
      </Card>

      <Divider />

      <Card title="Текст с кнопкой 3">
        <Form.Item name={['text3', 'title']} label="Введите текст Заголовка 3">
          <Input />
        </Form.Item>
        <Form.Item name={['text3', 'description']} label="Введите Описание">
          <TextArea />
        </Form.Item>
        <Form.Item name={['text3', 'buttonText']} label="Введите текст кнопки">
          <Input />
        </Form.Item>
        <Form.Item name={['text3', 'buttonLink']} label="Вставьте ссылку кнопки">
          <Input />
        </Form.Item>
      </Card>

      <Divider />

      <Card title="Блок 4 О нас">
        <Form.Item name={['about', 'title']} label="Введите текст Заголовка 1">
          <Input />
        </Form.Item>
        <Form.Item name={['about', 'description']} label="Введите текст описания">
          <TextArea />
        </Form.Item>
        <Form.Item name={['about', 'buttonText']} label="Введите текст кнопки">
          <Input />
        </Form.Item>
        <Form.Item name={['about', 'buttonLink']} label="Вставьте ссылку кнопки">
          <Input />
        </Form.Item>
        <Form.Item name={['about', 'image1']} label="Add Photo_1/ 1920x1080">
          <Upload>
            <Button icon={<UploadOutlined />}>Загрузить</Button>
          </Upload>
        </Form.Item>
        <Form.Item name={['about', 'image2']} label="Add Photo_2/ 1920x1080">
          <Upload>
            <Button icon={<UploadOutlined />}>Загрузить</Button>
          </Upload>
        </Form.Item>
      </Card>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Сохранить изменения для языка: {language.toUpperCase()}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditHomePage;
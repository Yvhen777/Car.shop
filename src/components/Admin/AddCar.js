import React, { useState } from 'react';
import { Form, Input, InputNumber, Select, Button, Upload, message, Tabs, Radio, Space, Collapse } from 'antd';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;
const { Panel } = Collapse;

const AddCar = () => {
  const [form] = Form.useForm();
  const [language, setLanguage] = useState('ru');

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // Здесь будет логика отправки данных на сервер
    message.success('Автомобиль успешно добавлен');
    form.resetFields();
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const bodyTypes = ['Седан', 'Хэтчбек', 'Универсал', 'Купе', 'Кабриолет', 'Внедорожник', 'Минивэн'];

  // Поля для вкладки "Общая информация"
  const commonFields = (
    <div className="grid grid-cols-2 gap-4">
      <Form.Item name={['common', 'brand']} label="Бренд" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['common', 'model']} label="Модель" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['common', 'bodyType']} label="Кузов" rules={[{ required: true }]}>
        <Select>
          {bodyTypes.map(type => (
            <Option key={type} value={type}>{type}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name={['common', 'mileage']} label="Пробег" rules={[{ required: true }]}>
        <InputNumber min={0} formatter={value => `${value} KM`} parser={value => value.replace(' KM', '')} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name={['common', 'year']} label="Год постройки" rules={[{ required: true }]}>
        <InputNumber min={1900} max={2099} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name={['common', 'price']} label="Цена" rules={[{ required: true }]}>
        <InputNumber min={0} formatter={value => `${value} €`} parser={value => value.replace(' €', '')} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name={['common', 'fuel']} label="Топливо">
        <Select>
          <Option value="petrol">Бензин</Option>
          <Option value="diesel">Дизель</Option>
          <Option value="electric">Электро</Option>
          <Option value="hybrid">Гибрид</Option>
        </Select>
      </Form.Item>
      <Form.Item name={['common', 'licensePlate']} label="Номерной знак">
        <Input />
      </Form.Item>
      <Form.Item name={['common', 'seats']} label="Количество мест">
        <InputNumber min={1} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name={['common', 'doors']} label="Количество дверей">
        <InputNumber min={1} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name={['common', 'keys']} label="Количество ключей">
        <InputNumber min={1} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name={['common', 'cylinders']} label="Количество цилиндров">
        <InputNumber min={1} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name={['common', 'engineVolume']} label="Объем двигателя">
        <InputNumber min={0} step={0.1} formatter={value => `${value} CC`} parser={value => value.replace(' CC', '')} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name={['common', 'electricPower']} label="Электрическая мощность">
        <InputNumber min={0} formatter={value => `${value} HP`} parser={value => value.replace(' HP', '')} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name={['common', 'electricRange']} label="Электрический диапазон">
        <InputNumber min={0} formatter={value => `${value} KM`} parser={value => value.replace(' KM', '')} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name={['common', 'acceleration']} label="Ускорение 0-100">
        <InputNumber min={0} step={0.1} formatter={value => `${value} sec.`} parser={value => value.replace(' sec.', '')} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name={['common', 'weight']} label="Масса">
        <InputNumber min={0} formatter={value => `${value} kg`} parser={value => value.replace(' kg', '')} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name={['common', 'co2Emissions']} label="Выбросы CO2">
        <InputNumber min={0} formatter={value => `${value} g/km`} parser={value => value.replace(' g/km', '')} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name={['common', 'averageConsumption']} label="Среднее потребление">
        <InputNumber min={0} step={0.1} formatter={value => `${value} l/100km`} parser={value => value.replace(' l/100km', '')} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name={['common', 'power']} label="Ресурсы">
        <InputNumber min={0} formatter={value => `${value} HP`} parser={value => value.replace(' HP', '')} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name={['common', 'maxSpeed']} label="Максимальная скорость">
        <InputNumber min={0} formatter={value => `${value} km/h`} parser={value => value.replace(' km/h', '')} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name={['common', 'tankCapacity']} label="Емкость бака">
        <InputNumber min={0} formatter={value => `${value} liters`} parser={value => value.replace(' liters', '')} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name={['common', 'energyLabel']} label="Маркировка энергоэффективности">
        <Select>
          <Option value="A">A</Option>
          <Option value="B">B</Option>
          <Option value="C">C</Option>
          <Option value="D">D</Option>
          <Option value="E">E</Option>
          <Option value="F">F</Option>
          <Option value="G">G</Option>
        </Select>
      </Form.Item>
      <Form.Item name={['common', 'transmission']} label="Коробка Передач">
        <Select>
          <Option value="manual">Manual</Option>
          <Option value="Automatic">Automatic</Option>
          <Option value="Robot">Robot</Option>
        </Select>
      </Form.Item>
      <Form.Item name={['common', 'color']} label="Цвет">
        <Input />
      </Form.Item>
      <Form.Item name={['common', 'technicalBooklet']} label="Имеется буклет по техническому обслуживанию?">
        <Select>
          <Option value="yes">Да</Option>
          <Option value="no">Нет</Option>
        </Select>
      </Form.Item>
      <Form.Item name={['common', 'youtubeLink']} label="Ссылка на YouTube видео">
        <Input placeholder="https://www.youtube.com/watch?v=..." />
      </Form.Item>
    </div>
  );

  // Поля для вкладки "Языковая информация"
  const languageSpecificFields = (
    <div className="space-y-4">
      <Form.Item name={[language, 'description']} label="Описание">
        <TextArea rows={4} />
      </Form.Item>
      <div className="grid grid-cols-2 gap-4">
        <Form.Item name={[language, 'interiorColor']} label="Цвет салона">
          <Input />
        </Form.Item>
        <Form.Item name={[language, 'upholstery']} label="Обивка">
          <Input />
        </Form.Item>
      </div>
      <Collapse>
        {['exterior', 'interior', 'infotainment', 'safety', 'other'].map(category => (
          <Panel header={category.charAt(0).toUpperCase() + category.slice(1)} key={category}>
            <Form.List name={[language, 'equipment', category]}>
              {(fields, { add, remove }) => (
                <div>
                  {fields.map(field => (
                    <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                      <Form.Item
                        {...field}
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[{ required: true, whitespace: true, message: "Введите элемент комплектации или удалите это поле" }]}
                        noStyle
                      >
                        <Input placeholder={`Элемент комплектации`} style={{ width: 'auto', flexGrow: 1 }} />
                      </Form.Item>
                      <Button onClick={() => remove(field.name)} type="link" danger>Удалить</Button>
                    </Space>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                      Добавить
                    </Button>
                  </Form.Item>
                </div>
              )}
            </Form.List>
          </Panel>
        ))}
      </Collapse>
    </div>
  );

  return (
    <div className="add-car p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Добавление нового автомобиля</h2>
      <Form form={form} layout="vertical" onFinish={onFinish} className="space-y-6">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Общая информация" key="1">
            {commonFields}
          </TabPane>
          <TabPane tab="Языковая информация" key="2">
            <Radio.Group value={language} onChange={handleLanguageChange} className="mb-4">
              <Radio.Button value="ru">Ru</Radio.Button>
              <Radio.Button value="en">En</Radio.Button>
              <Radio.Button value="es">Es</Radio.Button>
            </Radio.Group>
            {languageSpecificFields}
          </TabPane>
        </Tabs>
        <Form.Item name="images" label="Фотографии" rules={[{ required: true }]}>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76" // Замените на ваш реальный URL для загрузки
            listType="picture-card"
            multiple
          >
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Загрузить</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Добавить автомобиль
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCar;

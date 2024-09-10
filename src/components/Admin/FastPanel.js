import React from 'react';
import { Card, Row, Col, Statistic, Input } from 'antd';
import { UserOutlined, CarOutlined, FileTextOutlined, MailOutlined } from '@ant-design/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FastPanel = () => {
  // Пример данных для графика
  const data = [
    { name: 'Пн', посетители: 400, заявки: 24 },
    { name: 'Вт', посетители: 300, заявки: 13 },
    { name: 'Ср', посетители: 500, заявки: 28 },
    { name: 'Чт', посетители: 280, заявки: 19 },
    { name: 'Пт', посетители: 590, заявки: 30 },
    { name: 'Сб', посетители: 350, заявки: 21 },
    { name: 'Вс', посетители: 400, заявки: 25 },
  ];

  return (
    <div className="fast-panel">
      <h2 className="fast-panel__title">Быстрая панель</h2>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="Сколько посетителей сейчас на сайте"
              value={614}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="Сколько машин сейчас на сайте"
              value={15}
              prefix={<CarOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="Сколько всего новых заявок"
              value={10}
              prefix={<FileTextOutlined />}
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="Сколько обращений за этот месяц"
              value={312}
              prefix={<FileTextOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="Сколько обращений за прошлый месяц"
              value={1240}
              prefix={<FileTextOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <div>
              <h4>Заказать рекламу, продвижение или разработку</h4>
              <Input 
                prefix={<MailOutlined />} 
                defaultValue="bmmdirect@gmail.com" 
                readOnly
              />
            </div>
          </Card>
        </Col>
      </Row>
      <Card className="fast-panel__chart" style={{ marginTop: '20px' }}>
        <h3>Аналитика посещений и заявок за неделю</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="посетители" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="заявки" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default FastPanel;

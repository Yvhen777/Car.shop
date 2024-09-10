import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { 
  DashboardOutlined, 
  ShoppingCartOutlined,
  EditOutlined,
  PlusCircleOutlined,
  SettingOutlined,
  RocketOutlined,
  GlobalOutlined,
  BarChartOutlined,
  SaveOutlined,
  LogoutOutlined
} from '@ant-design/icons';

import FastPanel from './FastPanel';
import Orders from './Orders';
import EditSuite from './EditSuite';
import AddCar from './AddCar';
import Settings from './Settings';
import ChipTuning from './ChipTuning';
import SEO from './SEO';
import GoogleAnalytics from './GoogleAnalytics';
import SaveUpdate from './SaveUpdate';

const { Header, Sider, Content } = Layout;

const AdminPanel = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/admin');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/admin">Fast panel</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
            <Link to="/admin/orders">Orders</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<EditOutlined />}>
            <Link to="/admin/edit-suite">Edit Suite</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<PlusCircleOutlined />}>
            <Link to="/admin/add-car">Add Car</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<SettingOutlined />}>
            <Link to="/admin/settings">Settings</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<RocketOutlined />}>
            <Link to="/admin/chip-tuning">Chip tuning</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<GlobalOutlined />}>
            <Link to="/admin/seo">SEO</Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<BarChartOutlined />}>
            <Link to="/admin/google-analytics">Google Analytics</Link>
          </Menu.Item>
          <Menu.Item key="9" icon={<SaveOutlined />}>
            <Link to="/admin/save-update">Save/Update BackApp</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Button 
            type="primary" 
            icon={<LogoutOutlined />}
            style={{ float: 'right', margin: '16px' }}
            onClick={handleLogout}
          >
            Выйти
          </Button>
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
          <Routes>
            <Route path="/" element={<FastPanel />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/edit-suite" element={<EditSuite />} />
            <Route path="/add-car" element={<AddCar />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/chip-tuning" element={<ChipTuning />} />
            <Route path="/seo" element={<SEO />} />
            <Route path="/google-analytics" element={<GoogleAnalytics />} />
            <Route path="/save-update" element={<SaveUpdate />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPanel;
'use client';

import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { useState } from 'react';

const items: MenuProps['items'] = [
  {
    label: 'Accueil',
    key: 'home',
    icon: <MailOutlined />,
    style: { float: 'right' },
  },
  {
    label: 'Enchères',
    key: 'auctions',
    icon: <MailOutlined />,
    style: { float: 'right' },
  },
  {
    label: 'Profil',
    key: 'profile',
    icon: <AppstoreOutlined />,
    style: { marginLeft: 'auto' },
    children: [
      {
        label: 'Mon compte',
        key: 'account',
      },
      {
        label: 'Réglages',
        key: 'setting',
      },
    ],
  },
];

const NavBar: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Layout>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </Layout>
  );
};

export default NavBar;

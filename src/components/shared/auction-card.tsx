import React, { useEffect, useState } from 'react';
import { Button, Card, Divider } from 'antd';
import { Statistic } from 'antd';

import CountDown from './countdown';
import Resume from './resume';
import { DollarOutlined } from '@ant-design/icons';
import AuctionDrawer from './auction-drawer';

function AuctionCard() {
  const [drawerOpened, setdrawerOpened] = useState(false);

  const [auction, setAuction] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/auction')
      .then((res) => res.json())
      .then((data) => {
        setAuction(data);
        setLoading(false);
      });
  }, []);

  return (
    <Card title={auction?.title} hoverable={true}>
      <CountDown start={Date.now()} />
      <Divider />
      <Statistic
        title="Offre la plus haute actuelle"
        value={37500}
        suffix={'€ / an'}
      />
      <Divider />
      <Resume />
      <Button type="primary" onClick={() => setdrawerOpened(true)}>
        <DollarOutlined />
        Enchérir
      </Button>
      {drawerOpened && <AuctionDrawer />}
    </Card>
  );
}

function MyComponent() {
  return <p>This is my component.</p>;
}

export default AuctionCard;

import React, { useState } from 'react';
import { Button, Card, Divider } from 'antd';
import { Statistic } from 'antd';

import CountDown from './countdown';
import Resume from './resume';
import { DollarOutlined } from '@ant-design/icons';
import AuctionDrawer from './auction-drawer';

const AuctionCard = (act: Auction) => {
  const [drawerOpened, setdrawerOpened] = useState(false);
  console.log(act);

  return (
    <Card title={act?.title} hoverable={true}>
      <CountDown start={Date.now()} />
      <Divider />
      <Statistic
        title="Offre la plus haute actuelle"
        value={act.bid[0].amount}
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
};

export default AuctionCard;

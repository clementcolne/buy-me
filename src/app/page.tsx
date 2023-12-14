'use client';

import AuctionCard from '@/components/shared/auction-card';
import SignInButton from '@/components/shared/signin-button';

import { Col, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';

const Home = () => {
  const [auctions, setData] = useState<Auction[]>([]);

  useEffect(() => {
    fetch('/api/auction')
      .then((res) => res.json())
      .then((a) => {
        setData(a);
      });
  }, []);

  return (
    <Content>
      <SignInButton />
      <div className="main-container">
        <Row gutter={20}>
          {auctions.map((act: Auction) => {
            return (
              <Col key={act.id} span={8}>
                <AuctionCard {...act} />
              </Col>
            );
          })}
        </Row>
      </div>
    </Content>
  );
};

export default Home;

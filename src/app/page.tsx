'use client';

import AuctionCard from '@/components/shared/auction-card';
import SignInButton from '@/components/shared/signin-button';

import { Col, Row, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';

export default function Home() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content>
      <SignInButton />
      <div className="main-container">
        <Row gutter={20}>
          <Col span={8}>
            <AuctionCard />
          </Col>
          <Col span={8}>
            <AuctionCard />
          </Col>
          <Col span={8}>
            <AuctionCard />
          </Col>
        </Row>
      </div>
    </Content>
  );
}

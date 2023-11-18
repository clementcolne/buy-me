import React from 'react';
import { Statistic } from 'antd';

const { Countdown } = Statistic;

function CountDown(start: any) {
  return (
    <Countdown
      title="Temps restant avant la fin de l'enchère"
      value={computeCountdown(start.start)}
    />
  );
}

const computeCountdown = (start: number) =>
  start + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

export default CountDown;

import { observer } from 'mobx-react-lite';
import React from 'react';
import useStore from '~/index';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { options, data } from './data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const Index = () => {
  const { homeStore } = useStore();
  const { active } = homeStore;
  console.log(active);
  return (
    <div id="main" style={{ width: '800px', height: '400px' }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default observer(Index);

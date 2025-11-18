import { BarChart, Bar, Rectangle, XAxis, YAxis, Tooltip } from 'recharts';


const data = [
  {
    name: 'เรื่อง A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'เรื่อง B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'เรื่อง C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'เรื่อง D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'เรื่อง E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'เรื่อง F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'เรื่อง G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const ContentHitsBarChart = () => {
  return (
    <BarChart
      style={{ width: '100%', maxHeight: '50vh', aspectRatio: '16/9' }}
      responsive      
      data={data}
    >
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Bar dataKey="pv" fill="#60ff82ff" activeBar={<Rectangle fill="Red" />} />
    </BarChart>
  );
};

export default ContentHitsBarChart;
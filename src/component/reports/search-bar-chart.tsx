import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'เรื่อง A',
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'เรื่อง B',
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'เรื่อง C',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'เรื่อง D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'เรื่อง E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'เรื่อง F',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

// #endregion
const SearchBarChart = () => {
  return (
    <ComposedChart
      layout="vertical"
      style={{ width: '100%', maxHeight: '60vh', aspectRatio: '16/9' }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" scale="band" width="auto" />
      <Tooltip />
       <Bar dataKey="pv" barSize={48} fill="#60ff82ff" />
    </ComposedChart>
  );
};

export default SearchBarChart;
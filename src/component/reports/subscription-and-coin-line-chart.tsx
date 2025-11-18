import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

const monthlyRevenueData = [
    {
        month: 'ม.ค.',
        MRR: 12000,         
        coin_revenue: 1200
    },
    {
        month: 'ก.พ.',
        MRR: 14500,       
        coin_revenue: 300   
    },
    {
        month: 'มี.ค.',
        MRR: 15100,       
        coin_revenue: 2500 
    },
    {
        month: 'เม.ย.',
        MRR: 13900,      
        coin_revenue: 800 
    },
    {
        month: 'พ.ค.',
        MRR: 16200,        
        coin_revenue: 4500
    },
    {
        month: 'มิ.ย.',
        MRR: 17000,        
        coin_revenue: 1500  
    },
];

// #endregion
const SubscriptionAndCoinLineChart = () => {
  return (
    <AreaChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      
      data={monthlyRevenueData}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <XAxis dataKey="month" />
      <YAxis width="auto" />
      <Tooltip />
      <Area type="monotone" dataKey="MRR" stroke="#558b2f" fill="#d0f8ce" />
      <Area type="monotone" dataKey="coin_revenue" stroke="#d01716" fill="#f9bdbb"  name="รายได้จากการซื้อเหรียญ" />
    </AreaChart>
  );
};

export default SubscriptionAndCoinLineChart;
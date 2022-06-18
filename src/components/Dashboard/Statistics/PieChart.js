import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
  
  const PieChart = ({ data,options }) => {
    ChartJS.register(ArcElement, Tooltip, Legend);

  
    return <Pie data={data}  options={options}/>;
  };
  
  export default PieChart;
  
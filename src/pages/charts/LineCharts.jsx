import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

const LineCharts = () => {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      type: 'line',
      height: 350
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    markers: {
      size: 4,
    },
    xaxis: {
      categories: [],
    },
    yaxis: {
      title: {
        text: 'Population'
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        }
      }
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://65cd83b3c715428e8b3e8842.mockapi.io/api/v1/learning/courses');
        const data = response.data;

        // Extract cities and populations
        const cities = data.map(item => item.city);
        const populations = data.map(item => item.population);

        // Update chart options and series
        setOptions(prevOptions => ({
          ...prevOptions,
          xaxis: {
            ...prevOptions.xaxis,
            categories: cities,
          },
        }));

        setSeries([{
          name: 'Population',
          data: populations
        }]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='content-wrapper'>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="line" height={350} />
      </div>
    </div>
  );
};

export default LineCharts;

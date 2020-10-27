import React from 'react';
import { Bar } from 'react-chartjs-2';

const state = {
  labels: ['Al-Hudaydah', 'Al-Mahwit', 'Amran', 'Dhamar','Hajja', 'Ibb', 'Lahj', 'Marib', 'Sa ada',
  'Sana a','Shabwa', 'Taiz' ],
  datasets: [
    {
      label: 'Numbers of airstrikes',
      fill: false,
      lineTension: 0,
      backgroundColor: [
        'rgba(200, 46, 81, 0.3)',
        'rgba(200, 46, 81, 0.1)',
        'rgba(112, 27, 43, 0.2)',
        'rgba(234, 0, 92, 0.2)',
        'rgba(200, 46, 81, 0.4)',
        'rgba(234, 0, 92, 0.2)',
        'rgba(200, 46, 81, 0.5)',
        'rgba(112, 27, 43, 0.6)',
        'rgba(200, 46, 81, 0.2)',
        'rgba(112, 27, 43, 0.4)',
        'rgba(200, 46, 81, 0.5)',
        'rgba(234, 0, 92, 0.2)',
      ],
      borderWidth: 2,
      data: [ 6, 17 , 16, 1, 15, 7, 4, 7, 21,
      20, 1, 16],
      options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        },
      },
    }
  ]
}

const options = {
    legend:{
      display: true,
      position:'right'
    },
    barPercentage: 0.9,
    categoryPercentage:0.10,
  
}

export default function Location() {

    return (
      <div>
        <Bar
          data={state}
          options={options}
        />
      </div>
    );
  
}
import React from 'react';
import { Line } from 'react-chartjs-2';


const state = {
  labels: ['2015-Apr', '2015-May', '2015-Jul', '2015-Aug', '2015-Sep', '2015-Oct', '2015-Nov','2015-Dec','2016-Jan','2016-Feb','2016-Mar','2016-Jul','2016-Aug','2016-Sep','2016-Oct','2016-Nov','2016-Dec'
           ,'2017-Jan', '2017-Feb', '2017-Mar','2017-Apr','2017-Aug','2017-Sep','2017-Nov','2017-Dec','2018-Jan','2018-Feb','2018-Apr','2018-Jul','2018-Sep',
           '2019-Jan','2019-Mar','2019-Aug'],

  datasets: [
    {
      label: 'Numbers of airstrikes',
      fill: true,
      lineTension: 0,
      backgroundColor:  'rgba(200, 46, 81, 0.3)',
      borderColor: '#b32e51',
      borderWidth: 2,
      lineTension: 0,
      pointBackgroundColor: '#a50a3a',
      pointBorderColor: '#a50a3a',
      data: [4, 3, 7, 1, 13, 9, 1, 2, 1, 9, 3, 3, 14, 8, 4, 3, 2, 12, 2, 6, 2, 1, 5, 2, 3, 1, 3, 1, 1, 2,
        1, 1, 1],
      options: {
          scales: {
              yAxes: [{
                  stacked: false
              }]
          },
        },
    }, {
      label: '',
      fill: false,
      lineTension: 0,
      backgroundColor: '#b32e51a6',
      borderColor: '#b32e51',
      borderWidth: 2,

      lineTension: 0.5,
      data: [4 , 3, 7, 1, 13, 9, 1, 2, 1, 9, 3, 3, 14, 8, 4, 3, 2, 12, 2, 6, 2, 1, 5, 2, 3, 1, 3, 1, 1, 2,
        1, 1, 1],
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
  title:{
    text:'Trends and patterns',
    fontSize:20
  },
  legend:{
    display: false,
    position:'right'
  },
  barPercentage: 0.9,
  categoryPercentage:0.10,
  type: 'linear',
  position: 'center',
  id: 'y-axis-2',
  gridLines: {
    drawOnArea: false,
  },
}


export default function Patterns() {
  
    return (
      <div>
        <Line
          data={state}
          options={options} 
        />
      </div>
    );
  
}
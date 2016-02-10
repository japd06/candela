import Dummy from './components/Dummy';
import LineChart from './components/VCharts';
import ParallelCoordinates from './components/ParallelCoordinates';
import $ from 'jquery';

function dummy () {
  let el = document.getElementById('raw');

  let data = [
    {
      text: 'one, two',
      color: 'blue'
    },

    {
      text: 'buckle my shoe',
      color: 'green'
    }
  ];

  let vis = new Dummy(el, data);
  vis.render();

  window.setTimeout(() => {
    data = [
      {
        text: 'three, four',
        color: 'red'
      },

      {
        text: 'open the door',
        color: 'chartreuse'
      }
    ];

    vis.data(data);
    vis.render();
  }, 1000);
}

function linechart () {
  let el = document.getElementById('vcharts-line');

  let data = [];

  for (let i = 0; i < 1000; i++) {
    data.push([i, Math.random() * 10]);
  }

  let vis = new LineChart(el, data);
  vis.render();
}

function parallelCoordinates () {
  let el = document.getElementById('parallel-coords');

  let data = [
    'games',
    'age',
    'free throw percent',
    'minutes',
    'versatility index'
  ];

  let vis = new ParallelCoordinates(el, 'nba-heatmaps', 540, 360);
  vis.data(data);
  vis.render(data);
}

import indexContent from './jade/index.jade';
import './styl/index.styl';

window.onload = () => {
  $('body').html(indexContent());

  dummy();
  linechart();
  parallelCoordinates();
};

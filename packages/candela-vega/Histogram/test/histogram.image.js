import imageTest from '../../../../util/imageTest';

imageTest({
  name: 'histogram',
  url: 'http://localhost:28000/examples/histogram',
  selector: '#vis-element',
  delay: 1000,
  threshold: 0.001
});

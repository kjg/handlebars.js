import testTemplate from './each-template.handlebars';

let output;
let capturedError;

try {
  output = testTemplate({ info: { Author: 'Yehuda' } });
} catch (e) {
  capturedError = e;
  output = e;
}

if (typeof document !== 'undefined') {
  document.write(output);
}

if (capturedError) {
  throw capturedError;
}

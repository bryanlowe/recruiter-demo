import 'aurelia-polyfills';
import {initialize} from 'aurelia-pal-browser';
initialize();

//Configure Bluebird Promises.
(<any>Promise).config({
  warnings: {
    wForgottenReturn: false
  }
});

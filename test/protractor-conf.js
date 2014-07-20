/**
 * Created by xuyongjun on 2014/7/20.
 */

/*2 ways of running protactor:
    1.find the place where the protractor file is put
    then run the demand like this in the dos window:
    node %protactor's path%/protractor protractor-conf.js
    in my local repository,
    %protactor's path%=E:\work\project\nodejs\node_modules\karma\node_modules\protractor\bin\protractor

    2.Edit configurations in Webstorm
        set Node Paramters and JavaScript File
        and then just run it */


exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  chromeOnly: true,

  //you should start the app server and setup the url to baseUrl below
  baseUrl: 'http://localhost:63342/GitHub/testNgDemo/'/*'http://localhost:8000/'*/,

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};

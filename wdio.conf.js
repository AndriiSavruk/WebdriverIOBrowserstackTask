exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'andriisavruk_vbA6TS',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'ET98kse9QJKsuUGPv7p2',
  
    updateJob: false,
    specs: [
      './e2e/specs/**.specs.js'
    ],
    exclude: [],
  
    capabilities: [{
      project: "First Webdriverio Android Project",
      build: 'Webdriverio Android',
      name: 'first_test',
      device: 'Google Pixel 3',
      os_version: "9.0",
      app: process.env.BROWSERSTACK_APP_ID || 'bs://e3ded129e54306dcbad498f327db00c43639cd8a',
      'browserstack.debug': true
    }],
  
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 20000
    }
  };
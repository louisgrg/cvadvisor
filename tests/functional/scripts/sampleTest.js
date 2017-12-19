module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('http://cvadvisor-test.mybluemix.net')
      .waitForElementVisible('#button1', 60000, true,
        function(){}, 'Waiting for Cadastre-se Agora button to become visible')
      .click('#button1')
      .waitForElementVisible('#button2', 60000, true,
        function(){}, 'Waiting for Cadastre-se aqui button to become visible')
      .pause(5000)
      .click('#button2')
      .end();
  }
};

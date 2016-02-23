var assert = require("assert");
var settings = require('../settings');

describe('settings', function(){
  it('should return correct title', function(){
    assert.equal('Example Web Application', settings.title);
  })
})

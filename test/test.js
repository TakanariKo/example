var assert = require("assert");
var settings = require('../settings');

describe('settings', function(){
  it('should return correct title', function(){
    assert.equal('Z Lab Corporation.', settings.title);
  })
})

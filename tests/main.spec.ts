var expect = require('chai').expect;

describe('Main', function(){

  var arr;

  beforeEach(function(){
    arr = [1, 2, 3];
  });


  it('should have length 4 after push', function(){

    arr.push(4);

    expect(arr).to.have.lengthOf(4);
  });

  it('should have length 2 after pop', function(){

    arr.pop();

    expect(arr).to.have.lengthOf(2);
  });

  it('should remove item 3', function(){
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should last item be 3', function(){
    expect(arr.pop() === 3).to.be.true;
  });


});

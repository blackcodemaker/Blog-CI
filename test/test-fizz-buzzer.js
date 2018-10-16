const expect = require('chai').expect;
const num = require('../fizzBuzzer.js')

describe ('num' , function(){
  it('should be divisible by 15,5,3 and be a number.', function(){

  const testCases = [['the',`Error: 'num' must be a number`],
                     [15, 'fizz-buzz'], 
                     [3, 'fizz'], 
                     [5, 'buzz'],
                     [7, 7]];
  for (let x = 0; x < testCases.length; x++){
    if(isNaN(testCases[x][0])){
      expect(function() {num(testCases[x][0])}).to.throw(Error);
    } else {
      expect(num(testCases[x][0])).to.equal(testCases[x][1]);
    }
  }
  
  });
});

import { joinStrings } from './index';

describe('Join strings', () => {
  
  it('first param has a string and that value is returned', () => {
    joinStrings('carrot').should.equal('carrot');
  });

  it('second param should get appended to the first param with two spaces', () => {
    joinStrings('carrot', 'cucumber').should.equal('carrot cucumber');
  });

  it('empty first param with second param should return second param only', () => {
    joinStrings(undefined, 'cucumber').should.equal('cucumber');
  });

  it('three params with string values', () => {
    joinStrings('spinach', 'cucumber', 'carrot').should.equal('spinach cucumber carrot');
  });

  it('third param is null and should not be joined in', () => {
    joinStrings('spinach', 'cucumber', null, 'carrot').should.equal('spinach cucumber carrot');
  });

  describe('falsy checks', () => {
    const falsyList = [null, undefined, '', 0, NaN, false];

    falsyList.forEach((falsy) => {
      it(`first param fasly(${falsy}) returns an empty string`, () => {
        joinStrings(falsy).should.equal('');
      });

      it(`second param fasly(${falsy}) returns a cucumber`, () => {
        joinStrings('cucumber', falsy).should.equal('cucumber');
      });
    });
  });
});

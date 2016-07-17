import { joinStrings } from './index';

describe('Join strings', () => {
  it('empty first param returns an empty string', () => {
    joinStrings(undefined).should.equal('');
  });

  it('first param has a string and that value is returned', () => {
    joinStrings('carrot').should.equal('carrot');
  });

  it('second param should get appended to the first param with two spaces', () => {
    joinStrings('carrot', 'cucumber').should.equal('carrot cucumber');
  });

  it('empty second param should return first param only', () => {
    joinStrings('carrot', undefined).should.equal('carrot');
  });

  it('empty first param with second param should return second param only', () => {
    joinStrings(undefined, 'cucumber').should.equal('cucumber');
  });

  it('three params with string values', () => {
    joinStrings('spinach', 'cucumber', 'carrot').should.equal('spinach cucumber carrot');
  })
});

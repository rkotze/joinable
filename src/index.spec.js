import joinable, { joinStrings, joinIf } from './index';
import { falsyList } from './falsy-list';

describe('Join strings', () => {
  
  it('first param has a string and that value is returned', () => {
    joinStrings('carrot').should.equal('carrot');
  });

  it('second param should get appended to the first param with two spaces', () => {
    joinStrings('carrot', 'cucumber').should.equal('carrot cucumber');
  });

  it('joining a string and a number', () => {
    joinStrings('carrot', 4).should.equal('carrot 4');
  });

  it('three params with string values', () => {
    joinStrings('spinach', 'cucumber', 'carrot').should.equal('spinach cucumber carrot');
  });

  it('default function is joinStrings as joinable', () => {
    joinable('spinach', 'cucumber', null, 'carrot').should.equal('spinach cucumber carrot');
  });

  it('third param is null and should not be joined in', () => {
    joinStrings('spinach', 'cucumber', null, 'carrot').should.equal('spinach cucumber carrot');
  });

  it('second param uses logic array to include butternut squash to list', () => {
    joinStrings('spinach', [(1==1), 'butternut squash'], null, 'carrot').should.equal('spinach butternut squash carrot');
  });

  it('second param uses logic array and will NOT include butternut squash to list', () => {
    joinStrings('spinach', [(1==2), 'butternut squash'], null, 'carrot').should.equal('spinach carrot');
  });

  it('use joinIf function in second param to include butternut squash to list', () => {
    joinStrings('spinach', joinIf([(1==1), 'butternut squash']), null, 'carrot').should.equal('spinach butternut squash carrot');
  });

  it('join with a comma separator', () => {
    joinStrings('spinach', 'cucumber', 'carrot', {separator:','}).should.equal('spinach,cucumber,carrot');
  });

  it('default join with space if no separator property in options', () => {
    joinStrings('spinach', 'cucumber', 'carrot', {opt:','}).should.equal('spinach cucumber carrot');
  });

  describe('falsy checks', () => {

    falsyList.forEach((falsy) => {
      it(`first param falsy(${falsy}) returns an empty string`, () => {
        joinStrings(falsy).should.equal('');
      });

      it(`second param falsy(${falsy}) and first param has value returns a cucumber`, () => {
        joinStrings('cucumber', falsy).should.equal('cucumber');
      });

      it(`first param falsy(${falsy}) and second param has value should return spinach`, () => {
        joinStrings(falsy, 'spinach').should.equal('spinach');
      });
    });
  });
});

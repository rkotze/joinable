import { joinIf } from './index';
import { falsyList } from './falsy-list';

describe('Join if', () => {
  it('array has two items return second item if first item is true', () => {
    joinIf([true, 'beetroot']).should.equal('beetroot');
  });

  it('if array is less that two items return null', () => {
    (joinIf(['chicken']) === null).should.true();
  });

  it('if array has three items and first param is truthy it should return cow', () => {
    joinIf([true, 'cow', 'chicken']).should.equal('cow');
  });

  it('if not an array return param', () => {
    joinIf('potato').should.equal('potato');
  });

  falsyList.forEach((falsy) => {
    it(`first param is a falsy(${falsy}) then return null`, () => {
      (joinIf([falsy, 'chicken']) === null).should.true();
    });

    it('if array has three items and first param is falsy(${falsy}) it should return chicken', () => {
    joinIf([falsy, 'cow', 'chicken']).should.equal('chicken');
  });
  });
});
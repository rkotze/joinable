import { joinIf } from './index';
import { falsyList } from './falsy-list';

describe('Join if', () => {
  it('array has two items return second item if first item is true', () => {
    joinIf([true, 'beetroot']).should.equal('beetroot');
  });

  falsyList.forEach((falsy) => {
    it(`first param is a falsy(${falsy}) then return null`, () => {
      (joinIf([falsy, 'chicken']) === null).should.true();
    });
  });
});
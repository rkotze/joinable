import { joinIf } from './index';
describe('Join if', () => {
  it('array has two items return second item if first item is true', () => {
    joinIf([true, 'beetroot']).should.equal('beetroot');
  });
});
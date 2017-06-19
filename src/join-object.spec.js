import { falsyList } from './falsy-list';
import joinObject from './join-object';

describe('join object', () => {
  it('should join all by default key and value with an equals and props with ampersand', () => {
    joinObject({ chicken: 'burger', spare: 'ribs' }).should.equal('chicken=burger&spare=ribs');
  });

  it('should join the key and value with a comma and default props with ampersand', () => {
    joinObject({ chicken: 'burger', spare: 'ribs' }, ',').should.equal('chicken=burger,spare=ribs');
  });

  it('should join the key and value with a comma and separate with semicolon', () => {
    joinObject({ chicken: 'burger', spare: 'ribs' }, ';', ',').should.equal('chicken,burger;spare,ribs');
  });

  it('should not join if value is null', () => {
    joinObject({ salad: null, chicken: 'burger', spare: 'ribs' }, ';', ',').should.equal('chicken,burger;spare,ribs');
  });

  it('should not join props that have values other than strings or numbers', () => {
    joinObject({ 
      salad: { test: 'test'}, 
      chicken: 'burger', 
      peanuts: function() { return 'nuts'; },
      pork: 'chops' }, ';', ',').should.equal('chicken,burger;pork,chops');
  });

  describe('falsy checks', () => {

    falsyList.forEach((falsy) => {
      it(`prop with falsy(${falsy}) value returns an empty string`, () => {
        joinObject({ salad: falsy }).should.equal('');
      });

      it(`second param falsy(${falsy}) and first param has value returns a cucumber`, () => {
        joinObject({ salad: 'chicken', chicken: falsy, spare: 'ribs' }).should.equal('salad=chicken&spare=ribs');
      });

    });
  });
});
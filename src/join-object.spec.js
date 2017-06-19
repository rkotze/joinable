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
});
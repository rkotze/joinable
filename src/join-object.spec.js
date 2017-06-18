import joinObject from './join-object';

describe('join object', () => {
	it('should join all key and value of object with a space', () => {
    joinObject({ chicken: 'burger', spare: 'ribs' }).should.equal('chicken burger spare ribs');
  });

  it('should join the key and value with a comma and space', () => {
    joinObject({ chicken: 'burger', spare: 'ribs' }, ',').should.equal('chicken burger,spare ribs');
  });

  it('should join the key and value with a comma and separate with ampersand', () => {
    joinObject({ chicken: 'burger', spare: 'ribs' }, '&', ',').should.equal('chicken,burger&spare,ribs');
  });
});
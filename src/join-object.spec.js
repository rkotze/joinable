import joinObject from './join-object';

describe('join object', () => {
	it('should join the key and values of object', () => {
    joinObject({ chicken: 'burger', spare: 'ribs' }).should.equal('chicken burger spare ribs');
  });

  it('should join the key and values with a comma', () => {
    joinObject({ chicken: 'burger', spare: 'ribs' }, ',').should.equal('chicken,burger,spare,ribs');
  });
});
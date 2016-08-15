import { prefixStrings } from './index';

describe('Prefix strings', () => {
	it('should add pea in front of each string', () => {
    prefixStrings('pea-', 'brain', 'soup').should.equal('pea-brain pea-soup');
  });

  it('should add jam in front of each string and join with comma', () => {
		prefixStrings('jam-', 'spinach', 'cucumber', 'carrot', {separator:','}).should.equal('jam-spinach,jam-cucumber,jam-carrot');
	});

  it('when falsy prefix is set return joined string', () => {
    prefixStrings(null, 'spinach', 'cucumber', 'carrot').should.equal('spinach cucumber carrot');
  });

});
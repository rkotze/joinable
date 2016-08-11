import { prefixStrings } from './index';

describe('Prefix strings', () => {
	it('should add pea in front of each string', () => {
		prefixStrings('pea-', 'brain', 'soup').should.equal('pea-brain pea-soup');
	});
});
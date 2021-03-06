import { joinExp } from './index';
import { falsyList } from './falsy-list';

const regexTestCases = [
  {
    stringsToJoin: ['mickey', 'minnie', 'donald'],
    regex: /minnie/,
    joinedString: 'minnie'
  },
  {
    stringsToJoin: ['mickey@burbank.com', 'minnie', 'donald@calisota.com'],
    regex: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    joinedString: 'mickey@burbank.com donald@calisota.com'
  },
  {
    stringsToJoin: ['mickey-mouse', 'minnie_mouse', 'donald_duck'],
    regex: /^[a-z0-9_]+$/,
    joinedString: 'minnie_mouse donald_duck'
  }
];

describe('regex checks', () => {
  regexTestCases.forEach(({stringsToJoin, regex, joinedString}) => {
    it(`joins the strings in [${stringsToJoin}] that match the regular expression ${regex}`, () => {
      joinExp(regex, ...stringsToJoin).should.equal(joinedString);
    });
  });

  it('joins the strings where regexp wont match should return empty string', () => {
    joinExp(/r+/, 'mickey', 'minnie', 'donald').should.equal('');
  });

  it('joins the strings in [mickey, minnie, donald] that match the regular expression /m*/ with a comma separator', () => {
    joinExp(/m+/, 'mickey', 'minnie', 'donald', {separator:','}).should.equal('mickey,minnie');
  });

  it('no regexp in first param will error', () => {
    (() => joinExp('noRegex', 'string'))
    .should.throwError('First parameter should be of RegExp type');
  });

  describe('falsy checks', () => {

    falsyList.forEach((falsy) => {

      it(`look for m or n. Third param falsy(${falsy}) with second and forth valid params returns 'cucumber sandwich'`, () => {
        joinExp(/(m|n)+/, 'cucumber', falsy, 'sandwich').should.equal('cucumber sandwich');
      });

    });
  });
});

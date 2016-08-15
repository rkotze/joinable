import joinable from './index';

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
      joinable(...stringsToJoin, {regex: regex}).should.equal(joinedString);
    });
  });

  it('joins the strings in [mickey, minnie, donald] that match the regular expression /m*/ with a comma separator', () => {
    joinable('mickey', 'minnie', 'donald', {regex:/m+/, separator:','}).should.equal('mickey,minnie');
  });
});

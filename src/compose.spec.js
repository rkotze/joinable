import compose from './compose';

describe('Compose', () => {
  it('composes from right to left', () => {
    const double = x => x * 2;
    const square = x => x * x;
    compose(square)(5).should.equal(25);
    compose(square, double)(5).should.equal(100);
    compose(double, square, double)(5).should.equal(200);
  });

  it('can start with multiple arguments base on right most function', () => {
    const square = x => x * x;
    const tripleAdd = (x, y, z) => x + y + z;
    const add = (x, y) => x + y;

    compose(square, add)(1, 2).should.equal(9);
    compose(square, tripleAdd)(5, 2, 3).should.equal(100);
  });

  it('returns the first function if given only one', () => {
    const fn = () => {};
    compose(fn).should.equal(fn);
  });

});
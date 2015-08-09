
describe('string', () => {

  it('should repeat a string', () => {

    // implement a function repeatString to make the test pass
    function repeatString(str, times) {
      return str.repeat(times);
    }

    expect(repeatString('foo', 3)).toBe('foofoofoo');
  });

  it('should check if a string starts with a given string', () => {

    // implement a function checkStart that uses ES6 methods to inspect the start of a string

    function checkStart(target, source) {
      return target.startsWith(source);
    }
    expect(checkStart('foobar', 'foo')).toBe(true);
  });

  it('should check if a string ends with a given string', () => {

    // implement a function checkEnd that uses ES6 methods to inspect the end of a string

    function checkEnd(target, source) {
      return target.endsWith(source);
    }
    expect(checkEnd('foobar', 'bar')).toBe(true);
  });

  it('should check if a string includes another string', () => {

    // implement a function checkIncludes that uses ES6 methods to inspect the end of a string

    function checkEnd(target, source) {
      return target.endsWith(source);
    }
    expect(checkEnd('foobar', 'bar')).toBe(true);
  });
});

describe('enhanced object literal syntax', () => {

  it('has shorthand property names', () => {

    let name = 'Joe';
    let age = 49;

    // use property shorthand to make the tests pass
    let person = {name, age};
    expect(person.name).toBe('Joe');
    expect(person.age).toBe(49);

  });

  it('has computed properties', () => {

    // add a computed property 'b' + 'ar' to make the tests pass

    let thing = {
      foo: 'bar',
      ['b' +  'ar']:'baz'
    };

    expect(thing.foo).toBe('bar');
    expect(thing.bar).toBe('baz');
  });

  it('has improved method syntax', () => {

    // use new method syntax to make the test pass

    let name = 'Joe';
    let age = 49;

    let person = {
        name,
        age,
        speak() { return 'I am ' + this.name + ' and I am ' + this.age + ' years old.'}
    }
    expect(person.speak()).toBe('I am Joe and I am 49 years old.');
  })
});
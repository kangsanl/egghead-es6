

describe('object', () => {

  it('clones an object', () => {
    let obj = {
      foo: 'bar'
    };

    // use ES6 object methods to make the test pass

    let copy = Object.assign({}, obj);

    expect(copy).toEqual(obj);
  });

  it('extends an object', () => {
    let obj1 = {
      foo: 'bar'
    };

    let obj2 = {
      bar: 'baz'
    };

    // use ES6 object methods to make the test pass

    Object.assign(obj1, obj2);

    expect(obj1.bar).toBeDefined();
    expect(obj1.bar).toBe('baz');
  });

  it('cannot copy inherited and non-enumerable properties', () => {

    // create an object 'obj' with three properties:
    // 1 - foo: an inherited property
    // 2 - bar: a non-enumerable property
    // 3 - baz: an enumerable property

    let obj = Object.create({ foo: 'bar' }, { // foo is an inherit property
      bar: {
        value: 'baz' // non-enumerable
      },
      baz: {
        value: 'bim',
        enumerable: true
      }
    });

    let clone = Object.assign({}, obj);

    expect(clone.foo).toBeUndefined();
    expect(clone.bar).toBeUndefined();
    expect(clone.baz).toBeDefined();
    expect(clone).toEqual({ baz: 'bim'});

  });

  it('copies an accessor\'s value', () => {

    // clone an object with a getter

    let obj = {
      foo: 'bar',
      get baz() {
        return 'bim';
      }
    };

    let clone = Object.assign({}, obj);

    expect(clone.baz).toBe('bim');
    expect(clone).toEqual({ foo: 'bar', baz: 'bim' });
  });

  it('clones an object with its prototype', () => {

    let obj1 = Object.create({
      bar: 'baz'
    });

    obj1.foo = 'bar';
    expect(obj1.bar).toBe('baz');

    // modify the code below to make the test pass

    let o1Proto = Object.getPrototypeOf(obj1);
    let obj2 = Object.assign(
      Object.create(o1Proto),
      obj1
    );

    //let obj2 = Object.assign({}, obj1);

    expect(obj2.foo).toBe('bar');
    expect(obj2.bar).toBe('baz');
  });

  it('checks equality of NaN', () => {

    // use ES6 object methods to make the test pass

    function isNaNSame() {
      return Object.is(NaN, NaN);
    }

    expect(isNaNSame()).toBe(true);
  });

  it('checks equality of 0 and -0', () => {

    // use ES6 object methods to make the test pass

    function isZeroSame() {
      return Object.is(0, -0);
    }

    expect(isZeroSame()).toBe(false);
  });

  it('sets the prototype of an object - syntax 1', () => {
    let obj1 = {
      foo() {
        return 'bar';
      }
    };

    let obj2 = {};

    // use new Object methods to establish a prototype relationship from obj2 to obj1

    Object.setPrototypeOf(obj2, obj1);

    // syntax #2
    //let obj2 = Object.setPrototypeOf({
    //
    //  // obj2 definition here
    //
    //}, obj1);

    expect(Object.getPrototypeOf(obj2)).toBe(obj1);
    expect(obj2.foo).toBeDefined();
    expect(obj2.foo()).toBe('bar');
  });

});
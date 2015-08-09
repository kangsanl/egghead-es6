describe('generators', () => {

  it('produces a simple array', () => {

    // implement arrayGenerator to make the test pass

    // option 1
    function* arrayGenerator() {
      yield 1;
      yield 2;
      yield 3;
    }

    // option 2
    //function* arrayGenerator() {
    //  for (let i = 1; i < 4; i++) {
    //    yield i;
    //  }
    //}

    expect([...arrayGenerator()]).toEqual([1, 2, 3]);
  });

  it('produces a fibonacci sequence', () => {

    // write a generator "fibonacci" to make the test pass

    // solution 1
    function* fibonacci() {
      let prev = 0;
      let curr = 1;
      let swap;

      yield prev;
      yield curr;

      while (true) {
        swap = prev;
        prev = curr;
        curr = swap + curr;
        yield curr;
      }
    }

    // solution 2 with array destructuring - extra credit
    //function* fibonacci() {
    //  let [prev, curr] = [0, 1];
    //  yield prev;
    //  yield curr;
    //  for (;;) {
    //    [prev, curr] = [curr, prev + curr];
    //    yield curr;
    //  }
    //}

    let fibArray = [];

    for (let n of fibonacci()) {
      if (n > 13) {
        break;
      }
      fibArray.push(n);
    }

    expect(fibArray).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  it('implements recursive yield', () => {

    function* bar() {
      yield 'b';
      yield 'c';
    }

    // implement "foo" generator to make the test pass

    function* foo() {
      yield 'a';
      yield* bar();
      yield 'd';
    }

    expect([...foo()]).toEqual(['a', 'b', 'c', 'd']);
  });

  it('is a data consumer', () => {

    let arr = [];

    // implement a generator "consumer" to make the test pass

    function* consumer() {
      arr.push(yield);
      arr.push(yield);
      arr.push(yield);
    }

    let consumerObj = consumer();
    consumerObj.next(); //initialize the consumer
    consumerObj.next(1);
    consumerObj.next(2);
    consumerObj.next(3);

    expect(arr).toEqual([1, 2, 3]);
  });

  it('sends and receives data', () => {

    // implement a generator "foo" to make the test pass

    function* foo(x) {
      var y = yield (x + 1);
      var z = yield (y + 1);
      return (x + y + z);
    }

    var it = foo(1);

    // note: not sending anything into `next()` here
    expect(it.next()).toEqual({ value: 2, done: false });
    expect(it.next(2)).toEqual({ value: 3, done: false });
    expect(it.next(3)).toEqual({ value: 6, done: true });
  });

});
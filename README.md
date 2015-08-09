# egghead-es6
 - This project includes basic settings for tranpiling ES6 to ES5, and for JavaScript Unit Test settings
 - I would update more examples from JS meetup(http://www.meetup.com/Santa-Barbara-JavaScript-Meetup/events/222301599/), egghead.io, and so on.

# How to run?
 - $npm install
 -- This will install needed plugins
 - $grunt
 -- This will run Karma Unit test, and transpile ES6 codes

# File Structure
.
|-- dist : es5 src files
|   |-- amd : transpiled to AMD
|   |-- common : transpiled to commonjs
|   '-- src : es6 source
|
|-- src : es6 source
|
|-- karma.conf.js : JS unit-test configuration
|
|-- test : JS unit-test
|
`-- test-es5 : transpiled es5(amd) src files

# JS Unit Test
- Chrome
    -- PhantomJS(^1.x.x) is not optimized for applying Babel Transpiler yet

let assert = require('assert');
let hello = require('./public/main').hello;
let filter = require('./public/main').filter;


assert.equal(hello('Test'), 'Привет, Test');
//TODO: Кейсы для функции filter
assert.equal(filter('KEK voloshin'), '*** ********');
assert.equal(filter('KEK '), '*** ');
assert.equal(filter('KEK'), '***');
assert.equal(filter('KEK KEK'), '*** ***');
assert.equal(filter(' KEK'), ' ***');
assert.equal(filter(' KEK '), ' *** ');
assert.equal(filter('KEK some voloshin in yandex'), '*** some ******** in ******');
assert.equal(filter('some yandex KEK'), 'some ****** ***');
assert.equal(filter('someKEKsome'), 'someKEKsome');
assert.equal(filter('KEKsome '), 'KEKsome ');
assert.equal(filter('KEKsome yandex and voloshin'), 'KEKsome ****** and ********');

console.log('OK!');

import {assert, describe, expect, it} from 'vitest';

function sayHello(name: string): string {
    return `Hello ${name}!`
}

describe('sayHello', () => {
    it('should return string Hello name!', function () {
        expect(sayHello("Rio")).to.be.a('string', 'Hello Rio!'); // expect function sayHello name Rio to be a string Hello Rio!
        assert.equal(sayHello("Rio"), "Hello Rio!") // parameter function sama dengan output
    });
})
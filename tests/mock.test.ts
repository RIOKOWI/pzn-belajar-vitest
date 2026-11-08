import { callbackify } from 'node:util';
import {describe, expect, it, vi} from 'vitest';

describe('mock', () => {
    function sayHello(name: string, callback: (Message: string) => void) { // membuat function callback sayHello
        callback ("Helo " + name);
    }
    it('should support mock' , () => {
        const callback = vi.fn(); // make method mock dari vi
        sayHello("Rio", callback); // call function + callback

        expect(callback).toHaveBeenCalledWith("Helo Rio"); // ekspetasi nya adalah callback di panggil dan mengeluarkan output Helo + name
    })
})
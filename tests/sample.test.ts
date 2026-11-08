import {describe, expect, it} from 'vitest';


describe('sample', () => { // grouping unit test
    it('harus lolos 1', () => { // nama per 1 test
        expect(1).toBe(1) // ekspetasi 1 dan harusnya 1
    });
    it('harus lolos 2', () => { // nama per 1 test
        expect(2).toBe(2) // ekspetasi 2 dan harusnya 2
    });
    it('harus lolos 3', () => { // nama per 1 test
        expect(3).toBe(3) // ekspetasi 3 dan harusnya 3
    });
})
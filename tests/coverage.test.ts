import {describe, expect, it} from 'vitest';
import { sayHello } from "../src/scripts/sayHello";


describe('coverage group', () => {
    it('should return Hello name', () => {
        const res = sayHello("Rio");
        expect(res).toBe("Hello Rio")
    })
})
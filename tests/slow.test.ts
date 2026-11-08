import { describe, it, expect } from "vitest"
import { resolve } from "node:dns"

describe("slow test",() => {
    it.concurrent('should pass', async () => { // .concurrent = untuk menjalankan unit test secara pararel/sekaligus, bukan sequentiel/1 per satu
        await(new Promise(resolve => setTimeout(resolve, 3000)))
        expect(1).toBe(1)
    });
    it.concurrent('should pass', async () => {
        await(new Promise(resolve => setTimeout(resolve, 2000)))
        expect(1).toBe(1)
    });
    it.concurrent('should pass', async () => {
        await(new Promise(resolve => setTimeout(resolve, 1000)))
        expect(1).toBe(1)
    });
})
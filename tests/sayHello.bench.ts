import { test, describe } from "vitest";

describe('Benchmark', () => {

    // Fungsi yang akan diukur performanya
    function sayHello(name: string) {
        return `Hello ${name}`;
    }

    // test() mendefinisikan sebuah test case
    // bench merupakan fixture Vitest untuk menjalankan benchmark
    test('benchmark sayHello', async ({ bench }) => {

        // bench() mendefinisikan benchmark
        // Parameter pertama: nama benchmark
        // Parameter kedua: callback yang akan diukur performanya
        await bench('sayHello', () => {

            // Eksekusi fungsi yang ingin diukur
            const result = sayHello("Rio");

            // Mengembalikan hasil eksekusi fungsi
            return result;

        // run() menjalankan benchmark dan mengukur performanya
        }).run();
    });
});

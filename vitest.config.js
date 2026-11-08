import {defineConfig} from 'vitest/config';

export default defineConfig({
    test: {
        benchmark: {
            enabled: true, // activated benchmark
        },
        coverage: {
            provider: 'istanbul' // aktifin coverage pake lib istanbul
        },
        dir: 'tests', // saya mau run test nya hanya di folder tests/
        globals: true, // agar tidak usah import lagi saat membuat unit test
    }
})
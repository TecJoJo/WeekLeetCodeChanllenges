const { countZeroes_divideAndConquer } = require('./countZeroes_divideAndConquer.js');
const { countZeroes_On } = require('./countZeroes_On.js');

function measureExecutionTime(fn, input) {
    const start = process.hrtime.bigint();
    const result = fn(input);
    const end = process.hrtime.bigint();
    const executionTime = Number(end - start) / 1e6; // Convert to milliseconds
    return { result, executionTime };
}

describe('countZeroes', () => {
    test('should return the correct count of zeroes for divideAndConquer', () => {
        expect(countZeroes_divideAndConquer([1, 1, 1, 1, 0, 0])).toBe(2);
        expect(countZeroes_divideAndConquer([1, 0, 0, 0, 0])).toBe(4);
        expect(countZeroes_divideAndConquer([0, 0, 0])).toBe(3);
        expect(countZeroes_divideAndConquer([1, 1, 1, 1])).toBe(0);
    });

    test('should return the correct count of zeroes for O(n)', () => {
        expect(countZeroes_On([1, 1, 1, 1, 0, 0])).toBe(2);
        expect(countZeroes_On([1, 0, 0, 0, 0])).toBe(4);
        expect(countZeroes_On([0, 0, 0])).toBe(3);
        expect(countZeroes_On([1, 1, 1, 1])).toBe(0);
    });

    test('should handle large datasets and print execution time', () => {
        const largeArray = Array(1000000).fill(1).concat(Array(500000).fill(0));

        const divideAndConquerResult = measureExecutionTime(countZeroes_divideAndConquer, largeArray);
        console.log(`Divide and Conquer: Result = ${divideAndConquerResult.result}, Execution Time = ${divideAndConquerResult.executionTime} ms`);

        const onResult = measureExecutionTime(countZeroes_On, largeArray);
        console.log(`O(n): Result = ${onResult.result}, Execution Time = ${onResult.executionTime} ms`);

        expect(divideAndConquerResult.result).toBe(500000);
        expect(onResult.result).toBe(500000);
    });
});
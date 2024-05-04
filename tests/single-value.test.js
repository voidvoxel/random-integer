import randomInteger from "../random-integer.mjs";


function testRange (
    x
) {
    let y = 0;

    let min = x;
    let max = y;

    if (min > max) {
        min = y;
        max = x;
    }

    if (typeof y === 'undefined') throw new Error("Undefined `y`");

    test(
        `random integer between ${min} and ${max}`,
        () => {
            const maxIterations = 100;

            for (
                let iterations = 0;
                iterations < maxIterations;
                iterations++
            ) {
                const value = randomInteger(x);

                expect(value).toBeGreaterThanOrEqual(min);
                expect(value).toBeLessThanOrEqual(max);
            }
        }
    );
}


testRange(3);
testRange(10);
testRange(4);
testRange(-42);
testRange(-100);

// Edge cases
testRange(-1);
testRange(0);
testRange(1);
testRange(Infinity);
testRange(-Infinity);

// Corner cases
testRange(Number.MAX_SAFE_INTEGER);
testRange(Number.MIN_SAFE_INTEGER);

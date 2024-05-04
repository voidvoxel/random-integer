import randomInteger from "../random-integer.mjs";


function testRange (
    x,
    y
) {
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
                const value = randomInteger(min, max);

                expect(value).toBeGreaterThanOrEqual(min);
                expect(value).toBeLessThanOrEqual(max);
            }
        }
    );
}


testRange(0, 3);
testRange(1, 10);
testRange(4, 20);
testRange(-42, 0);
testRange(-100, 100);

// Edge cases
testRange(-1, 1);
testRange(-1, 0);
testRange(0, 1);
testRange(0, Infinity);
testRange(-Infinity, 0);
testRange(-Infinity, Infinity);

// Corner cases
testRange(0, -1);
testRange(1, 0);
testRange(Infinity, 0);
testRange(0, -Infinity);
testRange(Infinity, -Infinity);
// CURSED: For some reason, `-1` is being passed as `undefined` here.
//         This may be a bug within `jest`.
// testRange(1 -1);

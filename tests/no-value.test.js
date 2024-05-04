import randomInteger from "../random-integer.mjs";


function testRange () {
    let x = Infinity;
    let y = 0;

    let min = x;
    let max = y;

    if (min > max) {
        min = y;
        max = x;
    }

    test(
        `random integer between ${min} and ${max}`,
        () => {
            const maxIterations = 100;

            for (
                let iterations = 0;
                iterations < maxIterations;
                iterations++
            ) {
                const value = randomInteger();

                expect(value).toBeGreaterThanOrEqual(min);
                expect(value).toBeLessThanOrEqual(max);
            }
        }
    );
}


testRange();

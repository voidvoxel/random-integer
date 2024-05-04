export default function randomInteger (
    x = Infinity,
    y = null
) {
    if (typeof y !== 'number') {
        y = x;
        x = 0;
    }

    let min = 0;
    let max = 0;

    if (x > y) {
        max = x;
        min = y;
    } else {
        max = y;
        min = x;
    }

    if (min === Infinity) {
        min = Number.MAX_SAFE_INTEGER;
    } else if (min === -Infinity) {
        min = Number.MIN_SAFE_INTEGER;
    } else if (min === NaN) {
        min = 0;
    }

    if (max === Infinity) {
        max = Number.MAX_SAFE_INTEGER;
    } else if (max === -Infinity) {
        max = Number.MIN_SAFE_INTEGER;
    } else if (max === NaN) {
        max = 0;
    }

    const difference = min - max;
    const distance = Math.abs(difference);

    const randomNumber = Math.random();

    let randomInteger = Math.floor(randomNumber * distance);

    randomInteger -= distance - max;

    return randomInteger;
}

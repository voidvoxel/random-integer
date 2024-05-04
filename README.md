# `@voidvoxel/random-integer`

Generate random integers

## Installation

```sh
npm i @voidvoxel/random-integer
```

## Usage

### Import

#### Module

```js
import randomInteger from '@voidvoxel/random-integer';
```

#### CommonJS

```js
const randomInteger = require('@voidvoxel/random-integer');
```

### Pick a positive integer

```js
randomInteger()
```

### Pick a negative integer

```js
randomInteger(-Infinity)
```

### Pick an integer between 0 and 3

```js
randomInteger(3)
```

### Pick an integer between 1 and 10

```js
randomInteger(1, 10)
```

### Pick an integer between -100 and 100

```js
randomInteger(-100, 100)
```

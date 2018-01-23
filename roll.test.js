const roll = require('./roll');

test('Base Case: ', () =>
	expect(roll([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).
		toBe(90));

test('Variation in base: ', () =>
	expect(roll([4, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).
		toBe(94));

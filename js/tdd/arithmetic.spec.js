// import our implementation
const sum = require('./sum');

// define our tests
describe("An arithmetic library", () => {

	it("can perform addition", () => {
		expect(sum(3,4)).toBe(7);
		expect(sum(2,9)).toBe(11);
		expect(sum(-1,6)).toBe(5);
		expect(sum(6,-1)).toBe(5);
		expect(sum(103,4038)).toBe(4141);
	});

});
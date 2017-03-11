import {CapitalizeFormat} from '../../../../src/resources/value-converters/capitalize-format';

describe('Value Converter: capitalize-format', () => {
	let sut;
	beforeEach(() => {
		sut = new CapitalizeFormat();
	});

	it('converts the value parameter to a string', () => {
		let test = sut.toView(123);
		expect(test).toBe('123');
	});

	it('capitalizes the first character of a string', () => {
		let test = sut.toView('test');
		expect(test).toBe('Test');
	});

	it('capitalizes the first character of each word', () => {
		let test = sut.toView('this is a test');
		expect(test).toBe('This Is A Test');
	});
});
import {App} from '../../src/app';

describe('App Root', () => {
	let sut, config, router;

	beforeEach(() =>{
		sut = new App();
	});

	it('displays the current year', () => {
    	expect(sut.year).toBe(2017);
  	});
});
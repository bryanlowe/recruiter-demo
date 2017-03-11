import {WorkZipPref} from '../../../../../../src/resources/elements/form-components/job-seeker/work-zip-pref';
import {EventAggregator} from 'aurelia-event-aggregator';

describe('Work Zip Preference', () => {
	let sut;

	beforeEach(() => {
		sut = new WorkZipPref(new EventAggregator());

		sut.stateZipList = [
			{name: 'California', value: 'CA', zip_min: '90001', zip_max: '96162'}
		];

		sut.attached();
	});

	it('has a zipcode min', () => {
		expect(sut.zip_min).toBeDefined();
	});

	it('has a zipcode max', () => {
		expect(sut.zip_max).toBeDefined();
	});

	it('has a zipcode list', () => {
		expect(sut.zipCodeList).toBeDefined();
	});

	it('can update the zip code min value', () => {
		sut.updateZipCodes({elementValue: 'CA'})
		expect(sut.zip_min).toEqual('90001');
	});

	it('can update the zip code max value', () => {
		sut.updateZipCodes({elementValue: 'CA'})
		expect(sut.zip_max).toEqual('96162');
	});

	it('will update zip code min to 0 if there is an invalid state value', () => {
		sut.updateZipCodes({elementValue: 'CA2'})
		expect(sut.zip_min).toEqual(0);
	});

	it('will update zip code max to 0 if there is an invalid state value', () => {
		sut.updateZipCodes({elementValue: 'CA2'})
		expect(sut.zip_max).toEqual(0);
	});

	it('has a subscription list', () => {
		expect(sut.subscriptionList).toBeDefined();
	});
});
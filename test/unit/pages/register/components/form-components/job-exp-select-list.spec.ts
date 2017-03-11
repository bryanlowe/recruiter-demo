import {JobExpSelectList} from '../../../../../../src/resources/elements/form-components/job-seeker/job-exp-select-list';
import {EventAggregator} from 'aurelia-event-aggregator';

describe('Job Experience Select List', () => {
	let sut;

	beforeEach(() => {
		sut = new JobExpSelectList(new EventAggregator());
	});

	it('has a skill set list', () => {
		expect(sut.skillSet).toBeDefined();
	});

	it('has a list of years of experience', () => {
		expect(sut.skillLevelList).toBeDefined();
	});

	it('can add skills to the skill model', () => {
		expect(sut.addSkillSet({elementName: 'Test', elementValue: 'Test Name'})).toEqual(true);
	});

	it('can remove skills from the skill model', () => {
		expect(sut.removeSkillSet({elementName: 'Test', elementValue: 'Test Name'})).toEqual(true);
	});
});
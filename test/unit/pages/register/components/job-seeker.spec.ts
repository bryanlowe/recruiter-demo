import {JobSeeker} from '../../../../../src/pages/register/components/job-seeker/index';

describe('Job Seeker', () => {
	let sut;

	beforeEach(() => {
		sut = new JobSeeker();
	});

	it('has a list of job categories', () => {
		expect(sut.jobCategories).toBeDefined();
	});

	it('has a list of job skills', () => {
		expect(sut.jobSkills).toBeDefined();
	});

	it('has a list of work schedule preferences', () => {
		expect(sut.workSchedulePrefs).toBeDefined();
	});

	it('has a list of work environment preferences', () => {
		expect(sut.workEnvPrefs).toBeDefined();
	});

	it('has a list of work personalities', () => {
		expect(sut.workPersonalities).toBeDefined();
	});

	it('has a list of US states and their zip ranges', () => {
		expect(sut.stateZipList).toBeDefined();
	});
});
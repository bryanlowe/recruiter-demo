export class JobSeeker {
	/************************Mock Objects for Now************************/
	public jobCategories: string[] = [
		'Business Analyst',
		'Manager',
		'Developer',
		'QA/Tester',
		'Data Scientist/Analyst',
		'Systems Analyst',
		'Director',
		'Database Admin',
		'Trainer',
		'Network Admin',
		'Software Architect',
		'Security Admin'
	];

	public jobSkills: string[] = [
		'MySQL',
		'MSSQL',
		'MongoDB',
		'AngularJS',
		'Angular2',
		'ReactJS',
		'EmberJS',
		'Aurelia',
		'NodeJS'
	];

	public workSchedulePrefs: string[] = [
		'Full time fixed/salary',
		'Full time contract/hourly/flex',
		'Part time fixed/salary',
		'Part time contract/hourly/flex',
		'Internship'
	];

	public workEnvPrefs: string[] = [
		'Top tier pay',
		'Excellent health benefits',
		'High bonus, commiss, or 401k',
		'Flexible schedule',
		'Startup culture',
		'Laid-back culture',
		'Extensive job training',
		'A dedicated mentor / guide',
		'Truly rewarding work',
		'A job that helps people/world',
		'High people interaction',
		'Low people interaction',
		'Plenty of Travel',
		'Job Security / stable work'
	];

	public workPersonalities: string[] = [
		'I get in, do my work, then go out and enjoy my life',
		'I\'m a people person',
		'Mellow, easy going, doesn\'t stress easily',
		'I take on everything I can',
		'My job is my life (practically)',
		'I prefer numbers over words',
		'Supernerd right here',
		'Jack of all trades'
	];

	public stateZipList: any[] = [
		{name: 'Alaska', value: 'AK', zip_min: '99501', zip_max: '99950'},
		{name: 'Alabama', value: 'AL', zip_min: '35004', zip_max: '36925'},
		{name: 'Arkansas', value: 'AR_1', zip_min: '71601', zip_max: '72959'},
		{name: 'Arkansas (Texarkana)', value: 'AR_2', zip_min: '75502', zip_max: '75502'},
		{name: 'Arizona', value: 'AZ', zip_min: '85001', zip_max: '86556'},
		{name: 'California', value: 'CA', zip_min: '90001', zip_max: '96162'},
		{name: 'Colorado', value: 'CO', zip_min: '80001', zip_max: '81658'},
		{name: 'Connecticut', value: 'CT_1', zip_min: '6001', zip_max: '6389'},
		{name: 'Connecticut', value: 'CT_2', zip_min: '6401', zip_max: '6928'},
		{name: 'Dist of Columbia', value: 'DC_1', zip_min: '20001', zip_max: '20039'},
		{name: 'Dist of Columbia', value: 'DC_2', zip_min: '20042', zip_max: '20599'},
		{name: 'Dist of Columbia', value: 'DC_3', zip_min: '20799', zip_max: '20799'},
		{name: 'Delaware', value: 'DE', zip_min: '19701', zip_max: '19980'},
		{name: 'Florida', value: 'FL', zip_min: '32004', zip_max: '34997'},
		{name: 'Georgia', value: 'GA_1', zip_min: '30001', zip_max: '31999'},
		{name: 'Georgia (Atlanta)', value: 'GA_2', zip_min: '39901', zip_max: '39901'},
		{name: 'Hawaii', value: 'HI', zip_min: '96701', zip_max: '96898'},
		{name: 'Iowa', value: 'IA_1', zip_min: '50001', zip_max: '52809'},
		{name: 'Iowa (OMAHA)', value: 'IA_2', zip_min: '68119', zip_max: '68120'},
		{name: 'Idaho', value: 'ID', zip_min: '83201', zip_max: '83876'},
		{name: 'Illinois', value: 'IL', zip_min: '60001', zip_max: '62999'},
		{name: 'Indiana', value: 'IN', zip_min: '46001', zip_max: '47997'},
		{name: 'Kansas', value: 'KS', zip_min: '66002', zip_max: '67954'},
		{name: 'Kentucky', value: 'KY', zip_min: '40003', zip_max: '42788'},
		{name: 'Louisiana', value: 'LA_1', zip_min: '70001', zip_max: '71232'},
		{name: 'Louisiana', value: 'LA_2', zip_min: '71234', zip_max: '71497'},
		{name: 'Massachusetts', value: 'MA', zip_min: '1001', zip_max: '2791'},
		{name: 'Massachusetts (Andover)', value: 'MA', zip_min: '5501', zip_max: '5544'},
		{name: 'Maryland', value: 'MD_1', zip_min: '20331', zip_max: '20331'},
		{name: 'Maryland', value: 'MD_2', zip_min: '20335', zip_max: '20797'},
		{name: 'Maryland', value: 'MD_3', zip_min: '20812', zip_max: '21930'},
		{name: 'Maine', value: 'ME', zip_min: '3901', zip_max: '4992'},
		{name: 'Michigan', value: 'MI', zip_min: '48001', zip_max: '49971'},
		{name: 'Minnesota', value: 'MN', zip_min: '55001', zip_max: '56763'},
		{name: 'Missouri', value: 'MO', zip_min: '63001', zip_max: '65899'},
		{name: 'Mississippi', value: 'MS_1', zip_min: '38601', zip_max: '39776'},
		{name: 'Mississippi(Warren)', value: 'MS_2', zip_min: '71233', zip_max: '71233'},
		{name: 'Montana', value: 'MT', zip_min: '59001', zip_max: '59937'},
		{name: 'North Carolina', value: 'NC', zip_min: '27006', zip_max: '28909'},
		{name: 'North Dakota', value: 'ND', zip_min: '58001', zip_max: '58856'},
		{name: 'Nebraska', value: 'NE_1', zip_min: '68001', zip_max: '68118'},
		{name: 'Nebraska', value: 'NE_2', zip_min: '68122', zip_max: '69367'},
		{name: 'New Hampshire', value: 'NH', zip_min: '3031', zip_max: '3897'},
		{name: 'New Jersey', value: 'NJ', zip_min: '7001', zip_max: '8989'},
		{name: 'New Mexico', value: 'NM', zip_min: '87001', zip_max: '88441'},
		{name: 'Nevada', value: 'NV', zip_min: '88901', zip_max: '89883'},
		{name: 'New York (Fishers Is)', value: 'NY_1', zip_min: '6390', zip_max: '6390'},
		{name: 'New York', value: 'NY_2', zip_min: '10001', zip_max: '14975'},
		{name: 'Ohio', value: 'OH', zip_min: '43001', zip_max: '45999'},
		{name: 'Oklahoma', value: 'OK_1', zip_min: '73001', zip_max: '73199'},
		{name: 'Oklahoma', value: 'OK_2', zip_min: '73401', zip_max: '74966'},
		{name: 'Oregon', value: 'OR', zip_min: '97001', zip_max: '97920'},
		{name: 'Pennsylvania', value: 'PA', zip_min: '15001', zip_max: '19640'},
		{name: 'Puerto Rico', value: 'PR', zip_min: '0', zip_max: '0'},
		{name: 'Rhode Island', value: 'RI', zip_min: '2801', zip_max: '2940'},
		{name: 'South Carolina', value: 'SC', zip_min: '29001', zip_max: '29948'},
		{name: 'South Dakota', value: 'SD', zip_min: '57001', zip_max: '57799'},
		{name: 'Tennessee', value: 'TN', zip_min: '37010', zip_max: '38589'},
		{name: 'Texas (Austin)', value: 'TX_1', zip_min: '73301', zip_max: '73301'},
		{name: 'Texas', value: 'TX_2', zip_min: '75001', zip_max: '75501'},
		{name: 'Texas', value: 'TX_3', zip_min: '75503', zip_max: '79999'},
		{name: 'Texas (El Paso)', value: 'TX_4', zip_min: '88510', zip_max: '88589'},
		{name: 'Utah', value: 'UT', zip_min: '84001', zip_max: '84784'},
		{name: 'Virginia', value: 'VA_1', zip_min: '20040', zip_max: '20041'},
		{name: 'Virginia', value: 'VA_2', zip_min: '20040', zip_max: '20167'},
		{name: 'Virginia', value: 'VA_3', zip_min: '20042', zip_max: '20042'},
		{name: 'Virginia', value: 'VA_4', zip_min: '22001', zip_max: '24658'},
		{name: 'Vermont', value: 'VT_1', zip_min: '5001', zip_max: '5495'},
		{name: 'Vermont', value: 'VT_2', zip_min: '5601', zip_max: '5907'},
		{name: 'Washington', value: 'WA', zip_min: '98001', zip_max: '99403'},
		{name: 'Wisconsin', value: 'WI', zip_min: '53001', zip_max: '54990'},
		{name: 'West Virginia', value: 'WV', zip_min: '24701', zip_max: '26886'},
		{name: 'Wyoming', value: 'WY', zip_min: '82001', zip_max: '83128'}
	];
	/************************Mock Objects for Now************************/  	
}
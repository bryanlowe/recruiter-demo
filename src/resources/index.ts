import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
  	// value converters
  	'./value-converters/capitalize-format',

  	// custom elements
  	'./elements/form-components/check-list',
  	'./elements/form-components/radio-list',
  	'./elements/form-components/job-seeker/job-exp-select-list',
  	'./elements/form-components/job-seeker/work-zip-pref'
  ]);
}

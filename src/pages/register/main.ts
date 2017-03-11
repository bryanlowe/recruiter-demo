import {inlineView} from 'aurelia-framework';
import {RouterConfiguration} from 'aurelia-router';

@inlineView('<template><router-view></router-view></template>')
export class Register {

  	configureRouter(config: RouterConfiguration) {
    	config.map([
      		{ route: '', name: 'start-registration', moduleId: './components/index', title: 'Gighub - Register' },
      		{ route: 'job-provider', name: 'job-provider', moduleId: './components/job-provider/index', title: 'Gighub - Job Provider Registration' },
      		{ route: 'job-seeker', name: 'job-seeker', moduleId: './components/job-seeker/index', title: 'Gighub - Job Seeker Registration' }
    	]);
  	}
}
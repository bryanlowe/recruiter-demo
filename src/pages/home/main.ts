import {inlineView} from 'aurelia-framework';
import {RouterConfiguration} from 'aurelia-router';

@inlineView('<template><router-view></router-view></template>')
export class Home {

  	configureRouter(config: RouterConfiguration) {
    	config.map([
      		{ route: '', name: 'welcome', moduleId: './components/welcome', title: 'Gighub - Welcome' }
    	]);
  	}
}
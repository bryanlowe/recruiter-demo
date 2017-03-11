import {customElement} from 'aurelia-framework';
import {inject, useView} from 'aurelia-framework'; 
import {EventAggregator, Subscription} from 'aurelia-event-aggregator';

@customElement('job-exp-select-list')
@inject(EventAggregator)
@useView('./job-exp-select-list.html')
/*********************************************************************************************
 * Gighub: Job Experience Select List is intended to be a dynamic list of select dropdowns to select
 * the number of years that a particular skill has been utilized. 
 *********************************************************************************************/
export class JobExpSelectList {
	public skillSet: any = new Map(); // skillsets
	// mock object of experience years
	public skillLevelList: any[] = [
		{ name: '0-2 Years', value: 'L1' },
		{ name: '2-5 Years', value: 'L2' },
		{ name: '5-7 Years', value: 'L3' },
		{ name: '7-10 Years', value: 'L4' },
		{ name: '10+ Years', value: 'L5' }
	];
	public events: EventAggregator;
	public subscriptionList: Subscription[] = []; // event subscription list

	constructor(events: EventAggregator){
  		this.events = events;
  	}	

  	/**************************************************************
	 * addSkillSet - adds a skill to the skillset map
   	 * @param jobSkillObj - skill set object to be added. This should
   	 * contain an elementName and elementValue attribute
   	 * @return boolean result - success and failure
	 **************************************************************/
	addSkillSet(jobSkillObj: any){
  		let result = false;
  		if(jobSkillObj.elementName && jobSkillObj.elementValue){
	  		if(!this.skillSet.has(jobSkillObj.elementName)){
	  			this.skillSet.set(jobSkillObj.elementName, jobSkillObj.elementValue);
	  		}
	  		result = this.skillSet.has(jobSkillObj.elementName); // success is if the item is in the map
  		}
  		return result;
  	}

  	/**************************************************************
	 * removeSkillSet - remove a skill from the skillset map
   	 * @param jobSkillObj - skill set object to be removed. This should
   	 * contain an elementName
   	 * @return boolean result - success and failure
	 **************************************************************/
  	removeSkillSet(jobSkillObj: any){
  		let result = false;
  		if(jobSkillObj.elementName){
	  		if(this.skillSet.has(jobSkillObj.elementName)){
	  			this.skillSet.delete(jobSkillObj.elementName);
	  		}
	  		result = !this.skillSet.has(jobSkillObj.elementName); // success is if the item isn't in the map
	  	}
	  	return result;
  	}

  	/**************************************************************
	 * Attach subscriptions to pick up checklist clicks from job_skills
	 **************************************************************/
  	attached() {
	    this.subscriptionList.push(this.events.subscribe('check-list:job_skills:checked', e => { this.addSkillSet(e); }));
	    this.subscriptionList.push(this.events.subscribe('check-list:job_skills:unchecked', e => { this.removeSkillSet(e); }));
	}

	/**************************************************************
	 * Detach subscriptions to avoid memory leaks
	 **************************************************************/
	detached() {
		for(let i = 0, ii = this.subscriptionList.length; i < ii; i++){
			this.subscriptionList[i].dispose();
		}
	}
}
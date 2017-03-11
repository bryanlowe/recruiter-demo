import {customElement} from 'aurelia-framework';
import {bindable, inject, useView} from 'aurelia-framework'; 
import {EventAggregator, Subscription} from 'aurelia-event-aggregator';

@customElement('work-zip-pref')
@inject(EventAggregator)
@useView('./work-zip-pref.html')
/*********************************************************************************************
 * Gighub: Work Zip Preferences is intended to be a dynamic number input with custom restrictions. 
 *********************************************************************************************/
export class WorkZipPref {
	public zip_min: number = 0;
	public zip_max: number = 0;
	public zipCodeList = new Map(); 
	@bindable stateZipList: any[];
	public events: EventAggregator;
	public subscriptionList: Subscription[] = []; // event subscription list

	constructor(events: EventAggregator){
  		this.events = events;
  	}	

  	/**************************************************************
	 * updateZipCodes - updates the zip range based on the current
	 * chosen state from the work_state_pref field
   	 * @param stateObj - the state object to be compared 
	 **************************************************************/
  	updateZipCodes(stateObj: any){
  		if(stateObj.elementValue && this.zipCodeList.has(stateObj.elementValue)){
  			let zipObj = this.zipCodeList.get(stateObj.elementValue);
  			this.zip_min = zipObj.zip_min;
  			this.zip_max = zipObj.zip_max;
  		} else {
  			this.zip_min = 0;
  			this.zip_max = 0;
  		}
  	}

  	/**************************************************************
	 * 1. Attach subscriptions to pick up radiolist clicks from work_state_pref
	 * 2. Create a map of zip codes from the state zip list
	 **************************************************************/
  	attached() {
  		// attaching subscriptions
	    this.subscriptionList.push(this.events.subscribe('radio-list:work_state_pref:clicked', e => { this.updateZipCodes(e); }));

	    // creating zipmap
	    for(let i = 0, ii = this.stateZipList.length; i < ii; i++){
	    	this.zipCodeList.set(this.stateZipList[i].value, {zip_min: this.stateZipList[i].zip_min, zip_max: this.stateZipList[i].zip_max});
	    }
	}

	/**************************************************************
	 * Detach subscriptions to avoid memory leaks
	 **************************************************************/
	detached() {
		for(let i = 0, ii = this.subscriptionList.length; i < ii; i++){
			this.subscriptionList[i].dispose();
		}
		this.zipCodeList.clear();
	}
}
import {customElement} from 'aurelia-framework';
import {bindable, inject, useView} from 'aurelia-framework'; 
import {EventAggregator} from 'aurelia-event-aggregator';
import * as $ from 'jquery';
 
@customElement('radio-list')
@inject(EventAggregator) 
@useView('./radio-list.html')
/*********************************************************************************************
 * Radio List is intended to be a multiple pick list that is styled to perform as 
 * a series of buttons. Since these are radio buttons, only one button may be selected at a time
 *********************************************************************************************/
export class RadioList { 
	@bindable inputId: string;
  	@bindable options: any[]; // the button selections. comes as an array of {name: string, value: string} objects or a flat string array
  	public events: EventAggregator;
	constructor(events: EventAggregator){
		this.events = events;
	}	 

	/**************************************************************
	 * Radio List clicked event
   	 * @param event - the event object from button presses
	 **************************************************************/
	radioListClicked(event: Event){
		let elementName = event.target['htmlFor']; // the element that has been clicked
		// broadcast the selection
      	this.publish('radio-list:'+this.inputId+':clicked', {elementName: elementName, elementValue: $('#'+elementName).val()});
	}

  /**************************************************************
   * publish events
   * @param channel: string - custom channel identifier
   * @param info: any - this is the data being passed, it can be any type or format
   **************************************************************/
	publish(channel: string, info: any){
		this.events.publish(channel, info);
	}
} 
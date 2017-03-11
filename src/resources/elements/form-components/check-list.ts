import {customElement} from 'aurelia-framework';
import {bindable, inject, useView} from 'aurelia-framework'; 
import {EventAggregator} from 'aurelia-event-aggregator';
import * as $ from 'jquery';
 
@customElement('check-list')
@inject(EventAggregator) 
@useView('./check-list.html')
/*********************************************************************************************
 * Check List is intended to be a multiple pick list that is styled to perform as 
 * a series of buttons. This pick list may have a limit specified to restrict the 
 * number of choices selected.
 *********************************************************************************************/
export class CheckList { 
	@bindable inputId: string;
	@bindable selectLimit: number; // Optional: restricts the number of elements to be selected
	elementsSelected: number = 0; // keeps track of the current selected element number
  @bindable options: any[]; // the button selections. comes as an array of {name: string, value: string} objects or a flat string array
	public events: EventAggregator;
	constructor(events: EventAggregator){
		this.events = events;
	}	 

	/**************************************************************
	 * Check List clicked event
   * @param event - the event object from button presses
	 **************************************************************/
	checkListClicked(event: Event){
		let elementName = event.target['htmlFor']; // the element that has been clicked
		if(this.selectLimit){ // if there is a restriction, perform the following
			if($('#'+elementName).is(':checked')){
        // if the elements selected are less than the limit, 
        // increase the elementsSelected counter and broadcast the selection
  			if(this.elementsSelected < this.selectLimit){ 
  				this.elementsSelected++;
  				this.publish('check-list:'+this.inputId+':checked', {elementName: elementName, elementValue: $('#'+elementName).val()});
  			} else { // else uncheck this button
  				$('#'+elementName).prop('checked', false);
  				$('label[for="'+elementName+'"]').removeClass('active');
  			}
  		} else { // if the element has been unselected, decriment the elementsSelected counter and broadcast the deselection
  			if(this.elementsSelected > 0){
  				this.elementsSelected--;
  				this.publish('check-list:'+this.inputId+':unchecked', {elementName: elementName});
  			}
  		} 
		} else { // if there is no restriction, broadcast the selection
      this.publish('check-list:'+this.inputId+':clicked', {elementName: elementName, elementValue: $('#'+elementName).val()});
    }
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
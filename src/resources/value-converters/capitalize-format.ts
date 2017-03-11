import {valueConverter} from 'aurelia-framework';  

@valueConverter('capitalize-format')
/*********************************************************************************************
 * Capitalize Format is intended to capitalize every word in a string
 *********************************************************************************************/
export class CapitalizeFormat {
	toView(value) {
		value = (value) ? value.toString() : "";
	    return value.replace(/(\b\w)/gi,(m) => {return m.toUpperCase()});
	}
}
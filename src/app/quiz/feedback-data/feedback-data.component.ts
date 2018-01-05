import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'feedback-data',
  templateUrl: './feedback-data.component.html',
  styleUrls: ['./feedback-data.component.scss'],
  inputs: ['formDataValues']
})
export class FeedbackDataComponent implements OnInit {

	/**
    * @func constructor() 
    * @return void
    * @Input formDataValues: Get the Submitted Form data in JSON format
    */
	@Input() formDataValues;

	constructor() { }

	ngOnInit() {
		
	}

}

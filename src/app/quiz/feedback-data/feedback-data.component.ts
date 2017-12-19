import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'feedback-data',
  templateUrl: './feedback-data.component.html',
  styleUrls: ['./feedback-data.component.scss'],
  inputs: ['formDataValues']
})
export class FeedbackDataComponent implements OnInit {

  @Input() formDataValues;
  
	constructor() { }

	ngOnInit() {
		
	}

}

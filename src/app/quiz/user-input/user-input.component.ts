import { Component, OnInit, Input } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuizProgressService } from '../../services/quiz.progress.service';

@Component({
  selector: 'user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
  inputs: ['qz', 'index', 'isLastQ', 'navigateNext', 'headerSectionFormGroup', 'fieldName']
})

export class UserInputComponent implements OnInit {

	/**
      * @variabel newFormControl 
      * @variabel userFieldVal
      * @variabel headerSectionFormGroup
      * @variabel fieldName
      * @variabel qz
      * @variabel index
      * @variabel isLastQ
      * @variabel navigateNext
      * @variabel istest
      */
	private newFormControl: FormControl;
	private userFieldVal: string;

	@Input() headerSectionFormGroup: FormGroup;
	@Input() fieldName: string;
	@Input() qz: any;
	@Input() index;
	@Input() isLastQ;
	@Input() navigateNext;
	
	istest: boolean;

	/**
      * @func constructor() 
      * @return void
      * @param _scrollToService: Provide ScrollToService to scroll the page
      * @param _qzProgressSrv: Provide QuizProgressService to udpate quiz progress and display on the page
      */
	constructor(private _scrollToService: ScrollToService, 
		private _qzProgressSrv: QuizProgressService) {}

	/**
      * @func constructor() 
      * @return void
      * Configure form field based on JSON quiz data
      * define new form control and add to master headerSectionFormGroup
      */
	ngOnInit() {

		this.istest = false;
		this.userFieldVal = '';
		var isRequired = (this.qz.required ? Validators.required : null);

		this.newFormControl = new FormControl(this.userFieldVal, isRequired);
		this.headerSectionFormGroup.addControl(this.fieldName, this.newFormControl);

	}

	/**
      * @func navTo() 
      * @return void
      * @param $ev : get the DOM element
      * @param navId : get the target element id to scroll the page
      * @variable userFieldVal : Store user input
      * @method updateQuizCount() : Send 'inc' key to _qzProgressSrv to update increase quiz attemp count
      */
	navTo($ev: any, navId: string): void {

	    this.userFieldVal = $ev.target.value;

		if(this.userFieldVal !== '') {

			this._qzProgressSrv.updateQuizCount('inc');
			this.newFormControl.setValue(this.userFieldVal);

			if(navId) {

				const config: ScrollToConfigOptions = {
					target: navId
				};
			
				this._scrollToService.scrollTo(config);
			}

			this.istest = false;
		
		} else {
			this.istest = true;
			this._qzProgressSrv.updateQuizCount('dec');
		}
    
  	}

  	/**
      * @func testfn() 
      * @return void
      * @param navId : get the target element id to scroll the page
      * @description Check If the form field is valid;
      */
	testfn(navId: string): void {
    
		if(!this.headerSectionFormGroup.controls[this.fieldName].valid) {
			this.istest = true;
		} else {
			this.istest = false;
				if(navId) {

				const config: ScrollToConfigOptions = {
				target: navId
				};
			
				this._scrollToService.scrollTo(config);
			}
		} 

	}

}

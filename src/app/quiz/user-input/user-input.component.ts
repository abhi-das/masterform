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

	private newFormControl: FormControl;
	private userFieldVal: string;

	@Input() headerSectionFormGroup: FormGroup;
	@Input() fieldName: string;
	@Input() qz: any;
	@Input() index;
	@Input() isLastQ;
	@Input() navigateNext;
	
	istest: boolean;

	constructor(private _scrollToService: ScrollToService, private _qzProgressSrv: QuizProgressService) {}

	ngOnInit() {

		this.istest = false;
		this.userFieldVal = '';
		var isRequired = (this.qz.required ? Validators.required : null);

		this.newFormControl = new FormControl(this.userFieldVal, isRequired);
		this.headerSectionFormGroup.addControl(this.fieldName, this.newFormControl);

	}

	navTo($ev,navId) {

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

	testfn(navId) {
    
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

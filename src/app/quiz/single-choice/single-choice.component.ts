import { Component, OnInit, Input } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuizProgressService } from '../../services/quiz.progress.service';

@Component({
  selector: 'single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.scss'],
  inputs: ['qz', 'index', 'isLastQ', 'navigateNext', 'headerSectionFormGroup', 'fieldName']
})

export class SingleChoiceComponent implements OnInit {

  private newFormControl: FormControl;
  private selectedValue: string;

  @Input() headerSectionFormGroup: FormGroup;
  @Input() fieldName: string;
  @Input() qz: any;
  @Input() index;
  @Input() isLastQ;
  @Input() navigateNext;
  istest: boolean;

  constructor(private _scrollToService: ScrollToService, private _qzProgressSrv: QuizProgressService) {}

  ngOnInit() {

    var isRequired = (this.qz.required ? Validators.required : null);
    
    this.istest = false;
    this.newFormControl = new FormControl(this.selectedValue, isRequired);
    this.headerSectionFormGroup.addControl(this.fieldName, this.newFormControl);
    this.selectedValue = '';

  }

  navTo($ev,navId) {

    console.log(this);
    this.istest = false;
    
    if(this.selectedValue ==='') {
      this._qzProgressSrv.updateQuizCount('inc');
    }

    this.selectedValue = $ev.target.value;
    this.newFormControl.setValue(this.selectedValue);
    
    if(navId) {

    	const config: ScrollToConfigOptions = {
        target: navId
      };
   
      this._scrollToService.scrollTo(config);
    }

  }

  testfn(navId) {
    
    if(!this.headerSectionFormGroup.controls[this.fieldName].valid) {
      this.istest = true;
    } else {

      this.istest = false;
      const config: ScrollToConfigOptions = {
        target: navId
      };
  
      this._scrollToService.scrollTo(config);
    } 

  }

}

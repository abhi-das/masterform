import { Component, OnInit, Input } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuizProgressService } from '../../services/quiz.progress.service';

@Component({
  selector: 'multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
  inputs: ['qz','index','isLastQ','navigateNext', 'headerSectionFormGroup', 'fieldName']
})
export class MultipleChoiceComponent implements OnInit {

  private newFormControl: FormControl;
  private selectedArr: any[];

  @Input() headerSectionFormGroup: FormGroup;
  @Input() fieldName: string;
  @Input() qz: any;
  @Input() index;
  @Input() isLastQ;
  @Input() navigateNext;
  
  public istest: boolean;
  public checkedCount: number;

  constructor(private _scrollToService: ScrollToService, private _qzProgressSrv: QuizProgressService) {}

  ngOnInit() {

    var isRequired = (this.qz.required ? Validators.required : null);
    this.selectedArr = [];
    this.newFormControl = new FormControl(this.selectedArr, isRequired );
    this.headerSectionFormGroup.addControl(this.fieldName, this.newFormControl);
  }

  navTo($ev, navId) {

    console.log(this);
    // console.log( 'choice >>> ',this.headerSectionFormGroup.get(this.fieldName).value);
    
    this.istest = false;

    if($ev.target.checked) {
    
      this.selectedArr.push($ev.target.value);
    } else {

      this.selectedArr.splice(this.selectedArr.indexOf($ev.target.value), 1);
    }

    // IsAttemp the quiz and increase or decrease the attempt count
    if($ev.target.checked && this.selectedArr.length==1) {
      this._qzProgressSrv.updateQuizCount('inc');
    } else if(!$ev.target.checked && this.selectedArr.length<1) {
      this._qzProgressSrv.updateQuizCount('dec');
    }

    this.newFormControl.setValue(this.selectedArr);

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

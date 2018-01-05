import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { QuizSevice } from '../services/quiz.service';
import { Response } from '@angular/http';
import { QuizProgressService } from '../services/quiz.progress.service';


@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  /**
    * @variable questions
    * @variable form
    * @variable formData
    * @variable qzData
    * @variable count
    * @variable totalCount
    * @variable pageLoader
    */
  questions: any;
  form: FormGroup;
  formData: object;
  qzData: any;
  count: number;
  totalCount: number;
  pageLoader: boolean;

  /**
    * @func constructor() 
    * @param _scrollToService provide ScrollToService to the component
    * @param _qzSer provide QuizSevice to the component
    * @param _qzProgressSrv provide QuizProgressService to the component
    */
  constructor(private _scrollToService: ScrollToService, 
      private _qzSer: QuizSevice, 
      private _qzProgressSrv: QuizProgressService) { }

  /**
    * @func ngOnInit() 
    * @return void
    * @method getQuiz() make a Http call and get the qzData
    * Declare empty FormGroup which will be populated based on component type (single/ multiple/ text quiz type etc.)
    * @count subscribe currentQuizCount to update quiz progress
    */
  ngOnInit() {

    this.pageLoader = true;

    this.qzData = this._qzSer.getQuiz().subscribe((res: Response) => {
      // console.log('right here > ', res['questionnaire']['questions']);
      this.questions = res['questionnaire']['questions'];
      this.totalCount = this.questions.length;
      this.pageLoader = false;
    });

    this.form = new FormGroup({});

    this._qzProgressSrv.currentQuizCount.subscribe(cVal => this.count = cVal );
  }

  /**
    * @func onFeedbackSubmit() 
    * @return void
    * @param feedback: get the form data
    * @param showDtContainer: target container id to scroll the page
    * @method scrollTo() inject target id to scroll the page on form submit event
    */
  onFeedbackSubmit(feedback: any, showDtContainer: string): void {
    
    // console.log("count > ", this.count);
    this.formData = feedback;

    const config: ScrollToConfigOptions = {
      target: showDtContainer
    };
 
    this._scrollToService.scrollTo(config);
  }

}

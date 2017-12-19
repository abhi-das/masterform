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

  questions: any;
  form: FormGroup;
  formData: object;
  qzData: any;
  count: number;
  totalCount: number;
  pageLoader: boolean;

  constructor(private _scrollToService: ScrollToService, private _qzSer: QuizSevice, private _qzProgressSrv: QuizProgressService) { }

  ngOnInit() {

    this.pageLoader = true;

    this.qzData = this._qzSer.getQuiz().subscribe((res: Response) => {
      // console.log('right here > ', res['questionnaire']['questions']);
      this.questions = res['questionnaire']['questions'];
      this.totalCount = this.questions.length;
      this.pageLoader = false;
    });

    // Form Controls
    this.form = new FormGroup({});

    this._qzProgressSrv.currentQuizCount.subscribe(cVal => this.count = cVal );
  }

  onFeedbackSubmit(feedback: any, showDtContainer: string) {
    
    // console.log("count > ", this.count);
    this.formData = feedback;

    const config: ScrollToConfigOptions = {
      target: showDtContainer
    };
 
    this._scrollToService.scrollTo(config);
  }

}

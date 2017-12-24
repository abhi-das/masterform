import { Component, OnInit } from '@angular/core';
import { AppDataService } from './services/app.data.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';

  quiz: any;

  constructor(private _appDataSrv: AppDataService) {}

  ngOnInit() {

  	// this._appDataSrv.getQuiz().subscribe( dt => this.appQuizData = dt );
  	this._appDataSrv.getQuiz().subscribe((res: Response) => {
  		this.quiz = res['questionnaire']['questions'];
  	});

  }

}

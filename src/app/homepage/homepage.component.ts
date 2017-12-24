import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../services/app.data.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  quiz: any;

  constructor(private _appDataSrv: AppDataService) {}

  ngOnInit() {
  	this._appDataSrv.getQuiz().subscribe((res: Response) => {
  		this.quiz = res['questionnaire']['questions'];
  	});
  }

}

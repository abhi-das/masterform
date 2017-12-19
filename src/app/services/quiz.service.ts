import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class QuizSevice {

	constructor(private _http: Http) {}

	getQuiz() {

		const res: Observable<Response> =  this._http.get("./assets/data/questionnaire.json")
			.map((quizRes: Response) => quizRes.json());


		// Add Error hanlding logic here
		return res;
	}
}
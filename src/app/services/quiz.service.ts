import { Injectable, OnInit, Inject, PLATFORM_ID, Injector } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class QuizSevice {

	
	/**
      * @func constructor() 
      * @return void
      * @param _http: Provide Http to the component
      * @param platformId: To check if application route is directed from Server or Browser
      * @param injector: To access server variable 
      */
	constructor(private _http: Http, @Inject(PLATFORM_ID) private platformId: Object,
			private injector: Injector) {}

	/**
      * @func getQuiz() 
      * @return Observable
      */
	getQuiz(): Observable< any > {

		let host = '';

		if(this.platformId == 'server') {
			// ------Coming from Express Server
			// let req = this.injector.get('request');
			// host = 'http://'+ req.get('host');			
			host = this.injector.get('serverUrl');
		}

		const res: Observable<Response> =  this._http.get(host+"/data/questionnaire.json")
			.map((quizRes: Response) => quizRes.json());

		// Add Error hanlding logic here
		return res;
	}
}
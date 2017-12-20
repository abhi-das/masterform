import { Injectable, OnInit, Inject, PLATFORM_ID, Injector } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class QuizSevice {

	constructor(private _http: Http, @Inject(PLATFORM_ID) private platformId: Object,
			private injector: Injector) {}

	getQuiz() {

		let host = '';
		if(this.platformId == 'server') {
			let req = this.injector.get('request');
			host = 'http://'+ req.get('host');
			// console.log("locales from crawlers:>>>>>>>>> " + req.headers["accept-language"]);
            // console.log("headers>>>>>>>>: ", req.headers);
			// console.log("host>>>>>>>>>: " + req.get('host'));			
			// console.log( 'req>>>>>>>>>> ', process.env);
			// console.log( 'req>>>>>>>>>> ', req );
		}

		const res: Observable<Response> =  this._http.get(host+"/data/questionnaire.json")
			.map((quizRes: Response) => quizRes.json());


		// Add Error hanlding logic here
		return res;
	}
}
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
		let prodFolder = 'pagedeploy';
		if(this.platformId == 'server') {
			// ------Coming from Express Server
			// let req = this.injector.get('request');
			// host = 'http://'+ req.get('host');			
			host = this.injector.get('serverUrl');

			// console.log("locales from crawlers:>>>>>>>>> " + req.headers["accept-language"]);
            // console.log("headers>>>>>>>>: ", req.headers);
			// console.log("host>>>>>>>>>: " + req.get('host'));			
			// console.log( 'serverUrl>>>>>>>>>> ', this.injector.get('serverUrl'));
			// console.log( 'req>>>>>>>>>> ', req );
		}

		const res: Observable<Response> =  this._http.get(host+"/data/questionnaire.json")
			.map((quizRes: Response) => quizRes.json());


		// Add Error hanlding logic here
		return res;
	}
}
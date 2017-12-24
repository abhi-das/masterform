import { Injectable, OnInit,Inject, PLATFORM_ID, Injector } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class AppDataService {

	constructor(private _http: Http, @Inject(PLATFORM_ID) private platformId: Object,
			private injector: Injector) {}

	getQuiz() {

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
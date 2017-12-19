import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()

export class QuizProgressService {

    quizCount = 0;

    private quizCountSource = new BehaviorSubject<number>(this.quizCount);

    currentQuizCount = this.quizCountSource.asObservable();

    updateQuizCount(countcase:string) {

        if(countcase == 'inc') {
            this.quizCount++;
            
        } else {
            this.quizCount--;
        }

        this.quizCountSource.next(this.quizCount);

    }

}
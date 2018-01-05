import { Component, OnInit, Input } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuizProgressService } from '../../services/quiz.progress.service';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
  inputs: ['qz', 'index', 'isLastQ', 'navigateNext', 'headerSectionFormGroup', 'fieldName']
})
export class MultipleChoiceComponent implements OnInit {

    /**
     * @variabel newFormControl
     * @variabel userFieldVal
     * @variabel headerSectionFormGroup
     * @variabel fieldName
     * @variabel qz
     * @variabel index
     * @variabel isLastQ
     * @variabel navigateNext
     * @variabel istest
     */
    private newFormControl: FormControl;
    private selectedArr: any[];

    @Input() headerSectionFormGroup: FormGroup;
    @Input() fieldName: string;
    @Input() qz: any;
    @Input() index;
    @Input() isLastQ;
    @Input() navigateNext;

    public istest: boolean;
    public checkedCount: number;


    /**
     * @func constructor()
     * @return void
     * @param _scrollToService: Provide ScrollToService to scroll the page
     * @param _qzProgressSrv: Provide QuizProgressService to udpate quiz progress and display on the page
     */
    constructor(private _scrollToService: ScrollToService,
        private _qzProgressSrv: QuizProgressService) {}

    /**
     * @func constructor()
     * @return void
     * Configure form field based on JSON quiz data
     * define new form control and add to master headerSectionFormGroup
     */
    ngOnInit() {

        const isRequired = (this.qz.required ? Validators.required : null);
        this.selectedArr = [];
        this.newFormControl = new FormControl(this.selectedArr, isRequired);
        this.headerSectionFormGroup.addControl(this.fieldName, this.newFormControl);
    }

    /**
     * @func navTo()
     * @return void
     * @param $ev : get the DOM element
     * @param navId : get the target element id to scroll the page
     * @variable userFieldVal : Store user input
     * @method updateQuizCount() : Send 'inc' key to _qzProgressSrv to update increase quiz attemp count
     */
    navTo($ev, navId) {

        this.istest = false;

        if ($ev.target.checked) {

            this.selectedArr.push($ev.target.value);
        } else {

            this.selectedArr.splice(this.selectedArr.indexOf($ev.target.value), 1);
        }

        // IsAttemp the quiz and increase or decrease the attempt count
        if ($ev.target.checked && this.selectedArr.length === 1) {
            this._qzProgressSrv.updateQuizCount('inc');
        } else if (!$ev.target.checked && this.selectedArr.length < 1) {
            this._qzProgressSrv.updateQuizCount('dec');
        }

        this.newFormControl.setValue(this.selectedArr);

        if (navId) {

            const config: ScrollToConfigOptions = {
                target: navId
            };

            this._scrollToService.scrollTo(config);
        }
    }

    /**
     * @func testfn()
     * @return void
     * @param navId : get the target element id to scroll the page
     * @description Check If the form field is valid;
     */
    testfn(navId) {

        if (!this.headerSectionFormGroup.controls[this.fieldName].valid) {
            this.istest = true;
        } else {

            this.istest = false;
            const config: ScrollToConfigOptions = {
                target: navId
            };

            this._scrollToService.scrollTo(config);
        }
    }

}

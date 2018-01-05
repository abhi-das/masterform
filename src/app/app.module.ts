import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { MultipleChoiceComponent } from './quiz/multiple-choice/multiple-choice.component';
import { SingleChoiceComponent } from './quiz/single-choice/single-choice.component';
import { UserInputComponent } from './quiz/user-input/user-input.component';
import { WindowRef } from './services/window.service';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FeedbackDataComponent } from './quiz/feedback-data/feedback-data.component';

import { HttpModule } from '@angular/http';
import { QuizSevice } from './services/quiz.service';
import { QuizProgressService } from './services/quiz.progress.service';
import { ProgressBarComponent } from './quiz/progress-bar/progress-bar.component';
import { ConfigSlidePanelDirective } from './directives/config-slide-panel.directive';
import { SlidePanelContainerDirective } from './directives/slide-panel-container.directive';
import { SlidePanelComponent } from './common/slide-panel/slide-panel.component';

@NgModule({
    imports: [
        BrowserModule.withServerTransition({
            appId: 'my-app'
        }),
        ReactiveFormsModule,
        HttpModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        ScrollToModule.forRoot()
    ],
    declarations: [
        AppComponent,
        QuizComponent,
        MultipleChoiceComponent,
        SingleChoiceComponent,
        UserInputComponent,
        FeedbackDataComponent,
        ProgressBarComponent,
        ConfigSlidePanelDirective,
        SlidePanelContainerDirective,
        SlidePanelComponent
    ],
    exports: [BsDropdownModule, TooltipModule, ModalModule],
    providers: [WindowRef, QuizSevice, QuizProgressService],
    bootstrap: [AppComponent]
})
export class AppModule {}

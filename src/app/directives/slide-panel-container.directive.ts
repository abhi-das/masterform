import { Directive, HostBinding } from '@angular/core';
import { ConfigSlidePanel } from './config-slide-panel.directive';

@Directive({
	selector: '[slide-panel-container]'
})

export class SlidePanelContainer {

	openState:boolean = false;

	@HostBinding('class.isPanelOpen')
	get isPanelOpen() {
		return this.openState;
	}

	listenToMe(isOpen:boolean) {
		return this.openState = isOpen;
	}

}
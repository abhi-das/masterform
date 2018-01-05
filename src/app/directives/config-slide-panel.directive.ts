import { Directive, HostBinding, HostListener, EventEmitter } from '@angular/core';
import { SlidePanelContainer } from './slide-panel-container.directive';

@Directive({
  selector: '[config-slide-panel]'
})
export class ConfigSlidePanel {

	/**
  	* @func constructor() 
	* @return void
	* @param _sdPanelContainer provide parant component
	* @method listenToMe() send status @variable to parent component
  	*/
  constructor(private _sdPanelContainer: SlidePanelContainer) { }

  isConfigOpen: boolean = false;

  /**
  	* @func slideContainer() Bind click event to ConfigSlidePanel directive
	* @return void
	* Change variable status
	* @method listenToMe() send status @variable to parent component
  	*/
  @HostListener('click')
  slideContainer(): void {
  	var status = this.isConfigOpen = !this.isConfigOpen;
 	this._sdPanelContainer.listenToMe(status);
  }
}


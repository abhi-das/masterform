import { Directive, HostBinding, HostListener, EventEmitter } from '@angular/core';
import { SlidePanelContainer } from './slide-panel-container.directive';

@Directive({
  selector: '[config-slide-panel]'
})
export class ConfigSlidePanel {

  constructor(private _sdPanelContainer: SlidePanelContainer) { }

  isConfigOpen: boolean = false;

  @HostListener('click')
  slideContainer() {
  	var status = this.isConfigOpen = !this.isConfigOpen;
 	this._sdPanelContainer.listenToMe(status);

  }


}

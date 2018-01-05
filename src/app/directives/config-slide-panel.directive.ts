import { Directive, HostBinding, HostListener, EventEmitter } from '@angular/core';
import { SlidePanelContainerDirective } from './slide-panel-container.directive';

@Directive({
  selector: '[appConfigSlidePanel]'
})

export class ConfigSlidePanelDirective {

    /**
     * @func constructor()
     * @return void
     * @param _sdPanelContainer provide parant component
     * @method listenToMe() send status @variable to parent component
     */
    constructor(private _sdPanelContainer: SlidePanelContainerDirective) {}

    isConfigOpen = false;

    /**
     * @func slideContainer() Bind click event to ConfigSlidePanel directive
     * @return void
     * Change variable status
     * @method listenToMe() send status @variable to parent component
     */
    @HostListener('click')
    slideContainer(): void {
        const status = this.isConfigOpen = !this.isConfigOpen;
        this._sdPanelContainer.listenToMe(status);
    }
}

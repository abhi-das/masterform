import { Directive, HostBinding } from '@angular/core';
import { ConfigSlidePanelDirective } from './config-slide-panel.directive';

@Directive({
    selector: '[appSlidePanelContainer]'
})

export class SlidePanelContainerDirective {

    openState = false;

    /**
     * @func isPanelOpen()
     * @HostBinding event binding to 'isPanelOpen' class to notify state change of the directive
     * @return boolean
     */
    @
    HostBinding('class.isPanelOpen')
    get isPanelOpen(): boolean {
        return this.openState;
    }

    /**
     * @func listenToMe()
     * @param isOpen receive new state and update @variable openState
     * @return boolean
     */
    listenToMe(isOpen: boolean): boolean {
        return this.openState = isOpen;
    }

}

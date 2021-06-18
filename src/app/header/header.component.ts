import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    collapsed = true;

    // enable outside this component
    @Output() featureSelected = new EventEmitter<string>();
    
    onSelect(feature: string) {
        this.featureSelected.emit(feature); // emite o evento
    }
}
import { Component, Input, Output,EventEmitter }  from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
    starWidth: number;
    @Input() rating: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }




@Output() notify : EventEmitter<string> = new EventEmitter<string>();

ratingClicked():void{
    this.notify.emit(`Rating of ${this.rating} is clicked! `);
}
}
import { Component, OnChanges, Input,
    Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: './app/shared/star/components/star.html',
    styleUrls: ['./app/shared/star/components/star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(): void {
        // Convert x out of 5 starts
        // to y out of 102px width
        this.starWidth = this.rating * 102 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}
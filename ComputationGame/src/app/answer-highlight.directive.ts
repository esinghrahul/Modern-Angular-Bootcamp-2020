import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map, filter } from 'rxjs/operators';

@Directive({
  selector: '[appAnswerHighlight]',
})
export class AnswerHighlightDirective {
  constructor(private el: ElementRef, private controlName: NgControl) {}

  ngOnInit() {
    this.controlName.control.parent.valueChanges
      .pipe(
        map(({ value1, value2, answer }) =>
          Math.abs((value1 + value2 - answer) / (value1 + value2))
        )
      )
      .subscribe((value) => {
        if (value < 0.04) {
          this.el.nativeElement.classList.add('close');
        } else {
          this.el.nativeElement.classList.remove('close');
        }
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MathValidators } from '../math-validators';
import { delay, filter, scan } from 'rxjs/operators'

@Component({
  selector: 'app-equation-form',
  templateUrl: './equation-form.component.html',
  styleUrls: ['./equation-form.component.css'],
})
export class EquationFormComponent implements OnInit {
  secondsPerAnswer = 0;
  mathForm = new FormGroup(
    {
      value1: new FormControl(this.randomNumber()),
      value2: new FormControl(this.randomNumber()),
      answer: new FormControl(''),
    },
    [MathValidators.addition('answer', 'value1', 'value2')]
  );

  constructor() {}

  ngOnInit(): void {
    const startTime = new Date();
    let numberSolved = 0;
    this.mathForm.statusChanges.pipe(
      filter(value => value === 'VALID'),
      delay(300), scan((acc) => {
        return{
          numberSolved: acc.numberSolved + 1,
          startTime: acc.startTime
        }
      },{numberSolved: 0, startTime: new Date()}))
      .subscribe(({numberSolved, startTime}) => {
        this.secondsPerAnswer = (
          new Date().getTime() - startTime.getTime()
        )/ numberSolved / 1000;
      this.mathForm.setValue({
        value1: this.randomNumber(),
        value2: this.randomNumber(),
        answer: '',
      });
    });
  }

  randomNumber() {
    return Math.floor(Math.random() * 100);
  }
}

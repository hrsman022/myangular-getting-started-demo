import { Component } from '@angular/core';

import { calculators } from '../calculators';

@Component({
  selector: 'app-calculator-list',
  templateUrl: './calculator-list.component.html',
  styleUrls: ['./calculator-list.component.css']
})
export class CalculatorListComponent {
  calculators = calculators;

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
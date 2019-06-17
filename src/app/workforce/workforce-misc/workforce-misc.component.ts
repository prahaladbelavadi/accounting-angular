import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-workforce-misc',
  templateUrl: './workforce-misc.component.html',
  styleUrls: ['./workforce-misc.component.css']
})
export class WorkforceMiscComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  required = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.required.hasError('required')) {
      return 'You must enter a value';
    }
  }
}

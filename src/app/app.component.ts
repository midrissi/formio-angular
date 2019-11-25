import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilderComponent } from 'angular-formio';
import { Formio } from 'formiojs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('builder', { static: true }) builder: FormBuilderComponent;
  json = {};
  public form = {
    components: []
  };

  constructor(
    // private service: FormioService,
  ) {}

  ngOnInit() {
    this.builder.formio
  }

  onChange(event) {
    this.json = event.form;
  }

  onSubmit() {
    Formio;
    debugger;
  //  this.builder.formio.saveComponent(this.form);
  }
}

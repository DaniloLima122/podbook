import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pod-float-button',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.scss']
})
export class FloatButtonComponent {

  private callbackFn: Function = () => { };

  @Input()
  src = '';

  @Input()
  set callback(fun: Function) {

    this.callbackFn = fun;
  }

  get callback() {

    return this.callbackFn;
  }

  executeCallback() {
    this.callbackFn();
  }
}

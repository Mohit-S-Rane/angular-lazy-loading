import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <h1>hello i am a header</h1>
    <button color="primary" mat-raised-button>login</button>
  `,
  styles: [``]
})

export class HeaderComponent {

  constructor() {
  }
}

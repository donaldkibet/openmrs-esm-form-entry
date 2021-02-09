import { Component } from '@angular/core';

import { Subscription } from 'rxjs';
import { singleSpaPropsSubject } from 'src/single-spa/single-spa-props';

@Component({
  selector: 'esm-form-entry-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  backend = require('@openmrs/esm-api');
  title = 'openmrs-esm-form-entry';
  view: string;
  sub: Subscription;
  constructor() {}
  ngOnInit(): void {
    this.sub = singleSpaPropsSubject.subscribe(
      (prop) => {
        this.view = prop.view;
      },
      (err) => {}
    );
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}

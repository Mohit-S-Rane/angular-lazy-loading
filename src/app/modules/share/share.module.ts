import {NgModule} from '@angular/core';
import {HeaderComponent} from './components/header.component';
import {MaterialModule} from '../../material.module';

@NgModule({
  imports: [MaterialModule],
  exports: [MaterialModule, HeaderComponent],
  declarations: [HeaderComponent]
})
export class ShareModule {
}

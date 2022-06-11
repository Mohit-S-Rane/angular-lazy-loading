import {NgModule} from '@angular/core';
import {HomeComponent} from './containers/home.component';
import {UserRoutingModule} from './user-routing.module';
import {ShareModule} from '../share/share.module';

@NgModule({
  imports: [UserRoutingModule, ShareModule],
  declarations: [HomeComponent],
  providers: []
})
export class UserModule {
}

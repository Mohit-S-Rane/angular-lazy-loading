import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin-routing.module';
import {HomeComponent} from './containers/home.component';

@NgModule({
  imports: [AdminRoutingModule],
  declarations: [HomeComponent],
  providers: []
})
export class AdminModule {
}

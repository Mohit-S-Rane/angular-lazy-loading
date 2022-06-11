import {NgModule} from '@angular/core';
import {MaterialModule} from '../../material.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {ApiService} from './services/api-service';
import {AdminGuard} from './guards/admin-guard';
import {UserGuard} from './guards/user-guard';


const data = [BrowserModule,
  BrowserAnimationsModule,
  MaterialModule, FormsModule,
  FlexLayoutModule,
  HttpClientModule];

@NgModule({
  imports: [data],
  exports: [data],
  declarations: [],
  providers: [ApiService, UserGuard, AdminGuard],
})

export class CoreModule {
}

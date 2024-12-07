import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MaterialModule} from './modules/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HeaderMehmannjComponent } from './header-mehmannj/header-mehmannj.component';
import { MehmannjAboutComponent } from './mehmannj-about/mehmannj-about.component';
import { MehmannjCountryComponent } from './mehmannj-country/mehmannj-country.component';
import { MehmannjPicsComponent } from './mehmannj-pics/mehmannj-pics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMehmannjComponent,
    MehmannjAboutComponent,
    MehmannjCountryComponent,
    MehmannjPicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { CourcesComponent } from './components/parts/cources/cources.component';
import { ParternersComponent } from './components/parts/parterners/parterners.component';
import { CtaComponent } from './components/parts/cta/cta.component';
import { TestimonialComponent } from './components/parts/testimonial/testimonial.component';
import { HeaderComponent } from './components/parts/header/header.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CourcesComponent,
    ParternersComponent,
    CtaComponent,
    TestimonialComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

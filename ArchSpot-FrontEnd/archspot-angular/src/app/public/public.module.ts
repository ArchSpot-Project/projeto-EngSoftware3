import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PlansPageComponent } from './pages/plans-page/plans-page.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    PlansPageComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }

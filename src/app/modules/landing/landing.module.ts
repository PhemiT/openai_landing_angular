import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PossibilityComponent } from './possibility/possibility.component';
import { WhatGpt3Component } from './what-gpt3/what-gpt3.component';
import { ComponentsModule } from "../../shared/components/components.module";

@NgModule({
  declarations: [
    BlogComponent,
    FeaturesComponent,
    FooterComponent,
    HeaderComponent,
    PossibilityComponent,
    WhatGpt3Component
  ],
  imports: [
    CommonModule,
    ComponentsModule
], 
  exports: [
    BlogComponent,
    FeaturesComponent,
    FooterComponent,
    HeaderComponent,
    PossibilityComponent,
    WhatGpt3Component
  ]
})
export class LandingModule { }

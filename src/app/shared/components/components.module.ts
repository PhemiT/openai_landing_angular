import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { BrandComponent } from './brand/brand.component';
import { CtaComponent } from './cta/cta.component';
import { FeatureComponent } from './feature/feature.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    ArticleComponent,
    BrandComponent,
    CtaComponent,
    FeatureComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArticleComponent,
    BrandComponent,
    CtaComponent,
    FeatureComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }

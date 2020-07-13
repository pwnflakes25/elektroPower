import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestimonialComponent } from './homePage/testimonial/testimonial.component';
import { HomeComponent } from './homePage/home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { QuoteFormComponent } from './homePage/quote-form/quote-form.component';
import { SolarComponent } from './packages/solar/solar.component';
import { GeneratorComponent } from './packages/generator/generator.component';
import {MailerService} from './packages/mailer.service';
import { BlogListComponent } from './homePage/blog-list/blog-list.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RecommendationComponent } from './calculator/recommendation/recommendation.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SliderComponent } from './homePage/slider/slider.component';



@NgModule({
  declarations: [
    AppComponent,
    TestimonialComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    QuoteFormComponent,
    SolarComponent,
    GeneratorComponent,
    BlogListComponent,
    CalculatorComponent,
    RecommendationComponent,
    AboutUsComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    MatDialogModule,
    MatTooltipModule,
    MatSelectModule
  ],
  providers: [MailerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

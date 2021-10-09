import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Web/home/home.component';
import { HeaderComponent } from './Web/header/header.component';
import { FooterComponent } from './Web/footer/footer.component';
import { CategoryComponent } from './Web/category/category.component';
import { LoginComponent } from './Web/login/login.component';
import { RegisterComponent } from './Web/register/register.component';
import { CourseDetailComponent } from './Web/course-detail/course-detail.component';
import { CartComponent } from './Web/cart/cart.component';
import { CheckoutComponent } from './Web/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    LoginComponent,
    RegisterComponent,
    CourseDetailComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

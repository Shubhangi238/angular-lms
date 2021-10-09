import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Web/cart/cart.component';
import { CategoryComponent } from './Web/category/category.component';
import { CheckoutComponent } from './Web/checkout/checkout.component';
import { CourseDetailComponent } from './Web/course-detail/course-detail.component';
import { HomeComponent } from './Web/home/home.component';
import { LoginComponent } from './Web/login/login.component';
import { RegisterComponent } from './Web/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'course-detail', component: CourseDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


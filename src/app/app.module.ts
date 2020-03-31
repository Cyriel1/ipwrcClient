import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SlideShowComponent } from './homepage/slide-show/slide-show.component';
import { CategoriesComponent } from './homepage/categories/categories.component';
import { ProductsComponent } from './products/products.component';



const appRoutes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'products', component: ProductsComponent}
 
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomepageComponent,
    SlideShowComponent,
    CategoriesComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

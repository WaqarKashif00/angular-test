import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ListModule } from './list/list.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



/**
 * AppModule is the root module of the Angular application.
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ListModule,
    // FormsModule,
    // ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent], // Set AppComponent as the bootstrap component
})
export class AppModule { }

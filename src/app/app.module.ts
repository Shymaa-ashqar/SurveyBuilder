import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardItemComponent } from './card-item/card-item.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    CardsListComponent,
    CardItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

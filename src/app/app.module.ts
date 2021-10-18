import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from "@angular/material/tabs";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
    MainComponent,
    HomeComponent,
    ContentComponent,
} from './pages';
import { ScrolledToDirective } from './directive/scrolledTo.directive';

@NgModule({
  imports: [ 
    BrowserModule, 
    BrowserAnimationsModule,
    FlexLayoutModule, 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatBadgeModule,
    MatChipsModule,
    AppRoutingModule
  ],
  declarations: [ 

    AppComponent, 
    MainComponent,
    HomeComponent,
    ContentComponent,
    ScrolledToDirective
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

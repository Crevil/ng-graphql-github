import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MdButtonModule,
  MdCardModule,
  MdInputModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryDetailsComponent,
    RepositoryListComponent,
    SearchInputComponent,
    StarsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

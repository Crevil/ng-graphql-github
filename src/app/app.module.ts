import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MdButtonModule,
  MdCardModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryDetailsComponent,
    RepositoryListComponent,
    SearchInputComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

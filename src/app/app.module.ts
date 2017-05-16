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

import { RepositoryDetailsComponent } from 'app/repository-details/repository-details.component';
import { RepositoryListComponent } from 'app/repository-list/repository-list.component';
import { RestService } from 'app/rest.service';
import { SearchInputComponent } from 'app/search-input/search-input.component';
import { StarsComponent } from 'app/stars/stars.component';
import { AppComponent } from './app.component';

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
  providers: [
    RestService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { ListDataComponent } from './components/list-data/list-data.component';
import { EditDataComponent } from './components/edit-data/edit-data.component';
import { DataFilterPipe } from './pipes/data-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    ListDataComponent,
    EditDataComponent,
    DataFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

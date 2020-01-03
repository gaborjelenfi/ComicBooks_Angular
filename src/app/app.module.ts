import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AppRoutingModule } from './app-routing.module';
import { ListService } from './list/list.service';
import { FormsModule } from '@angular/forms';
import { CreateService } from './create/create.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [ListService, CreateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

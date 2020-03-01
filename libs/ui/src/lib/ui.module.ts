import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@google-images/material';
import { LoadingComponent } from './loading/loading.component';
import { ListComponent } from './list/list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    LoadingComponent,
    ListComponent,
    PhotoFormComponent,
    DetailComponent
  ],
  exports: [
    LoadingComponent,
    ListComponent,
    PhotoFormComponent,

  ]
})
export class UiModule {}

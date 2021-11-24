import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './components/add-data/add-data.component';
import { EditDataComponent } from './components/edit-data/edit-data.component';
import { ListDataComponent } from './components/list-data/list-data.component';

const routes: Routes = [
  { path: '', component: ListDataComponent},
  { path: 'add', component: AddDataComponent },
  { path: 'edit', component: EditDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

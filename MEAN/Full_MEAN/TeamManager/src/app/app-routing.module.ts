import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'players/list', 
        pathMatch: 'full'
    },
    {
        path: 'players',
        children: [
            {
                path: "list",
                component: ListComponent,
            }, 
            {
                path: "add",
                component: AddComponent
            }
        ]
    },
    {
        path: "status/game/:id",
        component: StatusComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

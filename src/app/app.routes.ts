import { Routes } from '@angular/router';
import { Home } from './home/home';
import { List } from './list/list';
import { Detail } from './detail/detail';

export const routes: Routes = [
    {path:'', component:Home},
    {path: 'list', component:List},
    {path: 'detail/:id', component:Detail}
];

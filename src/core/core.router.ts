import {Routes} from '@angular/router';
import {DashboardComponent} from '../components/dashboard/dashboard.component';
import {SourcesListComponent} from '../components/sources/sources-list/sources-list.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: DashboardComponent},
  {path: 'sources/:id', component: SourcesListComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'}
]

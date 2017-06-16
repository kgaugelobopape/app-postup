import {Routes} from '@angular/router';
import {DashboardComponent} from '../components/dashboard/dashboard.component';
import {SourcesComponent} from '../components/sources/sources.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: DashboardComponent},
  {path: 'sources', component: SourcesComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'}
]

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { TeamsComponent }   from './teams/teams.component';
import { SquadDetailComponent }   from './squad-detail/squad-detail.component';
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
      path: '',
      component: WelcomeComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'teams',
      component: TeamsComponent
    },
    {
    path: 'squads/:id',
    component: SquadDetailComponent
    },
    {
      path: 'admin',
      component: AdminComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './core/main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { SettingsComponent } from './settings/settings.component';
import { TasksComponent } from './tasks/tasks-component/tasks.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { UpdateTaskComponent } from './tasks/update-task/update-task.component';
import { loggedInGuard } from './guards/logged-in.guard';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    canActivate: [loggedInGuard],
    children: [
      {
        path: '',
        component: TasksComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },

      {
        path: 'tasks/:task-id',
        component: TaskDetailsComponent,
      },
      {
        path: 'tasks/:task-id/edit',
        component: UpdateTaskComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

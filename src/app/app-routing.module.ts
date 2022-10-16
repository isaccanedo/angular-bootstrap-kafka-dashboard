import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DashboardPipelinesComponent }   from './dashboard/pipelines/dashboard-pipeline.component';


import { PipelinesComponent }   from "./dashboard/pipelines/pipelines.component";
import { PipelineDetailComponent }  from './dashboard/pipelines/pipeline-detail.component';
import { JobsComponent }        from "./dashboard/jobs/jobs.component";
import { SourcesComponent }     from "./dashboard/sources/sources.component";


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',            component: DashboardComponent },
  { path: 'dashboard-pipelines',  component: DashboardPipelinesComponent },
  { path: 'pipelines',            component: PipelinesComponent },
  { path: 'pipeline-detail/:id',  component: PipelineDetailComponent },
  { path: 'jobs',                 component: JobsComponent },
  { path: 'sources',              component: SourcesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

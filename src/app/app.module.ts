import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataServicePipeline }  from './dashboard/pipelines/in-memory-data-pipeline.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DashboardPipelinesComponent }   from './dashboard/pipelines/dashboard-pipeline.component';

import { PipelinesComponent }   from './dashboard/pipelines/pipelines.component';
import { JobsComponent }        from "./dashboard/jobs/jobs.component";
import { SourcesComponent }     from "./dashboard/sources/sources.component";

import { PipelineService }      from './dashboard/pipelines/pipeline.service';
import {PipelineDetailComponent} from "./dashboard/pipelines/pipeline-detail.component";
import { SearchPipe }           from "./dashboard/pipelines/searchpipe.component"

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataServicePipeline),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardPipelinesComponent,
    PipelinesComponent,
    PipelineDetailComponent,
    JobsComponent,
    SourcesComponent,
    SearchPipe
  ],
  providers: [
    PipelineService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

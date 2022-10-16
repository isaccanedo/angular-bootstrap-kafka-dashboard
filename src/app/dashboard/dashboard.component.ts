import { Component, OnInit } from '@angular/core';

import { Pipeline } from './pipelines/pipeline';
import { PipelineService } from './pipelines/pipeline.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  pipelines: Pipeline[] = [];

  constructor(private pipelineService: PipelineService) { }

  ngOnInit(): void {
    this.pipelineService.getPipelines()
      .then(pipelines => this.pipelines = pipelines.slice(1, 5));
  }
}

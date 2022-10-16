import { Component, OnInit } from '@angular/core';

import { Pipeline } from './pipeline';
import { PipelineService } from './pipeline.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard-pipelines',
  templateUrl: 'dashboard-pipeline.component.html',
  styleUrls: [ '../dashboard.component.css' ]
})
export class DashboardPipelinesComponent implements OnInit {

  pipelines: Pipeline[] = [];

  constructor(private pipelineService: PipelineService) { }

  ngOnInit(): void {
    this.pipelineService.getPipelines()
      .then(pipelines => this.pipelines = pipelines);
  }
}

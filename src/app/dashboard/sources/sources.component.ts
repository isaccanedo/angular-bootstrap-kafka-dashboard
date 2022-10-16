import { Component, OnInit } from '@angular/core';

import { Pipeline } from '../pipelines/pipeline';
import { PipelineService } from '../pipelines/pipeline.service';

@Component({
  moduleId: module.id,
  selector: 'my-sources',
  templateUrl: 'sources.component.html',
  styleUrls: [ 'sources.component.css' ]
})
export class SourcesComponent implements OnInit {

  pipelines: Pipeline[] = [];

  constructor(private pipelineService: PipelineService) { }

  ngOnInit(): void {
    this.pipelineService.getPipelines()
      .then(pipelines => this.pipelines = pipelines.slice(1, 5));
  }
}

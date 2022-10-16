import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Pipeline }         from './pipeline';
import { PipelineService }  from './pipeline.service';

@Component({
  moduleId: module.id,
  selector: 'my-pipelines',
  templateUrl: 'pipelines.component.html',
  styleUrls: [ 'pipelines.component.css' ]
})
export class PipelinesComponent implements OnInit {
  filterargs = {name: 'Search...'};
  pipelines: Pipeline[];
  selectedPipeline: Pipeline;
  constructor(
    private pipelineService: PipelineService,
    private router: Router) { }
  getPipelines(): void {
    this.pipelineService
      .getPipelines()
      .then(pipelines => this.pipelines = pipelines);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.pipelineService.create(name)
      .then(pipeline => {
        this.pipelines.push(pipeline);
        this.selectedPipeline = null;
      });
  }
  delete(pipeline: Pipeline): void {
    this.pipelineService
      .delete(pipeline.id)
      .then(() => {
        this.pipelines = this.pipelines.filter(h => h !== pipeline);
        if (this.selectedPipeline === pipeline) { this.selectedPipeline = null; }
      });
  }
  ngOnInit(): void {
    this.getPipelines();
  }
  onSelect(pipeline: Pipeline): void {
    this.selectedPipeline = pipeline;
  }
  gotoDetail(): void {
    this.router.navigate(['/pipeline-detail', this.selectedPipeline.id]);
  }
}

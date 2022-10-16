import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Pipeline }        from './pipeline';
import { PipelineService } from './pipeline.service';
@Component({
  moduleId: module.id,
  selector: 'my-pipeline-detail',
  templateUrl: 'pipeline-detail.component.html',
  styleUrls: [ 'pipeline-detail.component.css' ]
})
export class PipelineDetailComponent implements OnInit {
  pipeline: Pipeline;
  constructor(
    private pipelineService: PipelineService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.pipelineService.getPipeline(+params['id']))
      .subscribe(pipeline => this.pipeline = pipeline);
  }
  save(): void {
    this.pipelineService.update(this.pipeline)
      .then(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
}

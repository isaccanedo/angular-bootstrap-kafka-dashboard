"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var pipeline_service_1 = require('../pipelines/pipeline.service');
var JobsComponent = (function () {
    function JobsComponent(pipelineService) {
        this.pipelineService = pipelineService;
        this.pipelines = [];
    }
    JobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pipelineService.getPipelines()
            .then(function (pipelines) { return _this.pipelines = pipelines.slice(1, 5); });
    };
    JobsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-jobs',
            templateUrl: 'jobs.component.html',
            styleUrls: ['jobs.component.css']
        }), 
        __metadata('design:paramtypes', [pipeline_service_1.PipelineService])
    ], JobsComponent);
    return JobsComponent;
}());
exports.JobsComponent = JobsComponent;
//# sourceMappingURL=jobs.component.js.map
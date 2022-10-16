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
var router_1 = require('@angular/router');
var pipeline_service_1 = require('./pipeline.service');
var PipelinesComponent = (function () {
    function PipelinesComponent(pipelineService, router) {
        this.pipelineService = pipelineService;
        this.router = router;
        this.filterargs = { name: 'Search...' };
    }
    PipelinesComponent.prototype.getPipelines = function () {
        var _this = this;
        this.pipelineService
            .getPipelines()
            .then(function (pipelines) { return _this.pipelines = pipelines; });
    };
    PipelinesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.pipelineService.create(name)
            .then(function (pipeline) {
            _this.pipelines.push(pipeline);
            _this.selectedPipeline = null;
        });
    };
    PipelinesComponent.prototype.delete = function (pipeline) {
        var _this = this;
        this.pipelineService
            .delete(pipeline.id)
            .then(function () {
            _this.pipelines = _this.pipelines.filter(function (h) { return h !== pipeline; });
            if (_this.selectedPipeline === pipeline) {
                _this.selectedPipeline = null;
            }
        });
    };
    PipelinesComponent.prototype.ngOnInit = function () {
        this.getPipelines();
    };
    PipelinesComponent.prototype.onSelect = function (pipeline) {
        this.selectedPipeline = pipeline;
    };
    PipelinesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/pipeline-detail', this.selectedPipeline.id]);
    };
    PipelinesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-pipelines',
            templateUrl: 'pipelines.component.html',
            styleUrls: ['pipelines.component.css']
        }), 
        __metadata('design:paramtypes', [pipeline_service_1.PipelineService, router_1.Router])
    ], PipelinesComponent);
    return PipelinesComponent;
}());
exports.PipelinesComponent = PipelinesComponent;
//# sourceMappingURL=pipelines.component.js.map
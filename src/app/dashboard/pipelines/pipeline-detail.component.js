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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var pipeline_service_1 = require('./pipeline.service');
var PipelineDetailComponent = (function () {
    function PipelineDetailComponent(pipelineService, route, location) {
        this.pipelineService = pipelineService;
        this.route = route;
        this.location = location;
    }
    PipelineDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.pipelineService.getPipeline(+params['id']); })
            .subscribe(function (pipeline) { return _this.pipeline = pipeline; });
    };
    PipelineDetailComponent.prototype.save = function () {
        var _this = this;
        this.pipelineService.update(this.pipeline)
            .then(function () { return _this.goBack(); });
    };
    PipelineDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PipelineDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-pipeline-detail',
            templateUrl: 'pipeline-detail.component.html',
            styleUrls: ['pipeline-detail.component.css']
        }), 
        __metadata('design:paramtypes', [pipeline_service_1.PipelineService, router_1.ActivatedRoute, common_1.Location])
    ], PipelineDetailComponent);
    return PipelineDetailComponent;
}());
exports.PipelineDetailComponent = PipelineDetailComponent;
//# sourceMappingURL=pipeline-detail.component.js.map
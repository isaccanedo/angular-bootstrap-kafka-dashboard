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
var dashboard_component_1 = require('./dashboard/dashboard.component');
var dashboard_pipeline_component_1 = require('./dashboard/pipelines/dashboard-pipeline.component');
var pipelines_component_1 = require("./dashboard/pipelines/pipelines.component");
var pipeline_detail_component_1 = require('./dashboard/pipelines/pipeline-detail.component');
var jobs_component_1 = require("./dashboard/jobs/jobs.component");
var sources_component_1 = require("./dashboard/sources/sources.component");
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'dashboard-pipelines', component: dashboard_pipeline_component_1.DashboardPipelinesComponent },
    { path: 'pipelines', component: pipelines_component_1.PipelinesComponent },
    { path: 'pipeline-detail/:id', component: pipeline_detail_component_1.PipelineDetailComponent },
    { path: 'jobs', component: jobs_component_1.JobsComponent },
    { path: 'sources', component: sources_component_1.SourcesComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map
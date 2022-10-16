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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./app-routing.module');
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_pipeline_service_1 = require('./dashboard/pipelines/in-memory-data-pipeline.service');
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var dashboard_pipeline_component_1 = require('./dashboard/pipelines/dashboard-pipeline.component');
var pipelines_component_1 = require('./dashboard/pipelines/pipelines.component');
var jobs_component_1 = require("./dashboard/jobs/jobs.component");
var sources_component_1 = require("./dashboard/sources/sources.component");
var pipeline_service_1 = require('./dashboard/pipelines/pipeline.service');
var pipeline_detail_component_1 = require("./dashboard/pipelines/pipeline-detail.component");
var searchpipe_component_1 = require("./dashboard/pipelines/searchpipe.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_pipeline_service_1.InMemoryDataServicePipeline),
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                dashboard_pipeline_component_1.DashboardPipelinesComponent,
                pipelines_component_1.PipelinesComponent,
                pipeline_detail_component_1.PipelineDetailComponent,
                jobs_component_1.JobsComponent,
                sources_component_1.SourcesComponent,
                searchpipe_component_1.SearchPipe
            ],
            providers: [
                pipeline_service_1.PipelineService,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
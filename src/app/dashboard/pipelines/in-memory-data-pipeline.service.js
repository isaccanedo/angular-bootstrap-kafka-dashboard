// TODO: these domains should be moved to domain.config.json property file so it can read and save changes permamently to this file.
"use strict";
var InMemoryDataServicePipeline = (function () {
    function InMemoryDataServicePipeline() {
    }
    InMemoryDataServicePipeline.prototype.createDb = function () {
        var pipelines = [
            { id: 1, name: 'Store Location', active: true, updated: -1 },
            { id: 2, name: 'Product', active: false, updated: -1 },
            { id: 3, name: 'Product Range', active: false, updated: -1 },
            { id: 4, name: 'Share Of Wallet', active: false, updated: -1 },
            { id: 5, name: 'Purchases', active: false, updated: -1 },
            { id: 6, name: 'Customer Profile', active: false, updated: -1 },
            { id: 7, name: 'Nectar', active: false, updated: -1 },
            { id: 8, name: 'Pricing and Promotions', active: false, updated: -1 },
            { id: 9, name: 'Offers', active: false, updated: -1 },
            { id: 10, name: 'Shrink and Waste', active: false, updated: -1 },
            { id: 11, name: 'Response', active: false, updated: -1 },
            { id: 12, name: 'Coupon', active: false, updated: -1 },
            { id: 13, name: 'Campaign', active: false, updated: -1 },
            { id: 14, name: 'GOL', active: false, updated: -1 },
            { id: 15, name: 'Planograms', active: false, updated: -1 }
        ];
        return { pipelines: pipelines };
    };
    return InMemoryDataServicePipeline;
}());
exports.InMemoryDataServicePipeline = InMemoryDataServicePipeline;
//# sourceMappingURL=in-memory-data-pipeline.service.js.map
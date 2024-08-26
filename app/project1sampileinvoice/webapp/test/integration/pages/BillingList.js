sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.mani.chand.project1sampileinvoice',
            componentId: 'BillingList',
            contextPath: '/Billing'
        },
        CustomPageDefinitions
    );
});
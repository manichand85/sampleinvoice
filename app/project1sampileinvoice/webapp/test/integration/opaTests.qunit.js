sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/mani/chand/project1sampileinvoice/test/integration/FirstJourney',
		'com/mani/chand/project1sampileinvoice/test/integration/pages/BillingList',
		'com/mani/chand/project1sampileinvoice/test/integration/pages/BillingObjectPage',
		'com/mani/chand/project1sampileinvoice/test/integration/pages/BillingItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, BillingList, BillingObjectPage, BillingItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/mani/chand/project1sampileinvoice') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBillingList: BillingList,
					onTheBillingObjectPage: BillingObjectPage,
					onTheBillingItemsObjectPage: BillingItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);
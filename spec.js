const main = require('./Pages/mainpage');
const aus = require('./Pages/australiapage');

describe ('Quick Test to get to Country Info', function(){
    it ('should open Country Information main page', async function(){
        browser.ignoreSynchronization = true;
        await main.get();
        await main.clickInternationalTravelLink();
        await main.clickCountryInformationLink();
        console.log (await browser.getTitle());
        })
    it ('should pull up Australia when searched for', async function(){
        await main.enterCountryNameInSearch();
        expect(await browser.getTitle()).toBe("Australia International Travel Information");

    })
    it('should open the external site modal when ePassport link clicked', async function(){
        await aus.clickEntryExitandVisaRequirements();
        await aus.clickEtaLink();
        await browser.sleep(1000);

    })
}
)
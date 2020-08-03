var Mainpage = function(){

    const internationalTravel = element(by.linkText('International Travel'));
    const countryInformation = element(by.linkText('Country Information'));
    const countryTextbox = element(by.id('International-Travel-Country-Information-Pages'));
    const countrySearchButton = element(by.className('fa fa-search searchbtn'));
    let countryName = "Australia";

    this.get = async function(){
        await browser.get('https://travel.state.gov/content/travel.html')
    }

    this.clickInternationalTravelLink = async function (){
        await internationalTravel.click();
        await countryInformation.isPresent();
    }

    this.clickCountryInformationLink = async function (){
        await countryInformation.click();
    }

    this.enterCountryNameInSearch = async function (){
        await countryTextbox.sendKeys(countryName);
        await browser.sleep(750);
        await countrySearchButton.click();
    }


}

module.exports = new Mainpage();

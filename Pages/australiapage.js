var australiapage = function(){

    const entryExitAndVisa = element(by.linkText('Entry, Exit and Visa Requirements'));
    const etaLink = element(by.linkText('(ETA)'));
    const externalLinkModal = element(by.className('modal-dialog'));

    this.clickEntryExitandVisaRequirements = async function (){
        await entryExitAndVisa.click();
        await etaLink.isPresent();
    }

    this.clickEtaLink = async function (){
        await etaLink.click();
        await externalLinkModal.isPresent();
    }

}

module.exports = new australiapage();

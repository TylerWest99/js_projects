//GVSU auto self assessment program 
//says no to all questions and submits
//please use responsibly
//
//No to campus version

const {Builder, By, Key, util} = require("selenium-webdriver");
async function main(){
    let driver = await new Builder().forBrowser("chrome").build();
    //gvsu pw and username
    let gvUsername = "westty";
    let gvPw = "tylerw51Rebel5199";
    let url = "https://www.gvsu.edu/hro/selfassessment-login.htm";
    async function wait2s() {
        let p;
        let promise = new Promise(function (resolve, reject) {
            setTimeout(() => resolve("Done"), 2000);
        });
        p = await promise;
    }
    //goes to website
    await driver.get(url);
    //first page (student login page)
    //gets boxes
    let usernameBox = await driver.findElement(By.name("username"));
    let pwBox = await driver.findElement(By.name("password"));
    //let submitBox = await driver.findElement(By.className("btn btn-primary"));
    //sets boxes values
    usernameBox.sendKeys(gvUsername);
    pwBox.sendKeys(gvPw,Key.ENTER);
    //submitBox.click();

    await wait2s();
    url = await driver.getCurrentUrl();
    //checks what page is 
    
    if(url === "https://www.gvsu.edu/hro/selfassessment-view.htm?entryId=8EF1B625-06AE-1DB2-A801AE72208405F3"){
       let new_assessment = await driver.findElement(By.css("#cms-content > p.selfassessment-nav > a.btn.btn-inverse"));
        new_assessment.click();
        await wait2s();
        url = await driver.getCurrentUrl();
    }
    
    //for all questions below there are two objects per question with same name other than the ending
    //type Yes or No on it to select it that way

    //actual assessment page
    //selection questions
    //tested in last thirty days (NO)
    let testBoxYes = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(2) > label > select > option:nth-child(2)"));
    let testBoxNo = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(2) > label > select > option:nth-child(3)"));
    testBoxNo.click();
    //exposure to virus
    let virusExposureBoxYes = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(4) > label > select > option:nth-child(2)"));
    let virusExposureBoxNo = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(4) > label > select > option:nth-child(3)"));
    virusExposureBoxNo.click();
    //be at gvsu campus today
    let campusBoxYes = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(6) > label > select > option:nth-child(2)"));
    let campusBoxNo = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(6) > label > select > option:nth-child(3)"));
    campusBoxNo.click();
    //returned from outside michigan
    let michBoxYes = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(7) > label > select > option:nth-child(2)"));
    let michBoxNo = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(7) > label > select > option:nth-child(3)"));
    michBoxNo.click();
    

    //yes or no questions
    //template
    //let noseBoxYes = await driver.findElement(By.css(""));
    //let noseBoxNo = await driver.findElement(By.css(""));
    //chills 
    let chillBoxYes = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(10) > span > label:nth-child(1) > input[type=radio]"));
    let chillBoxNo = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(10) > span > label:nth-child(2) > input[type=radio]"))
    chillBoxNo.click();
    //runny nose
    let noseBoxYes = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(11) > span > label:nth-child(1) > input[type=radio]"));
    let noseBoxNo = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(11) > span > label:nth-child(2) > input[type=radio]"));
    noseBoxNo.click();
    //cough
    let coughBoxYes = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(12) > span > label:nth-child(1) > input[type=radio]"));
    let coughBoxNo = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(12) > span > label:nth-child(2) > input[type=radio]"));
    coughBoxNo.click();
    //nausea or diarrhea
    let sickBoxYes = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(13) > span > label:nth-child(1) > input[type=radio]"));
    let sickBoxNo = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(13) > span > label:nth-child(2) > input[type=radio]"));
    sickBoxNo.click();
    //tired
    let tiredBoxYes = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(14) > span > label:nth-child(1) > input[type=radio]"));
    let tiredBoxNo = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(14) > span > label:nth-child(2) > input[type=radio]"));
    tiredBoxNo.click();
    //fever
    let feverBoxYes = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(15) > span > label:nth-child(1) > input[type=radio]"));
    let feverBoxNo = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(15) > span > label:nth-child(2) > input[type=radio]"));
    feverBoxNo.click();
    //loss of taste or smell
    let lossBoxYes = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(16) > span > label:nth-child(1) > input[type=radio]"));
    let lossBoxNo = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(16) > span > label:nth-child(2) > input[type=radio]"));
    lossBoxNo.click();
    //muscle aches
    let musBoxYes = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(17) > span > label:nth-child(1) > input[type=radio]"));
    let musBoxNo = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(17) > span > label:nth-child(2) > input[type=radio]"));
    musBoxNo.click();
    //breath shortness
    let breathBoxYes = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(18) > span > label:nth-child(1) > input[type=radio]"));
    let breathBoxNo = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(18) > span > label:nth-child(2) > input[type=radio]"));
    breathBoxNo.click();
    //sore throat
    let throatBoxYes = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(19) > span > label:nth-child(1) > input[type=radio]"));
    let throatBoxNo = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(4) > p:nth-child(19) > span > label:nth-child(2) > input[type=radio]"));
    throatBoxNo.click();

    //confirmation box
    let confirmationBox = await driver.findElement(By.css("#cms-content > form > fieldset:nth-child(5) > p > label > input[type=checkbox]"));
    confirmationBox.click();

    //submit box
    let submitBox = await driver.findElement(By.css("#cms-content > form > p:nth-child(6) > button"));
    submitBox.click();
}
main();

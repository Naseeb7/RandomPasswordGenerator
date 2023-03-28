class Password {
    constructor() {
        this.pass = ""
        this.alphabet = "abcdefghijklmnopqrstuvwxyz"
        this.num = "1234567890"
        this.char = "!@#$%*"
    }
    static shuffle(password) {
        let a = password.split(""),
            n = a.length;

        for (let i = n - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");
    }
    generatestrongpassword(len) {
            for (let i = 0; i < len; i++) {
                while (this.pass.length < len) {
                    this.pass += this.alphabet[Math.floor(Math.random() * this.alphabet.length)].toUpperCase()
                    this.pass += this.num[Math.floor(Math.random() * this.num.length)]
                    this.pass += this.alphabet[Math.floor(Math.random() * this.alphabet.length)]
                    this.pass += this.char[Math.floor(Math.random() * this.char.length)]
                }
                this.pass = this.pass.substr(0, len)
                return Password.shuffle(this.pass)
            }
        }
    generatemoderatepassword(len) {
            for (let i = 0; i < len; i++) {
                while (this.pass.length < len) {
                    this.pass += this.alphabet[Math.floor(Math.random() * this.alphabet.length)].toUpperCase()
                    this.pass += this.num[Math.floor(Math.random() * this.num.length)]
                    this.pass += this.alphabet[Math.floor(Math.random() * this.alphabet.length)]
                }
                this.pass = this.pass.substr(0, len)
                return Password.shuffle(this.pass)
            }
    }
    generateweakpassword(len) {
            for (let i = 0; i < len; i++) {
                while (this.pass.length < len) {
                    this.pass += this.num[Math.floor(Math.random() * this.num.length)]
                    this.pass += this.alphabet[Math.floor(Math.random() * this.alphabet.length)]
                }
                this.pass = this.pass.substr(0, len)
                return Password.shuffle(this.pass)
            }
    }
    generatefunnypassword() {
        let funnyarr = [` password`, ` ineedapassword`, ` changeme11`, ` secret`, ` iamforgetful`, ` newpassword`, ` IamACompleteIdiot`, ` nothing`, ` nothingagain`, ` iforgot`, ` whydoialwaysforget`, ` qwerty`, ` asdf`, ` user`, ` YouWontGuessThisOne`, ` PasswordShmashword`, ` youmoron`, ` doubleclick`, ` iamnottellingyoumypw`, ` masterpassword`, ` yetanotherpassword`, ` nomorepasswords`, ` password123`, ` myonlypassword`, ` cantremember`, ` dontaskdonttell`, ` memorysucks`, ` earlyalzheimers`, ` passwordforoldpeople`, `FBISurveillanceVan`, ` Pretty_Fly_For_A_Wi-Fi`, ` IPronounceUManAndWifi`, ` IdentityTheftForFree`, ` It_burns_when_IP`, ` Troy_and_abed_in_the_modem`, ` TheLANBeforeTime`, ` ImUnderYourBed`, ` WuTangLAN`, ` WIFightTheInevitable`, ` SkynetGlobalDefenseNetwork`, ` Bill_Wi_The_Science_Fi`, ` ALannisterAlwaysSurfsTheNet`, ` FriendlyNeighborhoodSpiderLAN`, ` ClickHereforViruses`, ` MySonIsAHacker`, ` TellMyWifiLoveHer`, ` AllUrWifiRBelongToUs`, ` ChtulhuIsMyBitch`, ` MomUsesThis1`, ` ConnectAndDie`, ` YoureDoneNow`, ` TopSecretNetwork`, ` PasswordIsPassword`, ` ComeAndCleanUpMyHouse`, ` WiFi10$PerMinute`, ` DontEvenTryIt`, ` Anonymouse`, ` RedHatHacker`, ` GetOffMyLawnYankee`, ` I_Can_See_Your_Pixels`, ` HeyYou`, ` CrazyCatLady`, ` SayMyName`, ` BondageClub`, ` HaHaNextTimeLockYourRouter`, ` HackersConference`, ` IKilledAManOnce`, ` GetYourOwnWiFiLosers`, ` TheBeavisAndButtheadResidence`, ` DavidCameron`, ` TheMysteryVan`, ` PaperAirplanes`, ` IHatePeopleWithAccents`, ` ClickToDonate`, ` IRSBackgroundCheck`, ` ZombieWedding`, ` YourHomeIsBugged`, ` TheyAreWatching`, ` NSAPhoneTapVan`, ` NoFreeInternetHereKeepLooking`, ` IfUBuildIt`, ` NoCreepyClownsHereHaha`, ` ZodiacLetters`, ` MrLecterLookingToHaveAFriendforDinner`, ` 99_Problems_But_WIFI_Aint1`, ` ICanHazWireless`, ` LookMaNoWires`, ` YourMusicIsAnnoying`, ` ShutYourDogUpAlready`, ` YouLostYourConnection`, ` VirusWiFi`, ` PorqueFi`, ` WhyFiWhyNot`, ` ToFiOrNotToFi`, ` StopSnooping`, ` TheInternetIsAssur`, ` ICanHearYouSnoreFromOverHere`, ` PleaseUseMe`, ` TakeBackTheEmpire`, ` 404NetworkUnavaillable`, ` ICanReadYourEmails`, ` LANofMilkAndHoney`, ` LANDownUnder`, ` ThePromisedLAN`, ` HugsForDrugs`, ` BillNyeTheRussianSpy`, ` TheFastAndTheCurious`, ` AskYoGirlAboutMe`, ` InternetNotUploaded`, ` AsFastAsInternetExplorer`, ` HairyPoppins`, ` SoyMilkBroflakes`, ` ToxicMacho`, ` OldHaciendaJefes`, ` TheBigKahuna`, ` BeenThereDoneThat`, ` Loading…`, ` NameAlreadyInUse`, ` Searching…`, ` NetworkNotFound…`, ` UmbrellaCorporation`, ` UDontNeedPantsfortheVictoryDance`, ` TheyLaughedAtMeSoIKilledThem`, ` Viruses_But_YOLO`, ` MalwareInside`, ` TheRussianGovernment`,]
        for (let i = 0; i < funnyarr.length; i++) {
            this.pass = funnyarr[Math.floor(Math.random() * funnyarr.length)]
        }
        return this.pass
    }
}
let Enteredvalue = () => {
    val = document.getElementsByName("passwordtype")
    for (let i = 0; i < val.length; i++) {
        if (val[i].checked) {
            let value = val[i].value
            return value
        }
    }
}
typesubmit.onclick = (e) => {
    e.preventDefault()
    let alertid=document.getElementById("alertid")
    alertid.innerHTML=''
    Enteredvalue()
    let lengthpass = document.getElementById("length").value
    // console.log(typeof lengthpass)
    //Printing the password according to value
    let password = document.getElementById("password")
    let p = new Password()
    if (lengthpass.length >= 1 && lengthpass.length<=2) {
        if (Enteredvalue() == "strong") { 
            if(parseInt(lengthpass)>=8){
            password.innerHTML = p.generatestrongpassword(lengthpass)
            }
            else{
                alertid.innerHTML="The length should be more than 8!!"
                alertid.style.color="red"
            setTimeout(() => {
                alertid.innerHTML=""
            }, 3000);
            }
        }
        else if (Enteredvalue() == "moderate") {
            if(parseInt(lengthpass)>=8){
            password.innerHTML = p.generatemoderatepassword(lengthpass)
            }
            else{
                alertid.innerHTML="The length should be more than 8!!"
                alertid.style.color="red"
            setTimeout(() => {
                alertid.innerHTML=""
            }, 3000);
            }
        }
        else if (Enteredvalue() == "weak") {
            if(parseInt(lengthpass)>=8){
            password.innerHTML = p.generateweakpassword(lengthpass)
            }
            else{
                alertid.innerHTML="The length should be more than 8!!"
                alertid.style.color="red"
            setTimeout(() => {
                alertid.innerHTML=""
            }, 3000);
            }
        }
        else if (Enteredvalue() == "funny") {
            password.innerHTML = p.generatefunnypassword()
        }
        else {
            alertid.innerHTML="Select a type please!!"
            alertid.style.color="red"
            setTimeout(() => {
                alertid.innerHTML=""
            }, 3000);
        }
    }
    else if (lengthpass.length == 0 && Enteredvalue() == "funny") {
        password.innerHTML = p.generatefunnypassword()
    }
    else {
        alertid.innerHTML="Enter length of password please!!"
        alertid.style.color="red"
            setTimeout(() => {
                alertid.innerHTML=""
            }, 3000);
    }
    
}
let copytext=()=>{
    let generated=document.getElementById("password").innerHTML
    // console.log( generated)
    let alertid=document.getElementById("alertid")
    if(generated.length==0){
        alertid.innerHTML="Nothing to copy!!"
        alertid.style.color="#234E70"
            setTimeout(() => {
                alertid.innerHTML=""
            }, 3000);
    }
    else{
    navigator.clipboard.writeText(generated)
    alertid.innerHTML="Text Copied"
        alertid.style.color="#234E70"
            setTimeout(() => {
                alertid.innerHTML=""
            }, 3000);
    }
}


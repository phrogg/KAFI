// default vals
var defaultText = "Sehr geehrter Herr/Frau %verk%,\n\nIch interessiere mich für %ware%. Und wollte fragen \n\nLiebe Grüße,\n%kauf%";

// parse the elements to extract the necessary things
var verk = document.getElementsByClassName("text-bold text-bigger text-force-linebreak")[0].firstElementChild.innerHTML.replace("\n                                        ","");
var ware = document.getElementById("viewad-title").innerHTML.replace("\n                    ","");
var kauf = document.getElementsByClassName("formcontrol viewad-contact-contactName")[0].value;
var mess = document.getElementsByClassName("viewad-contact-message");

verk = verk[0].toUpperCase() + verk.substring(1,verk.length);

var nwstyle = "margin-top: 0px; margin-bottom: 0px; height: 200px;";

// load saved text
var nwmesag = "";

function afterLoadingText() {
    // replace vars
    nwmesag = nwmesag.replace("%verk%",verk).replace("%kauf%",kauf).replace("%ware%",ware);

    // prepare msg fields
    mess[0].style = nwstyle;
    mess[1].style = nwstyle;
    mess[0].value = nwmesag;
    mess[1].value = nwmesag;
}

// load saved text
chrome.storage.sync.get(null, function (items) {
    if(items.text != undefined){
        nwmesag = items.text;
    } else {
        nwmesag = defaultText;
    }
    afterLoadingText();
});
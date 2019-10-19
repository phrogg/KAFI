var verk = document.getElementsByClassName("text-bold text-bigger text-force-linebreak")[0].firstElementChild.innerHTML.replace("\n                                        ","");
var ware = document.getElementById("viewad-title").innerHTML.replace("\n                                    ","");
var kauf = document.getElementsByClassName("formcontrol viewad-contact-contactName")[0].value;
var mess = document.getElementsByClassName("viewad-contact-message");

var nwstyle = "margin-top: 0px; margin-bottom: 0px; height: 200px;";

var nwmesag = "Sehr geehrter Herr/Frau "+verk+",\n\nIch interessiere mich für "+ware+". Und wollte fragen \n\nLiebe Grüße,\n"+kauf;

mess[0].style = nwstyle;
mess[1].style = nwstyle;

mess[0].value = nwmesag;
mess[1].value = nwmesag;

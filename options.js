// default vals
var defaultText = "Sehr geehrter Herr/Frau %verk%,\n\nIch interessiere mich für %ware%. Und wollte fragen \n\nLiebe Grüße,\n%kauf%";

//save the options
function save_options() {
    let text = document.querySelector('#text').value;
    if(text == ""){text = defaultText;} // reset text if empty
    chrome.storage.sync.set({
        text: text
    }, function () {
		var text = document.getElementById("text");
        text.className = "unsaved";
		setTimeout(function () {
            text.className = "saved"; // maybe rebuild this function
        }, 250);
    });
}

function restore_options() {
    chrome.storage.sync.get({text: defaultText}, function (items) {
        document.querySelector('#text').value = items.text;
    });
}

//load the options
document.addEventListener('DOMContentLoaded', restore_options);

document.querySelector("#text").addEventListener("change", function () {
    save_options();
}, false);
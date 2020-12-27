// Set the cache to save user's choice
let getPromptCache = localStorage.getItem("promptToggle");

// Check if iOS
let isIos = false;
isIos = navigator.userAgent.match(/iPhone|iPad|iPad/i);

if(isIos === null) {
    isIos = "desktop";
}

function createPrompt() {
    let pwaPrompt = document.querySelector(".pwaPromptContainer");

    let pwaBubbleElem = document.createElement("div");
    pwaBubbleElem.setAttribute("class", "pwaBubble");
    pwaPrompt.appendChild(pwaBubbleElem);

    let pwaPlusCont = document.createElement("div");
    pwaPlusCont.setAttribute("id", "pwaPlusCont");
    pwaPlusCont.setAttribute("class", "promptPwa");
    pwaBubbleElem.appendChild(pwaPlusCont);

    let pwaPlusBtn = document.createElement("img");
    pwaPlusBtn.setAttribute("src", "/siteImages/icons/applePlus.png");
    pwaPlusBtn.setAttribute("class", "pwaPlusIcon");
    pwaPlusCont.appendChild(pwaPlusBtn);

    let pwaTxt = document.createElement("div");
    pwaTxt.setAttribute("id", "pwaTxtCont");
    pwaTxt.setAttribute("class", "promptPwa");
    pwaTxt.innerHTML = "Install this WebApp: tap <img src=\"/siteImages/icons/appleShareBlue.png\" class=\"pwaActionIcon\"> and then Add to Home Screen. Touch window to hide."
    pwaBubbleElem.appendChild(pwaTxt);

    if(isIos == "iPad") {
        pwaPrompt.style.width = "350px";
        let width = screen.availWidth;
        console.log(width);
        if(width < 400) {
            pwaPrompt.style.width = "200px";
        }

        pwaPrompt.style.top = "45px";
        pwaPrompt.style.right = "15px";
    }
};

function removePwaPrompt() {
    let pwaPrompt = document.querySelector(".pwaBubble");
    pwaPrompt.parentNode.removeChild(pwaPrompt);

    console.log("removePwaPrompt() has been run.")
}

// User action removal of prompt
function pwaClicked() {
    removePwaPrompt();
    localStorage.setItem("promptToggle", "off");
}

window.addEventListener("load", function() {
    // Check if PWA is installed or not
    let pwaInstalled = false;
    
    if(window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone) {
        pwaInstalled = true;
    }

    if(getPromptCache !== "off" && isIos != "desktop" && pwaInstalled === false) {
        createPrompt();
    }
})
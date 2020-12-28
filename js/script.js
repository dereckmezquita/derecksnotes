// PWA Service worker registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceWorker.js').then(function () {
        console.log("Service worker registered.");
    });
};

// Lazy load images
document.addEventListener("DOMContentLoaded", function () {
    let lazyloadImages = document.querySelectorAll("img.lazy");
    let lazyloadThrottleTimeout;
    function lazyload() {
        if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }
        lazyloadThrottleTimeout = setTimeout(function () {
            let scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function (img) {
                if (img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                }
            });
            if (lazyloadImages.length == 0) {
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
    }
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});

// Scroll function arrow
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollUp').fadeIn();
        } else {
            $('.scrollUp').fadeOut();
        }
    });
});

// handle links with @href started with '#' only slows down normal animation and does a smooth scroll
$(document).on('click', 'a[href^="#"]', function (e) {
    // target element id
    var id = $(this).attr('href');
    if (id == "#") {
        var $id = $(document.body);
    } else {
        var $id = $(id);
    }
    // target element
    if ($id.length === 0) {
        return;
    }
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    // top position relative to the document
    var pos = $id.offset().top;
    // animated top scrolling
    $('body, html').animate({
        scrollTop: pos
    });
});

// navBar activation by clicking
function flexNav() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};

// Change class attribute on wrapper so that it can resize to 1000px min, want when sidebar, gone when no sidebar
(() => {
    let mainWrapper = document.querySelector(".contentWrapper");
    let sideDetect = document.querySelector(".sideBar");

    let mainW = !(mainWrapper === null),
        sideW = !(sideDetect === null);

    if (sideW && mainW) {
        mainWrapper = mainWrapper.setAttribute("class", "longContent");
    }
})();

// Code for changing styles; compatibility of browsers
(() => {
    let sBrowser, sUsrAg = navigator.userAgent;

    // The order matters here, and this may report false positives for unlisted browsers.
    if (sUsrAg.indexOf("Firefox") > -1) {
        sBrowser = "Mozilla Firefox";
        // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
    } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
        sBrowser = "Opera";
        //"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
    } else if (sUsrAg.indexOf("Trident") > -1) {
        sBrowser = "Microsoft Internet Explorer";
        // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
    } else if (sUsrAg.indexOf("Edge") > -1) {
        sBrowser = "Microsoft Edge";
        // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    } else if (sUsrAg.indexOf("Chrome") > -1) {
        sBrowser = "Google Chrome or Chromium";
        // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"

        // Styles for Chrome most users are using chrome
        // Replace the webkit blur css properties with other colours
        let frostedBackgrounds = document.querySelector(".infoBar");

        frostedBackgrounds.style.background = "rgba(255, 255, 255, 0.925)";
        frostedBackgrounds.style.border = "1px solid #CCC";
        frostedBackgrounds.style.boxShadow = "1px 1px 10px rgba(153, 153, 153, 0.5)";
    } else if (sUsrAg.indexOf("Safari") > -1) {
        sBrowser = "Apple Safari";
        // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
    } else {
        sBrowser = "unknown";
    }

    console.log("You are using: " + sBrowser);
})();

// drop caps
(() => {
    window.addEventListener("entriesLoaded", function () {
        const entries = document.querySelectorAll(".entrySummary");

        for (let entry of entries) {
            let first = entry.innerHTML.charAt(0);
            entry.innerHTML = `<span class="drop-text">${first}</span>${entry.innerHTML.substr(1)}`;
        }

        let para = document.querySelector(".writtenWrapper p");
        if (!para) {
            para = document.querySelector("article p");
        }

        if (para) {
            first = para.innerHTML.trim().charAt(0);
            const rest = para.innerHTML.trim().substr(1)
            para.innerHTML = `<span class="drop-text">${first}</span>${rest}`;
        }
    });
})();

// Clickable images
(() => {
    const oldParent = document.querySelectorAll("figure");
    const imglinks = [];

    for (let i = 0; i < oldParent.length; i++) {
        const imgs = oldParent[i].children[0];
        const figcaptions = oldParent[i].children[1];

        const imgsDataSrc = imgs.getAttribute("data-src");
        const imgsSrc = imgs.getAttribute("src");

        if (imgsDataSrc !== null) {
            imglinks.push(imgsDataSrc);
        } else {
            imglinks.push(imgsSrc);
        }

        const atag = document.createElement("a");
        atag.setAttribute("target", "_blank");
        atag.setAttribute("href", imglinks[i]);
        oldParent[i].appendChild(atag);

        imgs.remove();
        figcaptions.remove();
        atag.appendChild(imgs);
        oldParent[i].appendChild(figcaptions);
    };
})();
window.addEventListener("load", function () {
    function callPrices() {
        let req = new XMLHttpRequest();
        req.addEventListener("load", pricesLoaded);
        req.open("GET", "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,DGB,XMR&tsyms=USD");
        req.send();

        function pricesLoaded() {
            let pricesJSON = JSON.parse(this.responseText);
            let prices = pricesJSON["DISPLAY"];

            let btcNameElem = document.querySelector(".btcName");
            let btcPriceElem = document.querySelector(".btcPrice");
            let btcPctElem = document.querySelector(".btcPct");
            let btcPrice = prices["BTC"]["USD"]["PRICE"];
            let btcPct = prices["BTC"]["USD"]["CHANGEPCT24HOUR"];

            if (btcPct > 0) {
                btcPct = "+" + btcPct;
            }

            btcNameElem.innerHTML = "BTC: ";
            btcPriceElem.innerHTML = btcPrice;
            btcPctElem.innerHTML = btcPct + "%";

            if (btcPct > 0) {
                btcPctElem.style.background = "#4DD964";
            } else {
                btcPctElem.style.background = "#FF3B2F";
            }


            let dgbNameElem = document.querySelector(".dgbName");
            let dgbPriceElem = document.querySelector(".dgbPrice");
            let dgbPctElem = document.querySelector(".dgbPct");
            let dgbPrice = prices["DGB"]["USD"]["PRICE"];
            let dgbPct = prices["DGB"]["USD"]["CHANGEPCT24HOUR"];

            if (dgbPct > 0) {
                dgbPct = "+" + dgbPct;
            }

            dgbNameElem.innerHTML = "DGB: ";
            dgbPriceElem.innerHTML = dgbPrice;
            dgbPctElem.innerHTML = dgbPct + "%";

            if (dgbPct > 0) {
                dgbPctElem.style.background = "#4DD964";
            } else {
                dgbPctElem.style.background = "#FF3B2F";
            }

            let xmrNameElem = document.querySelector(".xmrName");
            let xmrPriceElem = document.querySelector(".xmrPrice");
            let xmrPctElem = document.querySelector(".xmrPct");
            let xmrPrice = prices["XMR"]["USD"]["PRICE"];
            let xmrPct = prices["XMR"]["USD"]["CHANGEPCT24HOUR"];

            if (xmrPct > 0) {
                xmrPct = "+" + xmrPct;
            }

            xmrNameElem.innerHTML = "XMR: ";
            xmrPriceElem.innerHTML = xmrPrice;
            xmrPctElem.innerHTML = xmrPct + "%";

            if (xmrPct > 0) {
                xmrPctElem.style.background = "#4DD964";
            } else {
                xmrPctElem.style.background = "#FF3B2F";
            }
        };
    }

    callPrices();

    setInterval(function () {
        callPrices();
    }, 30000)
});
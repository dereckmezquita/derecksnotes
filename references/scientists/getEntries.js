window.onload = function() {
    let req = new XMLHttpRequest();

    let mainEntries = document.querySelector(".entries");
    let sideEntries = document.querySelector(".sideEntries");
    let displayPath = "/references/scientists/displayEntry.php?entry=";

    let mainE = !(mainEntries === null),
    sideE = !(sideEntries === null);

    let formatFns = []; //Functions which should run on the entry.

    if(mainE) {
        formatFns.push(formatMain);

        mainEntries.onclick = function(e) {
            if(e.target.dataset.entry !== undefined) { //Check if target is a link (a tag) by checking if it has the property 'data-entry', as only links (a tags) have this property in the entries div
                window.location.href = displayPath + e.target.dataset.entry;
            }
        }
    }

    if(sideE) {
        formatFns.push(formatSide);

        sideEntries.onclick = function(e) {
            if(e.target.parentNode.dataset.entry !== undefined) {
                console.log("yeet");
                window.location.href = displayPath + e.target.parentNode.dataset.entry;
            }
        }
    }

    window.mainEntries = mainEntries;
    window.sideEntries = sideEntries;

    req.addEventListener("load", entriesLoaded);

    req.open("GET", "/references/scientists/getEntries.php");
    req.send();

    function entriesLoaded() {
        let entriesJSON = JSON.parse(this.responseText);
        let entries = entriesJSON["entries"]; //Entries array from entries.json


        for(let i = 0; i < entries.length; i++) { //For every entry in the entries array, create an li tag, append it to the ul, then do the same thing with an a tag.
            let entry = entries[i]; //Current entry in current iteration

            for(let fn of formatFns) {
                fn(entry);
            }
        }

        const event = new Event("entriesLoaded");
        
        window.dispatchEvent(event);
    }

    function formatMain(entry) {
        let card = document.createElement("a");
        card.setAttribute("class", "card");
        card.setAttribute("href", displayPath + entry["name"]);
        mainEntries.appendChild(card);
    
        // Spits out the slogan per article
        let entrySlogan = document.createElement("div");
        entrySlogan.innerHTML = entry["slogan"];
        entrySlogan.setAttribute("class", "entryData entrySlogan");
        card.appendChild(entrySlogan);
    
        // Sets links with display names per entry
        let link = document.createElement("div");
        link.innerHTML = entry["displayName"];
        link.setAttribute("class", "entryData entryName");
        card.appendChild(link);
    
        // Spits out the image per article
        let image = document.createElement("img");
        image.setAttribute("src", entry["image"]);
        image.setAttribute("class", "entryImg");
        card.appendChild(image);
    
        // Spits out the author of the article
        let entryAuthor = document.createElement("div");
        entryAuthor.innerHTML = entry["author"];
        entryAuthor.setAttribute("class", "entryData entryAuthor");
        card.appendChild(entryAuthor);
    
        // Spits our summaries per article
        let entrySummary = document.createElement("div");
        entrySummary.innerHTML = entry["summary"] + "..";
        entrySummary.setAttribute("class", "entryData entrySummary");
        card.appendChild(entrySummary);
    
        // Formats the dates and appends them to the entry
        let entryDate = document.createElement("div"),
            date = entry["date"];
        entryDate.innerHTML = `${date["day"]}/${date["month"]}/${date["year"]}`;
        entryDate.setAttribute("class", "entryData entryDate");
        entrySummary.appendChild(entryDate);
    }

    function formatSide(entry) {
        let sideList = document.createElement("li");
        sideList.setAttribute("class", "miniList");
        sideEntries.appendChild(sideList);

        let sideLink = document.createElement("a");
        sideLink.setAttribute("class", "miniLink");
        sideLink.setAttribute("href", displayPath + entry["name"]);
        sideList.appendChild(sideLink);

        // Formats the dates and appends them to the entry
        let entryDate = document.createElement("span"),
        date = entry["date"];
        entryDate.innerHTML = `${date["day"]}/${date["month"]}/${date["year"]}: `;
        entryDate.setAttribute("class", "miniData miniDate");
        sideLink.appendChild(entryDate);

        // Sets links with display names per entry
        let link = document.createElement("span");
        link.innerHTML = entry["displayName"];
        link.setAttribute("class", "miniData miniName");
        sideLink.appendChild(link);
    }
}
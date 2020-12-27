


let execute = document.querySelector("#make-links-bttn");

execute.addEventListener("click", () => {
    const prefix = document.querySelector("#link-prefix").value;
    const suffix = document.querySelector("#link-suffix").value;
    const names = document.querySelector("#link-list").value.split(",");
    let output = document.querySelector("#link-output");
    (() => {
        if(!prefix || !suffix || !names) {
            return alert("Please enter the required data.");
        }
    })()
    for(let i = 0; i < names.length; i++) {
        output.value += (prefix + names[i] + suffix + "\n");
    }
});



// name1,name2,name3
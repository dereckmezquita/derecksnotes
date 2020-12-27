let spacerButton = document.querySelector(".spacer-button");

spacerButton.addEventListener("click", function() {
    let dnaInput = document.querySelector(".spacer-input").value;
    let uppercaseInput = document.querySelector(".spacer-uppercase").checked;
    let spacerNumber = parseInt(document.querySelector(".spacer-number").value);

    function spaceStr(str, n) {
        let input = [], start = 0;
        while (start < str.length) {
            input.push(str.slice(start, start + n));
            start += n;
        }
        let output = input.join(" ");
        
        if(uppercaseInput !== true) {
            document.querySelector(".spacer-output").value = output;
        } else {
            document.querySelector(".spacer-output").value = output.toUpperCase();
        }
    }
    spaceStr(dnaInput, spacerNumber); 
});
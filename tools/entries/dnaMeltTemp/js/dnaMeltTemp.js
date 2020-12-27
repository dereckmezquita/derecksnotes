const execute = document.querySelector(".calc-button");

execute.addEventListener("click", function () {
    let dnaSeq = document.querySelector(".dna-seq").value.replace(/\s/g, "").toUpperCase();
    let dnaNums = document.querySelector(".dna-nums").value;
    dnaNums = dnaNums.split(", ");
    let a, t, c, g;

    // Check if DNA sequence is only composed of A, T, G, C
    let regex = /[^ATCG]/;
    let match = regex.test(dnaSeq);

    if (!dnaSeq) {
        dnaSeq = null;
    }

    if(dnaNums.length !== 4) {
        dnaNums = null;
    }

    if (dnaSeq === null && dnaNums === null) {
        return alert("Please enter a sequence or DNA composition.");
    } else if (dnaSeq !== null && dnaNums !== null) {
        return alert("Please enter either a DNA sequence, or a DNA composition array, not both.")
    } else if (dnaSeq !== null && dnaNums === null && match) {
        return alert("Please enter a DNA sequence or remove unaccepted characters; all other characters but A, T, C, G, are unacceptable.")
    } else if (dnaSeq !== null && dnaNums === null && !match) {
        a = (dnaSeq.match(/A/g) || []).length;
        t = (dnaSeq.match(/T/g) || []).length;
        c = (dnaSeq.match(/C/g) || []).length;
        g = (dnaSeq.match(/G/g) || []).length;

        // Print seq length
        document.querySelector(".dna-seq-length").innerHTML = a + t + c + g;

        // Print the number of each base in the sequence
        document.querySelector(".a-num-result").innerHTML = a;
        document.querySelector(".t-num-result").innerHTML = t;
        document.querySelector(".c-num-result").innerHTML = c;
        document.querySelector(".g-num-result").innerHTML = g;

        document.querySelector(".gc-result").innerHTML = ((g + c)/(a + t + c + g) * 100).toFixed(2) + "%";

        if (dnaSeq.length <= 13) {
            document.querySelector(".tm-result").innerHTML = ((a + t) * 2 + (g + c) * 4).toFixed(2) + "&deg;C";
        } else if (dnaSeq.length >= 14) {
            document.querySelector(".tm-result").innerHTML = (64.9 + 41 * (g + c - 16.4)/(a + t + g + c)).toFixed(2) + "&deg;C";
        }
    } else if (dnaSeq === null && dnaNums !== null) {
        a = parseInt(dnaNums[0]);
        t = parseInt(dnaNums[1]);
        c = parseInt(dnaNums[2]);
        g = parseInt(dnaNums[3]);

        let dnaSum = a + t + c + g;

        document.querySelector(".gc-result").innerHTML = ((g + c)/(dnaSum) * 100).toFixed(2) + "%";

        if (dnaSum <= 13) {
            document.querySelector(".tm-result").innerHTML = ((a + t) * 2 + (g + c) * 4).toFixed(2) + "&deg;C";
        } else if (dnaSum >= 14) {
            document.querySelector(".tm-result").innerHTML = (64.9 + 41 * (g + c - 16.4)/(a + t + g + c)).toFixed(2) + "&deg;C";
        }
    }
})
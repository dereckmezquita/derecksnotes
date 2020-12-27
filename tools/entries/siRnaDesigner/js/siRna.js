// ATGCATGTCTAAGTA

let button = document.getElementById('format_targetSeq');

function reverseString(string) {
    let array = string.split("");
    return (array.reverse()).join("");
}

function dna2rna(string) {
    let newString = "";

    for(let i = 0; i<string.length; i++) {
        if(string.charAt(i) == "T") {
            newString += "U";
        } else {
            newString += string.charAt(i);
        }
    }

    return newString;
}

function sense2antisense(string) {
    let newString = "";

    for(let i = 0; i<string.length; i++) {
        if(string.charAt(i) == "A") {
            newString += "U"
        } else if(string.charAt(i) == "U") {
            newString += "A"
        }
        else if(string.charAt(i) == "C") {
            newString += "G"
        }
        else if(string.charAt(i) == "G") {
            newString += "C"
        } else {
            newString += string.charAt(i);
        }
    }

    return reverseString(newString);
}

button.addEventListener("click", function() {
    let promoter = (document.getElementById('promoter').value).toUpperCase();
    let targetSeq = (document.getElementById('targetSeq').value).toUpperCase();
    let loopSeq = (document.getElementById('loopSeq').value).toUpperCase();

    let rna_promoter = document.getElementById('rna_promoter');
    let sensePass = document.getElementById('sensePass');
    let rna_loopSeq = document.getElementById('rna_loopSeq');
    let antisenseGuide = document.getElementById('antisenseGuide');
    
    if(targetSeq.length < 15) {
        return alert("Too short, please try again with sequences < 15 nt!");
    }

    rna_promoter.value = dna2rna(promoter);
    sensePass.value = dna2rna(targetSeq);
    rna_loopSeq.value = dna2rna(loopSeq);
    antisenseGuide.value = sense2antisense(dna2rna(targetSeq));

    document.getElementById("rna_promoter").removeAttribute('disabled');
    document.getElementById("sensePass").removeAttribute('disabled');
    document.getElementById("rna_loopSeq").removeAttribute('disabled');
    document.getElementById("antisenseGuide").removeAttribute('disabled');
});

/*

A U
U A
C G
G C

ATGCATGTCTAAGTA
UACUUAGACAUGCAU
UUCUUUGUCUUGCUU

*/
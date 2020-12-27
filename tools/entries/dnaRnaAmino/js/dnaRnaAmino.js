let execute = document.querySelector(".calc-button");

function parseString(str, n) {
    str = str.replace(/\s/g, '');
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (i % n == 0 && i != 0) {
            newStr += ' ';
        }
        newStr += str.charAt(i);
    }
    return newStr.split(' ');
}

// DNA to amino acids conversions coding strand of DNA used
let test = codons.rna.a[0];
let codons = {
    rna: {
        a: ["GCU", "GCC", "GCA", "GCG"],
        r: ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"],
        n: ["AAU", "AAC"],
        d: ["GAU", "GAC"],
        c: ["UGU", "UGC"],
        q: ["CAA", "CAG"],
        e: ["GAA", "GAG"],
        g: ["GGU", "GGC", "GGA", "GGG"],
        h: ["CAU", "CAC"],
        i: ["AUU", "AUC", "AUA"],
        start: ["AUG"],
        l: ["UUA", "UUG", "CUU", "CUC", "CUA", "CUG"],
        k: ["AAA", "AAG"],
        m: ["AUG"],
        f: ["UUU", "UUC"],
        p: ["CCU", "CCC", "CCA", "CCG"],
        s: ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"],
        t: ["ACU", "ACC", "ACA", "ACG"],
        w: ["UGG"],
        y: ["UAU", "UAC"],
        v: ["GUU", "GUC", "GUA", "GUG"],
        stop: ["UAA", "UGA", "UAG"]
    },
    dna: {
        a: ["GCT", "GCC", "GCA", "GCG"],
        r: ["CGT", "CGC", "CGA", "CGG", "AGA", "AGG"],
        n: ["AAT", "AAC"],
        d: ["GAT", "GAC"],
        c: ["TGT", "TGC"],
        q: ["CAA", "CAG"],
        e: ["GAA", "GAG"],
        g: ["GGT", "GGC", "GGA", "GGG"],
        h: ["CAT", "CAC"],
        i: ["ATT", "ATC", "ATA"],
        start: ["ATG"],
        l: ["TTA", "TTG", "CTT", "CTC", "CTA", "CTG"],
        k: ["AAA", "AAG"],
        m: ["ATG"],
        f: ["TTT", "TTC"],
        p: ["CCT", "CCC", "CCA", "CCG"],
        s: ["TCT", "TCC", "TCA", "TCG", "AGT", "AGC"],
        t: ["ACT", "ACC", "ACA", "ACG"],
        w: ["TGG"],
        y: ["TAT", "TAC"],
        v: ["GTT", "GTC", "GTA", "GTG"],
        stop: ["TAA", "TGA", "TAG"]
    }
}

for (const prop in codons.rna) {
    console.log(`${prop} = ${codons.rna[prop]}`)
}

execute.addEventListener("click", function () {
    let dnaSeq = document.querySelector(".dna-data").value.replace(/\s/g, "").toUpperCase();
    document.querySelector(".dna-data").value = dnaSeq;

    let rnaSeq = document.querySelector(".rna-data").value.replace(/\s/g, "").toUpperCase();
    document.querySelector(".rna-data").value = rnaSeq;

    let aminoSeq = document.querySelector(".amino-data").value.replace(/\s/g, "").toUpperCase();
    document.querySelector(".amino-data").value = aminoSeq;

    // Check that data was entered
    if (dnaSeq === "") {
        dnaSeq = 0;
    }
    if (rnaSeq === "") {
        rnaSeq = 0;
    }
    if (aminoSeq === "") {
        aminoSeq = 0;
    }

    let datas = [];
    datas.push(dnaSeq, rnaSeq, aminoSeq);

    // function countInArray(array, search) {
    //     let count = 0;
    //     for (let i = 0; i < array.length; i++) {
    //         if (array[i] === search) {
    //             count++;
    //         }
    //     }
    //     return count;
    // }

    function countInArray(array, search) {
        return array.filter(item => item == search).length;
    }

    let count = countInArray(datas, 0);

    if (count === 3) {
        alert("Please enter at least one data type: DNA sequence, RNA sequence, or amino acid sequence to convert.")
    } else if (count === 0 || count === 1) {
        alert("Please only enter one data type");
    } else if (count === 2) {
        if (datas[0] !== 0) {
            console.log("DNA data was entered.");
            let dna = datas[0];

            // Check that it is only DNA data
            let regex = /[^ATCG]/;
            let match = regex.test(dna);
            if (match) {
                alert("Please enter a coding DNA sequence or remove unaccepted characters; all other characters but A, T, C, G, are unacceptable.");
            } else {
                // Convert DNA to RNA
                let rnaOut = dna.replace(/T/g, "U");
                document.querySelector(".rna-data").value = rnaOut;

                // Convert DNA to amino acids
                let dnaArr = parseString(dna, 3);
                console.log(dnaArr);


            }
        } else if (datas[1] !== 0) {
            let data = datas[1];

            // Check that it is only RNA data
            let regex = /[^AUCG]/;
            let match = regex.test(data);
            if (match) {
                alert("Please enter a messenger RNA sequence or remove unaccepted characters; all other characters but A, U, C, G, are unacceptable.");
            } else {
                let dnaOut = data.replace(/U/g, "T")
                document.querySelector(".dna-data").value = dnaOut;
            }
        } else if (datas[2] !== 0) {
            let data = datas[2];


        }
    }
});
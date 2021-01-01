// Space a string, conserve new lines, every n chars
function spaceStr(str, n) {
    output.value = ""; // Clear output on each run
    let lines = str.split("\n"); // Split into an array at the new lines; new lines become empty strings

    lines = lines.filter(l => l !== ""); // Remove new lines empty strings
    lines = lines.map(l => l.split(" ").join("")); // Split into an array of strings; join with no spacing
    
    // map creates a new modified array from the results of a given function
    lines = lines.map(l => 
        l.split("").reduce((a, e, i) => a + e + (i % n === (n - 1) ? " " : ""), "")
        // reduce executes a function over each element of an array
        // it has three main parts, accumulator, element, index
    ).join("\n\n"); // join concatenates all elements together with a given separator

    if (uppercaseInput !== true) { // leave text as is
        output.value += lines;
    } else { // uppercase text
        output.value += lines.toUpperCase();
    }
}
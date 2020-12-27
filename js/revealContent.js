window.addEventListener("load", function () {
    let coll = document.getElementsByClassName("collapsible");
    let i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let collapseContent = this.nextElementSibling;
            if (collapseContent.style.display === "block") {
                collapseContent.style.display = "none";
            } else {
                collapseContent.style.display = "block";
            }
        });
    }
})

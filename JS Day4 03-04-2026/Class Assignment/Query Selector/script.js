const heading = document.querySelector("#title");
    const para = document.querySelector(".text");
    const firstP = document.querySelector("p");
    const insideDiv = document.querySelector("div .inside");
    const multi = document.querySelector("#title, .text");

    document.querySelector("#btn").addEventListener("click", function() {
      heading.textContent = "Changed using ID";
      para.style.color = "red";
      firstP.style.fontWeight = "bold";
      insideDiv.textContent = "Changed inside div";
      multi.style.backgroundColor = "yellow";
    });
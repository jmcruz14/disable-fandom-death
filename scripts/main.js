const allList = document.querySelectorAll("li");
const allSup = document.querySelectorAll("sup");

// const toggle = document.getElementById("toggle");
// let toggleValue = false;
// toggle.addEventListener("change", (event) => {
//   toggleValue = event.target.value;
// });

function removeDaggerSymbol(
  list, 
  // toggle = true
) {
  if (list) {
    list.forEach((el) => {
      if (el.innerHTML.includes("\u{2020}")) {
        el.innerHTML = el.innerHTML.replace(
          "\u{2020}",
          '<span style="visibility: hidden">&#x2020;</span>',
        );
        // if (toggle) {
        //   el.innerHTML = el.innerHTML.replace(
        //     "\u{2020}",
        //     '<span style="visibility: hidden">&#x2020;</span>',
        //   );
        // } else {
        //   el.innerHTML = el.innerHTML.replace(
        //     /<span class="visibility: hidden">&#x2020;<\/span>/gu,
        //     "\u{2020}",
        //   );
        // }
      }
    });
  }
}

window.addEventListener("load", () => {
  removeDaggerSymbol(allList);
  removeDaggerSymbol(allSup);
});

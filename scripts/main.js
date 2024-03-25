function removeDaggerSymbol(list) {
  console.warn("attempt to make contact", list);
  if (list) {
    list.forEach((el) => {
      if (el.innerHTML.includes("\u{2020}")) {
        el.innerHTML = el.innerHTML.replace("\u{2020}", "");
      }
    });
  }
}

const allList = document.querySelectorAll("li");
const allSup = document.querySelectorAll("sup");
removeDaggerSymbol(allList);
removeDaggerSymbol(allSup);

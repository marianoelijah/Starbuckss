const selects = document.querySelectorAll("li");
const contents = document.querySelectorAll(".fav__details");



// every tab looping
selects.forEach((select) => {
  select.addEventListener("click", () => {
    removeActiveSelect();
    select.classList.add("active");
    const activeContent = document.querySelector(`#${select.id}-content`); //#$ achu-chu "gets the element"
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveSelect() {
  //loopings to remove present active
  selects.forEach((select) => {
    select.classList.remove("active");
  });
}

function removeActiveContent() {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
}
export default function createDropdown(
  base,
  elementsContainer,
  display = "block",
  clickHover = "hover"
) {
  elementsContainer.style.display = "none";

  if (clickHover.includes("hover")) {
    base.addEventListener("mouseover", () => {
      elementsContainer.style.display = display;
    });

    base.addEventListener("mouseout", () => {
      elementsContainer.style.display = "none";
    });
  }

  if (clickHover.includes("click")) {
    let isDropdown = false;

    base.addEventListener("click", () => {
      if (isDropdown) {
        elementsContainer.style.display = "none";
        isDropdown = false;
      } else {
        elementsContainer.style.display = display;
        isDropdown = true;
      }
    });
  }
}

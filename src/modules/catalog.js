import renderGoods from "./renderGoods";
import getData from "./getData";
import { categoryFilter } from "./filters";

const catalog = () => {
  const btnCatalog = document.querySelector(".catalog-button > button");
  const catalogModal = document.querySelector(".catalog");
  const catalogModalLiItems = document.querySelectorAll(".catalog li");

  let isOpen = false;

  btnCatalog.addEventListener("click", () => {
    isOpen = !isOpen;
    if (isOpen) {
      catalogModal.style.display = "block";
    } else {
      catalogModal.style.display = "";
    }
  });
  catalogModalLiItems.forEach((item) => {
    item.addEventListener("click", () => {
      const text = item.textContent;

      getData().then((data) => {
        renderGoods(categoryFilter(data, text));
      });
    });
  });
};

export default catalog;

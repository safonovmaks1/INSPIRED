import { searchConroller } from "../controller/searchController";
import { createElement } from "../utils/createElement";

export const search = createElement("div", {
	className: "search",
});

export const searchToggle = () => {
	if (search.classList.contains("search_show")) {
		search.classList.remove("search_show");
		form.reset();
	} else {
		search.classList.add("search_show");
	}
};

const container = createElement(
	"div",
	{
		className: "container",
	},
	{
		parent: search,
	}
);

const form = createElement(
	"form",
	{
		className: "search__form",
	},
	{
		parent: container,
		cb: searchConroller,
	}
);

createElement(
	"input",
	{
		className: "search__input",
		type: "search",
		name: "search",
		placeholder: "Найти...",
	},
	{ parent: form }
);

createElement(
	"button",
	{
		className: "search__btn",
		type: "submit",
		textContent: "Искать",
	},
	{
		parent: form,
	}
);

import { renderCard } from "../render/renderCard";
import { renderCart } from "../render/renderCart";
import { renderHero } from "../render/renderHero";
import { renderNavigation } from "../render/renderNavigation";
import { renderOrder } from "../render/renderOrder";
import { renderProducts } from "../render/renderProducts";
import { router } from "../utils/router";

export const searchConroller = (formSearch) => {
	formSearch.addEventListener("submit", (e) => {
		e.preventDefault();

		router.navigate(`search?value=${formSearch.search.value}`);
	});
};

export const searchPageController = (routerData) => {
	const params = {
		search: routerData.params.value,
	};

	if (routerData.params?.page) {
		params.page = routerData.params.page;
	}
	renderNavigation({ repeat: true, render: true });
	renderHero({ render: false });
	renderCard({ render: false });
	renderProducts({ title: routerData.params.value, params, render: true });
	renderCart({ render: false });
	renderOrder({ render: false });
};

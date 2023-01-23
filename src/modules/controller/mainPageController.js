import { renderCard } from "../render/renderCard";
import { renderHero } from "../render/renderHero";
import { renderNavigation } from "../render/renderNavigation";
import { renderProducts } from "../render/renderProducts";

export const mainPageController = (gender = "women") => {
	renderNavigation({ gender, render: true });
	renderHero({ gender, render: true });
	renderCard({ render: false });
	renderProducts({ title: "Новинки", params: { gender }, render: true });
};

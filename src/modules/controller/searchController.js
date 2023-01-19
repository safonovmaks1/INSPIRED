import { renderHero } from '../render/renderHero'
import { renderNavigation } from '../render/renderNavigation'
import { renderProducts } from '../render/renderProducts'
import { router } from '../utils/router'

export const searchConroller = formSearch => {
	formSearch.addEventListener('submit', e => {
		e.preventDefault()

		router.navigate(`search?value=${formSearch.search.value}`)
	})
}

export const searchPageController = routerData => {
	const params = {
		search: routerData.params.value,
	}

	if (routerData.params?.page) {
		params.page = routerData.params.page
	}
	renderNavigation('all')
	renderHero(false)
	renderProducts(routerData.params.value, params)
}

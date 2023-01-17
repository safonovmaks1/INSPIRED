import { router } from '../router'

export const searchConroller = formSearch => {
	formSearch.addEventListener('submit', e => {
		e.preventDefault()

		router.navigate(`search?value=${formSearch.search.value}`)
	})
}

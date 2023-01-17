import './index.html'
import './index.scss'

import { router } from './modules/router'

import { renderHeader } from './modules/render/renderHeader'
import { mainPage } from './modules/mainPage/mainPage'
import { womenMainPage } from './modules/mainPage/womenMainPage'
import { menMainPage } from './modules/mainPage/manMainPage'
import { renderFooter } from './modules/render/renderFooter'
import { getData } from './modules/getData'
import { API_URL, DATA } from './modules/const'
import { createCssColors } from './modules/createCssColors'
import { createElement } from './modules/createElement'

const init = async () => {
	try {
		router.on('*', () => {
			renderHeader()
			renderFooter()
		})

		DATA.navigation = await getData(`${API_URL}/api/categories`)
		DATA.colors = await getData(`${API_URL}/api/colors`)

		createCssColors(DATA.colors)

		router.on('/', () => {
			mainPage()
		})

		router.on('women', () => {
			womenMainPage()
		})

		router.on('men', () => {
			menMainPage()
		})

		router.on('search', data => {
			console.log(data.params.value)
		})

		// setTimeout(() => {
		// 	router.navigate('men')
		// }, 3000)

		// setTimeout(() => {
		// 	router.navigate('women')
		// }, 6000)
	} catch (e) {
		createElement(
			'h2',
			{
				textContent: 'Что-то пошло не так, попробуйте позже...',
			},
			{
				parent: document.querySelector('main'),
				cb(h2) {
					h2.style.textAlign = 'center'
				},
			}
		)
	} finally {
		router.resolve()
	}
}
init()

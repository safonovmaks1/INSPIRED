import './index.html'
import './index.scss'

import { router } from './modules/router'

import { renderHeader } from './modules/render/renderHeader'
import { mainPage } from './modules/mainPage/mainPage'
import { womenMainPage } from './modules/mainPage/womenMainPage'
import { menMainPage } from './modules/mainPage/manMainPage'
import { renderFooter } from './modules/render/renderFooter'

router.on('*', () => {
	renderHeader()
	renderFooter()
})

router.on('/', () => {
	mainPage()
})

router.on('women', () => {
	womenMainPage()
})

router.on('men', () => {
	menMainPage()
})

// setTimeout(() => {
// 	router.navigate('men')
// }, 3000)

// setTimeout(() => {
// 	router.navigate('women')
// }, 6000)

router.resolve()

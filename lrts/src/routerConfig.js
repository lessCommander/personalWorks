import Home from './components/home.vue'
import Book from './components/home/book/book.vue'
import List1 from './components/home/book/book-list1.vue'

import Item from './components/home/item/item.vue'
import Broadcaster from './components/home/broadcaster/broadcaster.vue'
import Active from './components/active/active.vue'
import activePage1 from './components/active/activePage1.vue'
import activePage2 from './components/active/activePage2.vue'
import activePage3 from './components/active/activePage3.vue'

var routes = [
	{
		path: '/home',
		component: Home
	},
	{
		path: '/book',
		component: Book,
		children: [
			{
				path: '/',
				component: List1
			},
			{
				path: 'list1',
				component: List1
			},
			{
				path: 'list2',
				component: List1
			},
			{
				path: 'list3',
				component: List1
			},
			{
				path: 'list4',
				component: List1
			},
			{
				path: '*',
				redirect: 'list1'
			}
		]
	},
	{
		path: '/item',
		component: Item
	},
	{
		path: '/broadcaster',
		component: Broadcaster
	},
	{
		path: '/active',
		component: Active,
		children:[
			{
				path: '/',
				component: activePage2
			},
			{
				path: 'page1',
				component: activePage1
			},
			{
				path: 'page2',
				component: activePage2
			},
			{
				path: 'page3',
				component: activePage3
			},
			{
				path: 'page4',
				redirect: '/home'
			},
			{
				path: '*',
				redirect: 'page1'
			}
		]
	},
	{
		path: '*',
		redirect: '/home'
	}
];

export default routes;
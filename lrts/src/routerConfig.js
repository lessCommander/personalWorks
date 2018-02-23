import Home from './components/home.vue'
import Book from './components/home/book/book.vue'
import List1 from './components/home/book/book-list1.vue'

import Item from './components/home/item/item.vue'
import Broadcaster from './components/home/broadcaster/broadcaster.vue'
import Active from './components/active/active.vue'

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
		component: Active
	},
	{
		path: '*',
		redirect: '/home'
	}
];

export default routes;
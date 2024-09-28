import Auth from '../components/screens/auth/Auth.jsx'
import CarDetail from '../components/screens/car-detail/CarDetail.jsx'
import Home from '../components/screens/home/Home.jsx'
import Profile from '../components/screens/profile/Profile.jsx'


export const routes = [
	{
		path: '/',
		component: Auth,
		isAuth: false
	},
	{
		path: '/home',
		component: Home,
		isAuth: true
	},
	{
		path: '/carinfo/:id',
		component: CarDetail,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	},
]
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '../components/screens/not-found/NotFound.jsx'
import { useAuth } from '../hooks/useAuth.js'

import { routes } from './routes.data.js'

const Router = () => {
	const { isAuth } = useAuth()
	
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					if (route.isAuth && !isAuth) {
						return false
					}
					
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
				  )
				})}
				
				<Route path='*' element={<NotFound/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
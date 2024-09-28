import {useContext, useEffect, useState} from 'react'
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import CarItem from "./car-item/CarItem.jsx";
import {carService} from "../../../services/car.service.js";
import {AuthContext} from "../../../providers/AuthProvider.jsx";
import {useQuery} from "@tanstack/react-query";
import Layout from "../../Layout.jsx";

function Home() {
	const [cars, setCars] = useState([])

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const data = await CarService.getAll()
	//
	// 		setCars(data)
	// 	}
	//
	// 	//fetchData()
	// }, [])

	const {data} = useQuery({
		queryKey: ["cars"],
		queryFn: ()=> carService.getAll(),
		onSuccess:()=> { setCars(data)
		debugger}
	})

	//const { user, setUser } = useContext(AuthContext)

	return (
		<Layout>
			<div>
				<h1>Cars catalog</h1>

				<div>
					{data ? (
						data?.data.map(car => <CarItem key={car.id} car={car}/>)
					) : (
						<p>There are no cars</p>
					)}
				</div>
			</div>
		</Layout>
	)
}

export default Home

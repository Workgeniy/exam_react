import {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import CarItem from '../home/car-item/CarItem'
import {carService} from "../../../services/car.service.js";
import {useQuery} from "@tanstack/react-query";
import CarFullItem from "./car-full-item/CarFullItem.jsx";

const CarDetail = () => {
	const { id } = useParams()
	const [car, setCar] = useState({})

	// useEffect(() => {
	// 	if (!id) return
	//
	// }, [id])

	const {data, isLoading} = useQuery({
		queryKey: ['car'],
		queryFn: () => carService.getById(id)
	})

	if (isLoading) return <p>Loading...</p>

	if (!data?.data) return <p>Car not found</p>

		return (
			<div>
				<Link to='/home'>Back</Link>
				<CarFullItem car={data.data} />
			</div>

		)

}

export default CarDetail

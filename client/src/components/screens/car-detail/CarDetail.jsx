import {useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {carService} from "../../../services/car.service.js";
import {useQuery} from "@tanstack/react-query";
import CarFullItem from "./car-full-item/CarFullItem.jsx";
import {useAuth} from "../../../hooks/useAuth.js";
import Cookies from "js-cookie";
import {TOKEN} from "../../../app.constans.js";

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

	const navigate = useNavigate();
	const logoutHandler = () => {
		navigate('/home/')
	}

		if (isLoading) return <p>Loading...</p>

	if (!data?.data) return <p>Car not found</p>

		return (
			<div>
				<button style={{
					width: '100px',
					height: '50px',
					fontSize: '18px',
					borderRadius: '10px',
					backgroundColor: 'grey'
				}}
					onClick={logoutHandler}>Назад</button>
				<CarFullItem car={data.data} />
			</div>

		)

}

export default CarDetail

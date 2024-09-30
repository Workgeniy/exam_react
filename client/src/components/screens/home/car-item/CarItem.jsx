import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import styles from '../Home.module.css'
import Price from './Price'

function CarItem({ car }) {

	return (
		<div key={car.id} className={styles.item}>
			<div
				className={styles.image}
				style={{
					 backgroundImage: `url(${car.image})`,
				}}>
			</div>
			<div className={styles.info}>
				<h2>{car.name}</h2>
				<Price price={car.price} />
				<Link className='btn' to={`/carinfo/${car.id}`}>
					Подробнее
				</Link>
			</div>
		</div>
	)
}

export default CarItem

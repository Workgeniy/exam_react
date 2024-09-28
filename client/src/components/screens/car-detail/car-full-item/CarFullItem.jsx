import { useState} from 'react'
import { Link } from 'react-router-dom'
import styles from '../../home/Home.module.css'
import Price from './Price'

function CarFullItem({ car }) {
	
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
				<Price price={car.price}/>
				<p>{car.info.model}</p>
				<p>{car.info.transmission}</p>
				<p>{car.info.engine}</p>
				<p>{car.info.power}</p>
				<p>{car.info.year}</p>
			</div>
		</div>
	)
}

export default CarFullItem

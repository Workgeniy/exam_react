
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
				<p><span style={{color: 'cadetblue'}}>Модель : </span>{car.info.model}</p>
				<p><span style={{color: 'cadetblue'}}>Коробка передач : </span>{car.info.transmission}</p>
				<p><span style={{color: 'cadetblue'}}>Тип двигателя : </span>{car.info.engine}</p>
				<p><span style={{color: 'cadetblue'}}>Мощность (л.с.) : </span>{car.info.power}</p>
				<p><span style={{color: 'cadetblue'}}>Год выпуска :</span> {car.info.year}</p>
				<p><span style={{color: 'cadetblue'}}>Дополнительная информация : </span>{car.info.infoText}</p>
			</div>
		</div>
	)
}

export default CarFullItem

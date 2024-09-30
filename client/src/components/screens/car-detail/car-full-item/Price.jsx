import React from 'react'

const Price = ({ price }) => {
	return (
		<p style={{color: 'red'}}>
			{new Intl.NumberFormat('ru-RU', {
				style: 'currency',
				currency: 'USD',
			}).format(price)}
		</p>
	)
}

export default React.memo(Price)

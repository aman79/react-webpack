import React from 'react';

import img from '../../assets/pizza.jpg';
import classes from './PizzaImage.css';

const PizzaImage = () => {
	return (
		<div className={classes.PizzaImage}>
			<img src={img} alt='my' className={classes.PizzaImg} />
		</div>
	);
};

export default PizzaImage;

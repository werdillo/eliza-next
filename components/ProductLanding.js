import React from 'react';
import '../assets/scss/_product-landing.scss';
import Image from 'next/image';


export default function ProductLanding(props) {
	return (
		<div className='product-landing'>
			<img src={props.img} alt='' placeholder="blur" className='-img' />
			<p className='-text'>{props.text.toUpperCase()}</p>
		</div>
	)
}
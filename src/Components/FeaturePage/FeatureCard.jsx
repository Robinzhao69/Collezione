import React from 'react'
import './FeatureCard.css'

 function FeatureCard(props) {

    return (
        <article className='feature-card'>
            <figure className='feature-img'>{props.img}</figure>
            <h2 className='feature-title'>{props.titel}</h2>
            <p className='feature-text'>{props.text}</p>
        </article>
    )
}

export default FeatureCard;
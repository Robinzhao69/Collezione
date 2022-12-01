import React from 'react'
import './MembershipCard.css'

function MembershipCard(props) {
    let cardImage = <img src={"/img/" + props.img} alt="" />
    if(props.img === undefined){
        cardImage = <img className='membership-img' src={"/img/minecraft.jpg"} alt="" />
    }

    let classes = "membership_con";
    let extraClass = props.extraClass;
    if(props.extraClass !== undefined){  
        classes += extraClass;
    }

    let buttonClass = "lid-btn";
    let extraButtonClass = props.extraButtonClass;
    if(props.extraButtonClass !==undefined){
        buttonClass += extraButtonClass
    };

    return (
        <div className='membershipCard-con'>
            <figure className='membership-img-con'>
                {cardImage}
            </figure>
            <article className={classes}>
                <div className='membership-text-con'>
                    <h2 className='membership-title'>{props.title}</h2>
                    <p className='membership-text'>{props.text}</p>
                    <ul className='membership-info'>
                        <li>{props.vink}{props.benefit}</li>
                        <li>{props.vink2}{props.benefit2}</li>
                        <li>{props.vink3}{props.benefit3}</li>
                        <li>{props.vink4}{props.benefit4}</li>
                    </ul>
                </div>
                <button className={buttonClass}>Word nu lid!</button>
            </article>
        </div>
    )
}
export default MembershipCard
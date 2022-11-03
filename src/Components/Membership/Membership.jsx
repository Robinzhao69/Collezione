import React from 'react'
import MembershipCard from './MembershipCard'
import CheckIcon from '@mui/icons-material/Check';
import './Membership.css'

function Membership() {
    return (
        <section className='membership-view'>
            <div className='mx-w'>
                <h1><span>L</span>idmaatschappen</h1>
                <div className='card-con'>
                    <MembershipCard vink={<CheckIcon />} vink2={<CheckIcon />}  img="minecraft.jpg" title="Gratis" text="€0,00 p/m" benefit="24/7 helpdesk" benefit2="Playpoints" />
                    <MembershipCard extraClass="--special" vink={<CheckIcon />} vink2={<CheckIcon />} vink3={<CheckIcon />} img="forza.jpg" title="Basic" text="€5,99 p/m" benefit="24/7 helpdesk" benefit2="Playpoints" benefit3="Early Access inkoop" />
                    <MembershipCard vink={<CheckIcon />} vink2={<CheckIcon />} vink3={<CheckIcon />} vink4={<CheckIcon />} img="doom.jpg" title="Premium" text="€9,98 p/m" benefit="24/7 helpdesk" benefit2="Playpoints" benefit3="Early Access inkoop" benefit4="Maandelijkse game drop" />
                </div>
            </div>
        </section>
    )
}
export default Membership
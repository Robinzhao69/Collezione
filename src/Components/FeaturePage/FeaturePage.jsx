import React from 'react'
import Feature from './FeatureCard'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaidIcon from '@mui/icons-material/Paid';
import InfoIcon from '@mui/icons-material/Info';
import './FeaturePage.css'

 function FeaturePage() {
  return (
    <section className='featurePage'>
        <h1><span>O</span>nze kenmerken</h1>
        <div className='feature-con'>
            <Feature titel="Bezorging" text="Wij bezorgen snel" img={<LocalShippingIcon />}/>
            <Feature titel="Kwaliteit" text="Producten zijn in goede staat" img={<AutoAwesomeIcon />}/>
            <Feature titel="Klantservice" text="24/7 berijkbaar" img={<InfoIcon />}/>
            <Feature titel="Prijs" text="Waard voor de prijs" img={<PaidIcon />}/>
        </div>    
    </section>
  )
}
export default FeaturePage

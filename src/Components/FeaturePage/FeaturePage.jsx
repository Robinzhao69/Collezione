import React from 'react'
import Feature from './FeatureCard'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import PaidIcon from '@mui/icons-material/Paid';
import InfoIcon from '@mui/icons-material/Info';
import './FeaturePage.css'

 function FeaturePage() {
  return (
    <section className='featurePage'>
        <h1><span>O</span>nze kenmerken</h1>
        <div className='feature-con'>
            <Feature titel="Overzicht" text="Veel overzicht over je producten" img={<SavedSearchIcon />}/>
            <Feature titel="Kwaliteit" text="Producten zijn in goede staat" img={<AutoAwesomeIcon />}/>
            <Feature titel="Klantservice" text="24/7 berijkbaar" img={<InfoIcon />}/>
            <Feature titel="Prijs" text="Waard voor de prijs" img={<PaidIcon />}/>
        </div>    
    </section>
  )
}
export default FeaturePage

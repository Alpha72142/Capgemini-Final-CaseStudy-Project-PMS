import React from 'react'
import "./css/featureInfo.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';



function FeatureInfo() {
  return (
    <div className='featured'>
        <div className='featuredItem'>
                <span className='featureTitle'>Revanue</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$2,415</span>
                    <span className='featuredMoneyRate'>
                     -11.4<ArrowDownwardIcon className='featuredIcon negative'/>
                    </span>
                </div>
                <span className='featuredSub'>Compare to last month</span>
        </div>
        <div className='featuredItem'>
                <span className='featureTitle'>sales</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$4,415</span>
                    <span className='featuredMoneyRate'>
                     -1.4<ArrowDownwardIcon className='featuredIcon negative'/>
                    </span>
                </div>
                <span className='featuredSub'>Compare to last month</span>
        </div>
        <div className='featuredItem'>
                <span className='featureTitle'>Cost</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$2,415</span>
                    <span className='featuredMoneyRate'>
                     +2.4 <ArrowUpwardIcon className='featuredIcon'/>
                    </span>
                </div>
                <span className='featuredSub'>Compare to last month</span>
        </div>
    </div>
  )
}

export default FeatureInfo
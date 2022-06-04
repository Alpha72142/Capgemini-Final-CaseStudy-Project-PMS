import React from 'react'
import Chart from './Chart'
import "./css/dashHome.css"
import FeatureInfo from './FeatureInfo'
import {userData} from './dummydata'

import { NavLink } from 'react-router-dom'

function DashHome() {
  return (
   
    <div className='dashHome'>
        
        <FeatureInfo/>
        <Chart data={userData} title='Montly Sell' grid dataKey="sell"/>
        <div className='homeWidgets'>
        
        </div>
        <NavLink to="/drugs" className="redirectlink rates" />
    </div>
 
   
  )
}

export default DashHome
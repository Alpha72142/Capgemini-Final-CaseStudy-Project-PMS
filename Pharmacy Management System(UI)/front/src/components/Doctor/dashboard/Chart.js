import React from 'react'
import './css/chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chart({title,data,dataKey,grid}) {
  return (
    <div className='chart'>
        <h3 className='chartTitle'>{title}</h3>
        <ResponsiveContainer width="100%" height='53%' aspect={4/1}>
          <LineChart data={data}>
            <XAxis dataKey='name' stroke='#5550bd'/>
            <YAxis/>
            <Tooltip />
            {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>}
            <Legend />
            <Line type='monotone'dataKey={dataKey} stroke='#5550bd' />
            
          </LineChart>
        
        </ResponsiveContainer>
        
    </div>
  )
}

export default Chart
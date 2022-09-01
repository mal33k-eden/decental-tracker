import React,{ useContext, useEffect } from 'react'
import { useState } from 'react'
import TrackerContext from '../contexts/tracker'

function Details() {
    const {lang, device, dimensions, browser,IP} = useContext(TrackerContext)
    const [cookie, setCookie] = useState('')

    useEffect(()=>{
        (navigator.cookieEnabled)?setCookie('Allowed'):setCookie('Not Allowed')

    },[cookie])
  return (
    <div className='w-1/2'>
        <div className="card  bg-base-200 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Tracking Details</h2>
                <h4 className='text-lg'>IP Address: {IP}</h4>
                <div className='divider'></div>
                <h4 className='text-lg'>Cookie: {cookie} </h4>
                <div className='divider'></div>
                <h4 className='text-lg'>Language: {lang}</h4>
                <div className='divider'></div>
                <h4 className='text-lg'>Device: {device}</h4>
                <div className='divider'></div>
                <h4 className='text-lg'>Browser: {browser}</h4>
                <div className='divider'></div>
                <h4 className='text-lg'>Screen: {dimensions}</h4>
                <div className='divider'></div>
            </div>
        </div>
    </div>
  )
}

export default Details
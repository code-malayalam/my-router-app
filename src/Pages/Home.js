import React from 'react'
import { isLoggedIn } from '../utils/Common'

export default function Home() {
    console.log(isLoggedIn());

    return (
        <div className="page">
            Home
        </div>
    )
}

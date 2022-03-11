import React, { useState, Suspense } from 'react'


const MyComp = React.lazy(() => {
    return import(/*webpackChunkName: "mySectionFile"*/ '../components/Section');
});

export default function Settings() {

    const [state, setState] = useState(false);


    return (
        <div className="page">
            <Suspense fallback={<div>Loading...</div>}>
            Settings
            <div>
                {
                    state && (
                        
                            <MyComp />
                        
                    )
                }
                
                <button onClick={() => {
                    setState(true)
                }}>Click</button>
            </div>
            </Suspense>
        </div>
    )
}

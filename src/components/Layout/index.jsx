import React from 'react'
import Footer from'../Footers'
import Headers from'../Headers'

export default function Layout(props){
    return(
        <>
        <Headers {...props} />
            {props.children}
        <Footer />
        </>
    )
}
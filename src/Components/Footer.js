import React from 'react'
import "./Home.css"

export default function Footer() {
    return (
        <div>
            <footer id = "f1" style={{ bottom:0,position:"fixed",padding:7,width:"calc(100vw)",background:"#433f3f"}}>
                    <div id="h2" style={{color:"white"}}>&#169;2021 Made By Nikhil Pathak</div>
                    <dl>
                        <dt style={{color:"white"}}>The Sparks Foundation</dt>
                    </dl>
                </footer>
        </div>
    )
}

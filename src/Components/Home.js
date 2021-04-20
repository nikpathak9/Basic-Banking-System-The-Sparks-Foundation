import React from 'react'
import { NavLink } from 'react-router-dom';
import hh from './hh.jpg';
import './Home.css'

function Home() {
        return (
            <div className="Home">
                <div className="qq">
                    <h1 className="heading">
                        Transfer
                        Money
                        Easily
                    </h1>
                </div>
                <img src={hh} className="img nik" alt="Responsive" width="100%"></img>
                <div id ="I1" style={{fontSize:"30px",fontFamily:"Helvetica, sans-serif", color:"grey",marginTop:"140px",padding:"30px"}}>Choose Options</div>
                <div className="row text-center">
                        <div className=" col-4" >
                        <NavLink className="btn btn-info my-sm-0" exact to="/viewCustomer" role="button" style={{backgroundColor:"grey"}}>Users</NavLink>
                        </div>
                        <div className=" col-4" >
                        <NavLink className="btn btn-info  my-sm-0" exact to="/transfer" role="button" style={{backgroundColor:"grey"}}>Transfer Money</NavLink>
                        </div>
                        <div className="col-4" >
                        <NavLink className="btn btn-info  my-sm-0" exact to="/transactions" role="button" style={{backgroundColor:"grey"}}>History</NavLink>
                        </div>

                </div>
                <footer id = "f1" style={{ bottom:0,position:"fixed",width:"calc(100vw)",background:"#433f3f"}}>
                    <div id="h2" style={{color:"white"}}>&#169;2021 Made By Nikhil Pathak</div>
                    <dl>
                        <dt style={{color:"white"}}>The Sparks Foundation</dt>
                    </dl>
                </footer>
            </div>
        )
}

export default Home;

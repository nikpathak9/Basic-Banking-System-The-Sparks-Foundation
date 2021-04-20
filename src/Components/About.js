import React from 'react';
import Button from "@material-ui/core/IconButton";
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const About = () => {
    return (
        <div>
        <div className="container">
            <div className="py-4" style={{marginTop:"200px"}}>
                <h1 className="heading" >About</h1>
                <div style={{display:"inline-flex"}}>
                    <Link to="/hj">
                        <Button style={{ color: "black" }} onClick={() => window.open("https://github.com/nikpathak9", '_blank')}>
                            <GitHubIcon />
                        </Button>
                    </Link>
                    <Button style={{ color: "black" }} onClick={() => window.open("https://twitter.com/nikpathak9", '_blank')}>
                        <TwitterIcon />
                    </Button>
                    <Button style={{ color: "black" }} onClick={() => window.open("https://www.linkedin.com/in/nikhil-pathak-597708196/", '_blank')}>
                        <LinkedInIcon />
                    </Button>
                </div>
            </div>
            <div>
                <dl>
                    <dt>Task 1 of The Sparks Foundation "Basic Banking System".</dt>
                    <dt>Designed and developed by Nikhil Pathak</dt>
                </dl>
            </div>
        </div>
        <footer id = "f1" style={{bottom:0,position:"fixed",padding:7,width:"calc(100vw)",background:"#433f3f"}}>
                <div id="h2" style={{color:"white"}}>&#169;2021 Made By Nikhil Pathak</div>
                <dl>
                    <dt style={{color:"white"}}>The Sparks Foundation</dt>
                </dl>
            </footer>
        </div>
    );
};

export default About;
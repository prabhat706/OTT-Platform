import React from 'react'

function About() {
    let myStyle1 =
    {
        fontFamily: " monospace",
        fontSize: "40px",
    }
    let myStyle = {
        fontFamily: " monospace",
        fontSize: "30px",
        paddingTop: "100px",
        paddingLeft: "80px",
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.74)"
    }
    return (
        <>
            <div style={myStyle} className="container ">
                <div style={myStyle1}>
                    ABOUT OTT PLATFORM
                </div>
                <hr />
                <p>THIS IS DESIGNED USING TMDB API. IT IS USED TO GET THE INFOMATION REGARDING VARIOUS MOVIES. JUST TYPE THE NAME OF THE MOVIE AND CLICK SEARCH!!</p>
                <hr />
            </div>

        </>
    )
}

export default About


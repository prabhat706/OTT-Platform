import React from 'react'
import series from './series.jpg'
import pic from './film.jpg'
import './style1.css'
function Layout({ myfunction }) {
    let layoutStyle1 = {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        color: "white",
        marginTop: "1%",
        paddingLeft: "5%",
        paddingBottom: "2%",
        paddingTop: "2%",
        backgroundImage: `url(${series})`,
    }
    let layoutStyle2 = {
        backgroundColor: "rgba(0, 0, 0, 0.74)",
        paddingLeft: "5%",
        marginLeft: "50%",
    }
    return (
        <>
            <div>
                <section className="content" >
                    <div style={layoutStyle1} className="get_info">
                        <div className="heading"> OTT PLATFORM</div>
                        <div className="cfimg"><img src={pic} width="60%" height="50%" alt="Movie"></img><br /></div>
                        <div className="centreDiv">
                            <div id="details">
                                <input type="text" id="nameid" placeholder="Enter the movie" />
                            </div>
                            <div className="buton">
                                <button className="btn btn-success btn-sm" onClick={() => myfunction()}><div className="button-text">SEARCH </div> </button>
                            </div>
                        </div>
                    </div>
                    <div id="info" style={layoutStyle2}>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Layout

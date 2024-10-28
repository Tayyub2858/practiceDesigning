import React from 'react';
import './homeStyle.css';
import SideBar from '../../component/sibebar/sidebar';
import GridContainer from '../../component/gridcontainer/gridContainer';


function Home() {
    return (
        <>
            <div className="container">
                <div className="sidebar">
                    <SideBar/>
                </div>
                <div className="right-container">
                    <GridContainer/>
                </div>
            </div>
        </>
    )
}

export default Home

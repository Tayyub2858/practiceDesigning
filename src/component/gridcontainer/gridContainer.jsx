import React from 'react';
import './gridContainerStyle.css';
import reload from '../../asstes/images/Screenshot 2024-10-26 003417.png'

import allemails from '../../asstes/images/236e811717eeccf8f0d5b63fc9f28a92.png';
import newemail from '../../asstes/images/d2531244a958b5ebb6d1b345972593e1.png';
import addodas from '../../asstes/images/67b6f3ab478484d87180448064b4b9e6.png';
import uselisting from '../../asstes/images/8c83920bcc2759a8aa708ad06f347fef.png';
import inbox from '../../asstes/images/ba91bf4cd668cea4fffd2d9a6dc86065.png';
import llcAcc from '../../asstes/images/5a19dbbaccee6dc525a370ad9a75689f.png';
import lastlogo from '../../asstes/images/Screenshot 2024-10-26 003331.png'
function GridContainer() {
    return (
        <>
            <div className="grid-container-main">
                <div className="grid-header">
                    <div className="header-content">
                        <h4 className='header-heading'>Beginnen Sie Ihre Verkaufsreise 👋 </h4>
                        <p className='header-text'>Entdecken Sie mühelos jede Facette Ihres Verkaufsmandatsvertrags.</p>
                    </div>
                    <div className="header-reload">
                        <img src={reload} alt="" width={45} height={50} />
                        <p>Reload</p>
                    </div>
                </div>

                <div className="grid-images-container">
                    <div className="grid-container-box1">
                        <div className="under-gridbox">
                            <div className="gridleft">
                                <div ><img src={allemails} width={300} height={430} alt="" /> </div>
                                <img src={addodas} alt="" width={300} height={225} style={{ marginTop: '20px' }} />
                            </div>
                            <div className="gridright">
                                <div className='gridright-doubble-box'>
                                    <img src={newemail} width={300} height={250} alt="" style={{ paddingRight: '20px' }} />
                                    <img src={uselisting} width={300} height={250} alt="" />
                                </div>
                                <div className="randon-video-box">
                                    <h1>Insert Random Video</h1>
                                    <button className='nesting-btn'>NESTING</button>
                                </div>
                            </div>
                        </div>
                        <div className="under-gridbox2">
                            <div className="insert-random-video"><h1>Insert Random Quote</h1></div>
                            <div><img src={llcAcc} width={300} height={250} alt="" style={{ paddingRight: '20px' }} /></div>

                        </div>
                    </div>
                    <div className="grid-container-box2">
                        <div className="inter-text-box"><h1>Insert Textblock</h1></div>
                        <div><img src={inbox} alt="" width={300} height={500} /></div>
                    </div>
                </div>

                <div className="last-immoiq">
                    <p>BEREITGESTELLT VON</p>
                    <img src={lastlogo} alt="" />
                    <h4>IMMO <span>IQ</span></h4>
                </div>

            </div>

        </>
    )
}

export default GridContainer

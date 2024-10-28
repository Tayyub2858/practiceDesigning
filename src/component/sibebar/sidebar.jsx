import React from 'react'
import './sidebarStyle.css';
import settingImge from "../../asstes/images/Screenshot 2024-10-26 002735.png"
import logo from "../../asstes/images/logo.png"
import immbilnx from '../../asstes/images/Screenshot 2024-10-26 002753.png'
import Preisschätzung from '../../asstes/images/Screenshot 2024-10-26 002709.png'
import Checklisten from '../../asstes/images/Screenshot 2024-10-26 002813.png'
import Ratgeber from '../../asstes/images/Screenshot 2024-10-26 002827.png'
import Mandatsnavigator from '../../asstes/images/Screenshot 2024-10-26 002841.png'
import Wohntraumfinder from '../../asstes/images/Screenshot 2024-10-26 002855.png'
import carlos from '../../asstes/images/Screenshot 2024-10-26 022221.png'
import google from '../../asstes/images/Screenshot 2024-10-26 003016.png'
import completerating from '../../asstes/images/Screenshot 2024-10-26 003035.png'
import rating from '../../asstes/images/Screenshot 2024-10-26 003047.png'
function SideBar() {
    return (
        <>
            <div className="">
                <div className="setting-icons">
                    <img src={settingImge} alt="Settings Icon" width={40} height={40} />
                    <div className="rectangle">
                        <p className="text-heading">NACHTMODUS</p>
                    </div>
                </div>

                <div className="logo">
                    <img src={logo} alt="" width={400} height={120} />
                </div>

                <div className="item-nav-container">
                    <div className='mein-item-menu'>
                        <div className="itembar">
                            <img
                                src={immbilnx}
                                className="img-fluid rounded-top"
                                alt="Immobilienlexikon"
                                width={40}
                                height={40}
                            />
                            <p className="typography-heading">Immobilienlexikon</p>
                            <div className="rectangle">
                                <p className="text-heading">KI</p>
                            </div>
                        </div>
                        <div className='typography-mein'>
                            <p className="typography-content">Immobilienwissen für alle Fälle.</p>
                        </div>
                    </div>
                    <div className='mein-item-menu'>
                        <div className="itembar">
                            <img
                                src={Preisschätzung}
                                className="img-fluid rounded-top"
                                alt="Immobilienlexikon"
                                width={40}
                                height={40}
                            />
                            <p className="typography-heading">Preisschätzung</p>
                            <div className="rectangle">
                                <p className="text-heading">LINK</p>
                            </div>
                        </div>
                        <div className='typography-mein'>
                            <p className="typography-content">Den Wert Ihres Hauses schätzen lassen.</p>
                        </div>
                    </div>
                    <div className='mein-item-menu' >
                        <div className="itembar">
                            <img
                                src={Checklisten}
                                className="img-fluid rounded-top"
                                alt="Immobilienlexikon"
                                width={40}
                                height={40}
                            />
                            <p className="typography-heading">Checklisten</p>
                            <div className="rectangle">
                                <p className="text-heading" >PDF</p>
                            </div>
                        </div>
                        <div className='typography-mein'>
                            <p className="typography-content" >Praktische Checklisten für jeden Schritt.</p>
                        </div>
                    </div>
                    <div className='mein-item-menu'>
                        <div className="itembar">
                            <img
                                src={Ratgeber}
                                className="img-fluid rounded-top"
                                alt="Immobilienlexikon"
                                width={40}
                                height={40}
                            />
                            <p className="typography-heading">Ratgeber</p>
                            <div className="rectangle">
                                <p className="text-heading">PDF</p>
                            </div>
                        </div>
                        <div className='typography-mein'>
                            <p className="typography-content">Immobilien-Expertenrat für Eigentümer.</p>
                        </div>
                    </div>
                    <div className='mein-item-menu'>
                        <div className="itembar">
                            <img
                                src={Mandatsnavigator}
                                className="img-fluid rounded-top"
                                alt="Immobilienlexikon"
                                width={40}
                                height={40}
                            />
                            <p className="typography-heading">Mandatsnavigator</p>
                            <div className="rectangle">
                                <p className="text-heading">KI</p>
                            </div>
                        </div>
                        <div className='typography-mein'>
                            <p className="typography-content">Verständlich zum Verkaufsabschluss.</p>
                        </div>
                    </div>
                    <div className='mein-item-menu'>
                        <div className="itembar">
                            <img
                                src={Wohntraumfinder}
                                className="img-fluid rounded-top"
                                alt="Immobilienlexikon"
                                width={40}
                                height={40}
                            />
                            <p className="typography-heading">Wohntraumfinder</p>
                            <div className="rectangle">
                                <p className="text-heading">KI</p>
                            </div>
                        </div>
                        <div className='typography-mein'>
                            <p className="typography-content">Zum Traumheim mit KI-Unterstützung.</p>
                        </div>
                    </div>

                    <div className="carlos-sidebar">
                        <div className='clarlos-image'>
                            <img src={carlos} alt="" width={200} height={200} />
                        </div>
                        <div className='carlos-text'>
                            <p className='Immotrust'>Immotrust AG </p>
                            <p className='Immotrust-text'>Vertrauensvolle Immobilienberatung seit 2008.</p>
                            <button className='carlos-button'>Carlos Kuk - Eigentümer</button>
                        </div>
                    </div>

                    <div className="google-rating">
                        <img src={google} alt="" width={40} height={40} />
                        <p className='google-rating-text'>Bewertunger</p>
                        <img src={completerating} alt="" width={40} height={40} />
                        <img src={completerating} alt="" width={40} height={40} />
                        <img src={completerating} alt="" width={40} height={40} />
                        <img src={rating} alt="" width={40} height={40} />
                    </div>
                    <div className="ratio-text">
                        <p className='ratio-heading'>4,6 VON 5 BASIERENND AUF 245 BEWERTUNGEN</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar

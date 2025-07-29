
import "./App.css";

import { IoArrowDown } from 'react-icons/io5';


function BackToTop() {

    return (

        <div className="BackToTop">

            <div className="back-to-top-text">
                <span> “Mantık seni A noktasından B noktasına götürür. Hayal gücü ise her yere.” 
				<br /><br />
				— Albert Einstein </span>
            </div>

            <div className="back-to-top-button">
                <span className="gradient">
                    <a href="#top">
                        En üste geri dönmek için buraya tıklayın.
                        <IoArrowDown id="arrow-icon"/>
                    </a>
                </span>
            </div>

        </div>

    )
}

export default BackToTop;
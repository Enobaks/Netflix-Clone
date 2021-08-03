import React, {useState, useEffect} from 'react';
import './Nav.css';
import mobileLogo from './new-netflix-logo.png';

function Nav() {
    const [show, setShow] = useState(false);
    
    
    useEffect(()=> {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);
            }else{
                setShow(false);
            }
        });
        return ()=> {
            window.removeEventListener("scroll")
        };
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" className="nav_logo" alt="Netflix Logo" />
            <img src={mobileLogo} alt="" class="nav_logo-mobile" />

            <div className="nav_buttons">
                <button className="nav_button join">Join Now</button>
                <button className="nav_button sign_in">Sign in</button>
            </div>
            
        </div>
    )
}

export default Nav

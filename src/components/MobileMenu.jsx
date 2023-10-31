import React from 'react';
import {Menu} from "../styledComponents/MobileMenu-style";

function MobileMenu() {
    return (
        <>
            <Menu>
               <li>Home</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
                <li>FAQ</li>
                <li>Reviews</li>
                <li>BOOK A TAXI</li>
            </Menu>
        </>
    );
}

export default MobileMenu;
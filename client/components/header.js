import React from "react";
import Link from 'next/link';

export default  ({currentUser}) => {

    const links = [
        !currentUser && {label: 'SignUp',href: '/auth/signup'},
        !currentUser && {label: 'SignIn',href: '/auth/signin'},
        currentUser && {label: 'SignOut',href: '/auth/signout'},
    ]
    .filter(linkConfig=>linkConfig)
    .map(({label,href})=>{
        return (
            <li>
                <Link href={href}>
                    {label}
                </Link>
            </li>
        );
    });

    return (<nav className="navbar navbar-light bg-light">
        <Link href={'/'}>
            Homepage
        </Link>
        <div className="d-flex justify-content-end">
            <ul className="nav d-flex align-items-center">
                <li>
                    
                </li>
            </ul>
        </div>
    </nav>);
}
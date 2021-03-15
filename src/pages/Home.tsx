import React from 'react';
import { Services, Keys, Contacts } from "../components/sections";

function Home(): JSX.Element {
    return (
        <div className="home">
            <Services />
            <Keys />
            <Contacts />
        </div>
    )
}

export default Home;

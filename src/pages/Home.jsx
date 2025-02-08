import React from "react";

function Home() {
    return (
        <div className="home-container">
            <header className="navbar">
                <h1>RedBus Clone</h1>
            </header>
            <section className="search-section">
                <input type="text" placeholder="From" />
                <input type="text" placeholder="To" />
                <input type="date" />
                <button>Search Buses</button>
            </section>
            <footer className="footer">
                <p> TransitFlow: Smart Public Transport Dashboard. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;

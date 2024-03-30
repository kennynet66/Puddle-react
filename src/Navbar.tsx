
function Navbar(){
    return(
        <nav>
            <div className="logo">
                Puddle
            </div>
            <ul className="actions">
                <li>
                    <div><a href="/">Home</a></div>
                    <div className="overlay"></div>
                </li>
                <li>
                    <div>Services</div>
                    <div className="overlay"></div>
                </li>
                <li>
                    <div><a href="/login">Login</a></div>
                    <div className="overlay"></div>
                </li>
                <li>
                    <div><a href="/signup">signup</a></div>
                    <div className="overlay"></div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar
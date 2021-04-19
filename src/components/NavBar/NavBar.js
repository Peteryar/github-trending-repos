import "./NavBar.css";
function NavBar({incrementPage}) {
    return (
        <header className="nav-bar">
            <h4>Github Trending Repos</h4>
            <div className="nav-items-con">
                <div className="nav-left">
                    <i className="fas fa-chevron-left"></i>
                    <i onClick={incrementPage} className="fas fa-chevron-right"></i>
                    <i className="fas fa-house-user"></i>
                </div>
                <div className="input-con">
                    <input />
                </div>
                <div className="nav-right">
                    <i className="fas fa-search"></i>
                </div>
            </div>
        </header>
    )
}

export default NavBar;
import "./Footer.css";

function Footer({ paginate }) {
    return (
        <div className="footer">
            <label>
                <i onClick={() => paginate(-1)} className="fas fa-chevron-left"></i>
                <i onClick={() => paginate(1)} className="fas fa-chevron-right"></i>
            </label>
            <p>Task Completed and submitted by Peter Agent</p>
        </div>
    )
}

export default Footer;

const Footer = () => {
    return (
        <footer>
            <div className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <h2 className="font-bold text-3xl mb-2">Rhythmic Fever</h2>
                    <p>House: 99, Road: 10, Block: D, <br />Banani Model Town, Dhaka.</p>
                </div>
                <div>
                    <span className="footer-title text-2xl">About</span>
                    <a className="link link-hover">Our Story</a>
                    <a className="link link-hover">Partners</a>
                    <a className="link link-hover">Events Calendar</a>
                    <a className="link link-hover">Member Forum</a>
                </div>
                <div>
                    <span className="footer-title text-2xl">Open Hours</span>
                    <a className="link link-hover">Monday 11am-7pm us</a>
                    <a className="link link-hover">Tuesday 11am-7pm</a>
                    <a className="link link-hover">Saturday 11am-7pm</a>
                    <a className="link link-hover">Sunday 11am-7pm kit</a>
                </div>
                <div>
                    <span className="footer-title text-2xl">Socials</span>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Youtube</a>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by Rhythmic Fever</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
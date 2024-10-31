import logo from "../assets/ConradLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
    return <nav className="mb-10 lg:flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <div className="redBox"
                    style={{
                        backgroundColor: 'rgb(230,57,68)',
                        padding: '2px 10px 2px 10px',
                        borderRadius: '10px', // Rounds the corners
                        textAlign: 'center',
                        fontSize: '15px',
                        color: 'rgb(0,0,0)'
                    }}
                >projects: 4</div>
                <div className="redBox"
                    style={{
                        backgroundColor: 'rgb(230,57,68)',
                        padding: '2px 10px 2px 10px',
                        borderRadius: '10px', // Rounds the corners
                        textAlign: 'center',
                        fontSize: '15px',
                        color: 'rgb(0,0,0)'
                    }}
                >age: 19</div>
                <div className="redBox"
                    style={{
                        backgroundColor: 'rgb(230,57,68)',
                        padding: '2px 10px 2px 10px',
                        borderRadius: '10px', // Rounds the corners
                        textAlign: 'center',
                        fontSize: '15px',
                        color: 'rgb(0,0,0)'
                    }}
                >exp: 1 yr
                </div>
            </div>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaDiscord />
            <FaInstagram />
        </div>
    </nav>
};

export default Navbar;
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
        <a href="https://www.linkedin.com/in/conrad-alves-906840288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/corny775" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                    <FaDiscord />
                </a>
            <a href="https://www.instagram.com/corny7750/profilecard/?igsh=MXY4c3E5bDZjcGVmeQ==" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
            </a>
        </div>
    </nav>
};

export default Navbar;
import "../Style/Header.css"
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

export default function Header(){
    return(
        <header>
            <div className="logo"><span>N</span>ilesh.</div>
            <ul className="navlist">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="menu-icon"><MenuSharpIcon/></div>
        </header>
    )
}
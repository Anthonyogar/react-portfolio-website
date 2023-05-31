import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoW from '../../assets/images/wolf.png'
import LogoSubtitle from '../../assets/images/wolf (2).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope, faSuitcase, faBars, faClose} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {useState} from "react";


const Sidebar = () => {
	const [showNav, setShowNav] = useState(false);

	return (
		<div className='nav-bar'>
			<Link className='logo' to='/'>
				<img src={LogoW} alt="logo" />
				<img className="sub-logo" src={LogoSubtitle} alt="wolf" />
			</Link>
			<nav className={showNav ? 'mobile-show' : ''}>
				<NavLink
					exact="true"
					activeclassname="active"
					to="/"
					onClick={() => setShowNav(false)}
				>
						<FontAwesomeIcon icon={faHome} color='#C8C9F1' />
				</NavLink>
				<NavLink
					onClick={() => setShowNav(false)}
					activeclassname="active"
					className="about-link"
					to="/about">
						<FontAwesomeIcon icon={faUser} color='#C8C9F1' />
				</NavLink>
				<NavLink
					onClick={() => setShowNav(false)}
					activeclassname="active"
					className="contact-link"
					to="/contact">
						<FontAwesomeIcon icon={faEnvelope} color='#C8C9F1' />
				</NavLink>
				<NavLink
					onClick={() => setShowNav(false)}
					activeclassname="active"
					className="portfolio-link"
					to="/portfolio">
					<FontAwesomeIcon icon={faSuitcase} color='#C8C9F1' />
				</NavLink>
				<FontAwesomeIcon
					onClick={() => setShowNav(false)}
					icon={faClose}
					color="#F85EBA"
					size="3x"
					className="close-icon"
				/>
			</nav>
			<ul>
				<li>
					<a target="blank"
						rel="moreferrer"
						href="https://www.linkedin.com/in/anthony-ogar-052a9b245"
					>
						<FontAwesomeIcon icon={faLinkedin} color="#C8C9F1" />
					</a>
				</li>
				<li>
					<a target="blank"
						rel="moreferrer"
						href="https://github.com/Anthonyogar"
					>
						<FontAwesomeIcon icon={faGithub} color="#C8C9F1" />
					</a>
				</li>
				<li>
					<a target="blank"
						rel="moreferrer"
						href="https://twitter.com/Sir_Travis_?t=u2w7E2358tU47FlOy9oR0w&s=09"
					>
						<FontAwesomeIcon icon={faTwitter} color="#C8C9F1" />
					</a>
				</li>
			</ul>
			<FontAwesomeIcon
				onClick={() => setShowNav(true)}
				icon={faBars}
				color="#F85EBA"
				size="3x"
				className="hamburger-icon"
			/>
		</div>
	)
}

export default Sidebar

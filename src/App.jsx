import React, { useState } from "react";
import {
    FiBookOpen,
    FiCodepen,
    FiCoffee,
    FiFacebook,
    FiGithub,
    FiGlobe,
    FiHeart,
    FiLinkedin,
    FiMail,
    FiMenu,
    FiShield,
    FiX,
    FiYoutube,
} from "react-icons/fi";
import About from "./components/about";
import PasswordManager from "./components/passwordManager";
import ScrollToTopButton from "./components/scrollToTopButton";

const socialLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FiGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FiGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FiCodepen },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FiLinkedin },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FiFacebook },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FiYoutube },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FiMail },
];

const supportLinks = [
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FiHeart },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FiCoffee },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FiBookOpen },
];

function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="site-header__inner">
                <a className="brand" href="#password-manager" onClick={() => setMenuOpen(false)}>
                    <img className="brand__logo" src="/password-manager/logo.png" alt="Ashish Ranjan logo" />
                    <span className="brand__copy">
                        <span className="brand__kicker">LOCAL TOOLKIT</span>
                        <span className="brand__title">Password Manager</span>
                    </span>
                </a>
                <nav className="desktop-nav" aria-label="Primary navigation">
                    <a className="nav-link" href="#password-manager">Manager</a>
                    <a className="nav-link" href="#about">About</a>
                </nav>
                <button className="menu-button" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
                    {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                </button>
            </div>
            {menuOpen && (
                <nav className="mobile-nav" aria-label="Mobile navigation">
                    <a className="nav-link" href="#password-manager" onClick={() => setMenuOpen(false)}>Manager</a>
                    <a className="nav-link" href="#about" onClick={() => setMenuOpen(false)}>About</a>
                </nav>
            )}
        </header>
    );
}

function LinkGroup({ links }) {
    return (
        <div className="footer-links">
            {links.map(({ label, href, icon: Icon }) => (
                <a className="footer-link" key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={label} title={label}>
                    {React.createElement(Icon, { "aria-hidden": "true" })}
                </a>
            ))}
        </div>
    );
}

function SiteFooter() {
    return (
        <footer className="site-footer">
            <div className="site-footer__inner">
                <div className="footer-top">
                    <strong className="footer-title"><FiShield aria-hidden="true" /> Built for local-first experiments</strong>
                    <p>Keep your credentials in your browser and review the security note before using real secrets.</p>
                </div>
                <div className="footer-columns">
                    <div className="footer-group"><span className="footer-heading">Connect</span><LinkGroup links={socialLinks} /></div>
                    <div className="footer-group"><span className="footer-heading">Support</span><LinkGroup links={supportLinks} /></div>
                </div>
                <div className="footer-bottom">
                    <span>Copyright {"\u00a9"} {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span>
                    <span>LocalStorage powered demo</span>
                </div>
            </div>
        </footer>
    );
}

export default function App() {
    return (
        <>
            <SiteHeader />
            <main className="site-main">
                <div id="password-manager"><PasswordManager /></div>
                <div id="about"><About /></div>
            </main>
            <SiteFooter />
            <ScrollToTopButton />
        </>
    );
}

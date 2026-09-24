export default function About() {
    const details = [
        ["Name", "Ashish Ranjan"],
        ["Phone", <a href="tel:+918123747965">+91 8123747965</a>],
        ["Email", <a href="mailto:ash.ranjan09@gmail.com">ash.ranjan09@gmail.com</a>],
        ["Nationality", "The Republic of India"],
        ["Website", <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">https://www.ashishranjan.net/</a>],
        ["Facebook", <a href="https://www.facebook.com/theash.ashish/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/theash.ashish/</a>],
        ["LinkedIn", <a href="https://www.linkedin.com/in/aashishranjan/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/aashishranjan/</a>],
        ["YouTube", <a href="https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1" target="_blank" rel="noopener noreferrer">https://www.youtube.com/@ashishranjan-ashz</a>],
        ["GitHub", <a href="https://github.com/a2rp" target="_blank" rel="noopener noreferrer">https://github.com/a2rp</a>],
    ];

    return (
        <section className="about-section">
            <div className="about-panel">
                <h2>About Developer</h2>
                {details.map(([label, value]) => (
                    <div className="about-row" key={label}>
                        <div className="about-label">{label}</div>
                        <div className="about-value">{value}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

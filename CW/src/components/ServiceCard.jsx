export default function ServiceCard({ title, description, highlights}) {
    return (
        <div className="service-card">
            <h3 className="service-card__title">{title}</h3>
            <p className="service-card__description">{description}</p>

            <ul className="service-card__list">
                {highlights.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
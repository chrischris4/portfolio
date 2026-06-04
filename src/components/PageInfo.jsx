function PageInfo({ title, image, imageAlt, text, items }) {
    return (
        <div className="pageInfo">
            <div className="pageInfoContent">
                {image && (
                    <img
                        className="pageImg"
                        src={image}
                        alt={imageAlt || ''}
                        loading="lazy"
                    />
                )}
                <div className="pageInfoDesc">
                    {title && <h3>{title}</h3>}
                    {text && <p>{text}</p>}
                    {items && items.length > 0 && (
                        <ul>
                            {items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PageInfo;

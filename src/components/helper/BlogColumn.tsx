import { useState } from "react";

interface BlogButtonLink{
    link: string;
    text: string;
}

interface BlogColumnProps {
    title: string;
    photoSrc: string;
    shortDescs: string[];
    iconSrc: string;
    date: string;
    ButtonLinks: BlogButtonLink[];
}

const getButtonColor = (text = "") => {
  const value = text.toLowerCase();

  if (value.includes("youtube")) return "#ff0000";
  if (value.includes("hackster")) return "#1e88e5";
  if (value.includes("github")) return "#000000";

  return "#6c757d"; // default color
};

function BlogColumn({ title, photoSrc, iconSrc, shortDescs, date, ButtonLinks }: BlogColumnProps){
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return(
            <div className="col-md-6 productsCol">
                <div className="card productsCard">
                        <div className="hover-img-container">
                            <div className="top-left"></div>
                            <div className="top-right"></div>
                            <div className="bottom-left"></div>
                            <div className="bottom-right"></div>
                            <div className="top-middle"></div>
                            <div className="bottom-middle"></div>
                            <img src={photoSrc} className="card-img-top blogCardImage" alt={title}/>
                        </div>
                    <div className="card-body blogCardBody">
                        <img className="blogIcon" alt={title.charAt(0)} src={iconSrc}/>
                        <h5 className="card-title text-font-alt">{title}</h5>
                        <h6 className="card-date">{date}</h6>
                    </div>
                    <ul className="list-group list-group-flush">
                        {shortDescs?.map((shortDesc, index) => (
                            <li key={index} className="list-group-item">
                                {shortDesc}
                            </li>
                        ))}
                        <li className="list-group-item button-links">
                            {ButtonLinks.map((buttonLink, index) => {
                                const isHovered = hoveredIndex === index;
                                const hasHoveredButton = hoveredIndex !== null;

                                return (
                                <a
                                    key={index}
                                    href={buttonLink.link}
                                    className={`button-link ${
                                    isHovered ? "is-hovered" : ""
                                    } ${hasHoveredButton && !isHovered ? "is-hidden" : ""}`}
                                    style={{ backgroundColor: getButtonColor(buttonLink.text) }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    {buttonLink.text}
                                </a>
                                );
                            })}
                        </li>

                    </ul>
                </div>
            </div>
        )
}

export default BlogColumn;
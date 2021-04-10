import { useState } from "react";
import "./Project.css";
export default function Project(props) {
  const { name, description, stack, site, repo } = props;
  let { photos } = props;

  const [pics, setPics] = useState(photos);
  const switchPic = (index) => {
    let temp = pics;
    const featured = temp.splice(index, 1);
    temp = [featured, ...temp];
    setPics(temp);
  };

  const imgJSX = pics.map((photo, index) => {
    if (index > 0) {
      return (
        <img
          className="image-thumbnail"
          src={photo}
          alt="website thumbnails"
          key={index}
          onClick={() => switchPic(index)}
        />
      );
    } else {
      return null;
    }
  });

  return (
    <div className="project-card">
      <div className="image-container">
        <h2 className="project-name">{name}</h2>
        <img className="image-main" src={pics[0]} alt="" />
        <div className="image-thumbnail-box">{imgJSX}</div>
        <p>
          <a
            className="project-link"
            href={site}
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </a>
        </p>
        <p>
          <a
            className="project-link"
            href={repo}
            target="_blank"
            rel="noreferrer"
          >
            Code Repository
          </a>
        </p>
      </div>
      <p className="description">{description}</p>
      <p className="description">Stack: {stack}</p>
    </div>
  );
}

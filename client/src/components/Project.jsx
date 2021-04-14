import { useState } from "react";
import "./Project.css";
import { useMediaPredicate } from "react-media-hook";
export default function Project(props) {
  const smallerThan500 = useMediaPredicate("(max-width:500px)");
  const largerThan500 = useMediaPredicate("(min-width:500px)");
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

        {smallerThan500 && (
          <p className="description">Description: {description}</p>
        )}
      </div>
      <div>
        <p>
          <a
            className="project-link"
            href={site}
            target="_blank"
            rel="noreferrer"
          >
            <button className="send">Live Site</button>
          </a>
        </p>
        <p>
          <a
            className="project-link"
            href={repo}
            target="_blank"
            rel="noreferrer"
          >
            <button className="send">Code Repository</button>
          </a>
        </p>
        <div className="list-container">
          <p className="stack">Stack:</p>
          <ul>
            {stack.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>
        {largerThan500 && (
          <p className="description">Description: {description}</p>
        )}
      </div>
    </div>
  );
}

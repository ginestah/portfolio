export default function Project(props) {
  const { name, description, stack, site, repo, photos } = props;

  return (
    <div className="project-card">
      <h2 className="project-name">{name}</h2>
      {/* {photos.map((photo) => (
        <img className="project-photos" src={photo} />
      ))} */}
      <p>{description}</p>
      <p>Stack: {stack}</p>
      <a href={site} target="_blank" rel="noreferrer">
        Live Site
      </a>{" "}
      <a href={repo} target="_blank" rel="noreferrer">
        Code Repository
      </a>
    </div>
  );
}

import Project from "../components/Project";

export default function Projects() {
  const projects = [
    {
      name: "A Day in Space",
      description:
        "Access photo of the day from NASA API to display the photo of a users chosen day, as well as a description of the photo.",
      stack:
        "Html and CSS, with vanilla JS using ajax requests to an external API.",
      site: "https://ginestah.github.io/A-day-in-Space/",
      repo: "https://github.com/ginestah/A-day-in-Space",
      photos: [
        "https://res.cloudinary.com/dpbzq29kr/image/upload/v1617982805/Portfolio/Screen_Shot_2021-04-09_at_11.39.12_AM_j6plej.png",
        "https://res.cloudinary.com/dpbzq29kr/image/upload/v1617982804/Portfolio/Screen_Shot_2021-04-09_at_11.38.37_AM_xkixzu.png",
      ],
    },
    {
      name: "Spotters",
      description:
        "Spotter is a bouldering library for climbers. View problems that others have posted, the difficulty of the climb, how they rated it, where it was located, and a description of the climb/beta(best moves to finish the climb). Rate the climbs if you've finished them, and search for climbs in a specific area.",
      stack:
        "React SPA frontend, utilizing airtable API to store and retrieve records, full CRUD capabilities, but delete left off to retain records",
      site: "https://spotters.netlify.app/",
      repo: "https://github.com/ginestah/spotter",
      photos: [
        "https://res.cloudinary.com/dpbzq29kr/image/upload/v1617982937/Portfolio/Screen_Shot_2021-04-09_at_11.41.41_AM_ygjpjh.png",
        "https://res.cloudinary.com/dpbzq29kr/image/upload/v1617982936/Portfolio/Screen_Shot_2021-04-09_at_11.41.13_AM_g9aqou.png",
      ],
    },
    {
      name: "Reventa",
      description:
        "Community furniture resale app, users are able to add postings, edit/delete their own postings but not others. If visiting as a guest you can view postings but in order to see contact info for a seller or make a listing you must create an account or log into an existing account.",
      stack:
        "Full MERN stack app, React frontend, Express backend, with full CRUD and auth, and MongoDB for record storage. Lead the github repo managing pull requests and merge conflicts for a team of 3.",
      site: "https://reventa.netlify.app/",
      repo: "https://github.com/ginestah/reventa",
      photos: [
        "https://res.cloudinary.com/dpbzq29kr/image/upload/v1617983086/Portfolio/Screen_Shot_2021-04-09_at_11.44.12_AM_bviolb.png",
        "https://res.cloudinary.com/dpbzq29kr/image/upload/v1617983085/Portfolio/Screen_Shot_2021-04-09_at_11.43.27_AM_actmyu.png",
        "https://res.cloudinary.com/dpbzq29kr/image/upload/v1617983085/Portfolio/Screen_Shot_2021-04-09_at_11.44.31_AM_wgpmro.png",
      ],
    },
    {
      name: "CrashPad",
      description:
        "CrashPad is a community house sharing experience for climbers, and outdoorsy people. The goal is to create a space where you can find a place to crash around the country when visiting crags outside of your local area. Users will have the ability to make an account, and add their home as a CrashPad for others to crash at. Users can search for a crashpad by location, and contact the host to negotiate a time to stay and for how long, pricing can be negotiated, or trade for cooking/cleaning or work",
      stack:
        "React SPA frontend, with Rails backend, and PostgreSQL database. Full CRUD and Auth, with RESTful API backend.",
      site: "https://crashpad.netlify.app/",
      repo: "https://github.com/ginestah/CrashPad",
      photos: [
        "https://res.cloudinary.com/dpbzq29kr/image/upload/v1617983293/Portfolio/Screen_Shot_2021-04-09_at_11.47.54_AM_rwygwl.png",
        "https://res.cloudinary.com/dpbzq29kr/image/upload/v1617983295/Portfolio/Screen_Shot_2021-04-09_at_11.47.35_AM_emozsk.png",
        "https://res.cloudinary.com/dpbzq29kr/image/upload/v1617983296/Portfolio/Screen_Shot_2021-04-09_at_11.46.48_AM_orbpor.png",
      ],
    },
  ];
  return (
    <div className="project-container">
      {projects.reverse().map((project, index) => (
        <Project
          name={project.name}
          description={project.description}
          stack={project.stack}
          site={project.site}
          repo={project.repo}
          photos={project.photos}
          key={index}
        />
      ))}
    </div>
  );
}

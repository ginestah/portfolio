import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <img
        className="headshot"
        src="https://res.cloudinary.com/dpbzq29kr/image/upload/v1623975374/Portfolio/headshot_oahbh0.jpg"
        alt="headshot"
      />
      <h1 className="title">Hey! My name is Huck.</h1>

      <main className="about-me">
        <br />I am a software engineer at{" "}
        <a
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
          rel="noreferrer"
          href="https://www.meltwater.com/en"
        >
          Meltwater</a>, where I develop scalable, monitored, cloud-based AWS architecture
        utilizing resources including Lambda, API Gateway, SQS, DynamoDB, S3,
        CloudWatch, CI. Build front-end applications with Angular, React, and
        framework-agnostic components. I am a team player who loves pair
        programming and working to meet goals.
        <br />
        <br /> With a B.S. in Conservation Biology and a background in climbing
        instruction, I bring a detail-oriented, driven, and communicative
        personality to software development. I leverage my experience in
        teaching and science to break down information, teach complex ideas and
        effectively test and troubleshoot.
        <br />
      </main>
    </div>
  );
}

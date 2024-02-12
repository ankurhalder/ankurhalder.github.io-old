import personalInfo from "@/data/personalInfo";

function index() {
  return (
    <div>
      <h1>Ankur Halder</h1>
      <h2>
        <a href="https://ankurhalder.netlify.app/" target="__blank">
          Check out my outdated portfolio for now. I am working on a new one. It
          will be live soon.
        </a>
      </h2>
      <p>{JSON.stringify(personalInfo, null, 2)}</p>
    </div>
  );
}

export default index;

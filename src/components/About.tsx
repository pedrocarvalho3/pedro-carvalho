import me from "../images/me.png";

export function About() {
  return (
    <div className="flex flex-col items-center text-left max-w-2xl mx-auto my-20 gap-8 border-b-xl border-gray-500">
        <h1 className="text-gray-300 before:content-['01.'] before:mr-2 before:text-tiffany-blue text-3xl">
          About Me
        </h1>
      <p className="text-gray-500">
        Hi! My name is{" "}
        <a href="" className="text-tiffany-blue hover:text-gray-100">
          Pedro
        </a>{" "}
        and I like to create things that live on the internet. My interest in
        web development started in 2019, when I decided to try to follow in the
        footsteps of my uncle who works in the area at first I didn't take it
        seriously but soon in 2020 my interest increased and I got really good
        at{" "}
        <a href="" className="text-tiffany-blue hover:text-gray-100">
          HTML
        </a>{" "}
        and{" "}
        <a href="" className="text-tiffany-blue hover:text-gray-100">
          CSS
        </a>
        ! After making sure that this was what I wanted for my life, I had the
        privilege of taking several courses to specialize in this area, courses
        for example from{" "}
        <a href="" className="text-tiffany-blue hover:text-gray-100">
          Rocketseat
        </a>{" "}
        and{" "}
        <a href="" className="text-tiffany-blue hover:text-gray-100">
          Udemy
        </a>
        , in addition to several{" "}
        <a href="" className="text-tiffany-blue hover:text-gray-100">
          Youtube
        </a> {" "}
        projects, today my main focus is on evolving even more my knowledge,
        because I love to study and learn new things, so who knows, in the
        future, I can be part of something great within this area.
      </p>
      <img src={me} alt="Me" className="w-64 rounded-2xl bg-tiffany-blue hover:-translate-y-2 hover:shadow-lg cursor-pointer" />
    </div>
  );
}

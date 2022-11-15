import { At, GithubLogo, LinkedinLogo, Star } from "phosphor-react";
import { useState } from "react";

export function Contact() {
  const [count, setCount] = useState(0);

  function handleLike() {
    setCount(count + 1);
  }

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto gap-20 my-4">
      <h1 className="text-gray-300 before:content-['04.'] before:mr-2 before:text-tiffany-blue text-3xl">
        Contact
      </h1>
      <div className="flex flex-row items-center space-evenly gap-4 text-gray-500">
        <a href="">
          <GithubLogo size={50} />
        </a>
        <a href="">
          <At size={50} />
        </a>
        <a href="">
          <LinkedinLogo size={50} />
        </a>
      </div>
      <footer className="flex flex-col items-center text-tiffany-blue gap-4">
        <p className=" text-md">Designed & Built by Pedro Carvalho</p>
        <div className="flex text-xl gap-2">
          <button>
            <Star size={24} onClick={handleLike} />
          </button>
          <p>{count}</p>
        </div>
      </footer>
    </div>
  );
}

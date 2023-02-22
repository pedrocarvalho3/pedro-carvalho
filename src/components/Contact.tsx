import { At, GithubLogo, InstagramLogo, LinkedinLogo, Star } from "phosphor-react";
import { useState } from "react";

export function Contact() {
  const [count, setCount] = useState(0);

  function handleLike() {
    setCount(count + 1);
  }

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto gap-20 my-4">
        <h1 className="text-gray-300 before:content-['04.'] before:mr-2 before:text-tiffany-blue text-3xl border-b-[1px] border-gray-500 w-full">
          Contact
        </h1>
      <div className="flex flex-row items-center space-evenly gap-6 text-gray-500">
        <a href="https://github.com/ThePdrXx" target='_blank'>
          <GithubLogo size={50} />
        </a>
        <a href="pdrpvp0310@gmail.com" target='_blank'>
          <At size={50} />
        </a>
        <a href="https://www.linkedin.com/in/pedro-carvalho-079920233/" target='_blank'>
          <LinkedinLogo size={50} />
        </a>
        <a href="https://www.instagram.com/pdr_vinic/" target='_blank'>
          <InstagramLogo size={50} />
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

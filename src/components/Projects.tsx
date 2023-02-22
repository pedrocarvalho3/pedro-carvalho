
type ProjectsProps = {
  projects: {
    id: number;
    name: string;
    image: string;
    url: string;
  }[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="flex flex-col items-center max-w-2xl my-28 mx-auto gap-8">
      <h1 className="text-gray-300 before:content-['03.'] before:mr-2 before:text-tiffany-blue text-3xl border-b-[1px] border-gray-500 w-full">
        Projects
      </h1>

      {projects.map((project) => (
        <div
          key={project.id}
        >
          <a href={project.url} target='_blank'
            className="flex flex-col cursor-pointer bg-gray-100 rounded items-center hover:-translate-y-2 hover:-translate-x-2 hover:shadow-lg transition-all">
            <img src={project.image} alt="Tela Inicial do Projeto" className="rounded w-full" />
            <h1 className="text-black">{project.name}</h1>
          </a>
        </div>
      ))}
    </div>
  );
}

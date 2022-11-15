import nlw from '../images/nlw.png'

export function Projects() {
  return (
    <div className="flex flex-col items-center max-w-2xl my-28 mx-auto gap-8">
      <h1 className="text-gray-300 before:content-['03.'] before:mr-2 before:text-tiffany-blue text-3xl">
        Projects
      </h1>

      <h2 className='text-xl text-tiffany-blue'>NLW eSports</h2>
      <div className='flex flex-col'>
        <img src={nlw} alt="Tela Inicial do Projeto"/>
      </div>
    </div>
  );
}

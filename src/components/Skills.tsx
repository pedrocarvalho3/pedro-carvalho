export function Skills() {
  return (
    <div className="flex flex-col text-left items-center max-w-2xl mx-auto my-32 gap-8">
      <h1 className="text-gray-300 before:content-['02.'] before:mr-2 before:text-tiffany-blue text-3xl">
        Skills
      </h1>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl text-gray-500">
          Responsive & Adaptive DesignStyling ArchitectureUI Maintenance
        </h2>

        <p className="text-tiffany-blue text-lg">
          - JavaScript (React, TypeScript, Next, Vite, Gatsby)
        </p>
        <p className="text-tiffany-blue text-lg">- HTML5</p>
        <p className="text-tiffany-blue text-lg">
          - CSS (Sass, FlexBox, Grid, Styled-components, Tailwind, Material Ui,
          Slitches)
        </p>

        <h2 className="text-2xl text-gray-500">Back-end Skills</h2>
        <p className="text-tiffany-blue text-lg">- NodeJs</p>
        <p className="text-tiffany-blue text-lg">- Java</p>
        <p className="text-tiffany-blue text-lg">- GraphQL</p>
        <p className="text-tiffany-blue text-lg">- SQL</p>
        <p className="text-tiffany-blue text-lg">- Postgress</p>
      </div>
    </div>
  );
}

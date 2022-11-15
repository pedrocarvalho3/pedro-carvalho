export function NavBar() {
  return (
    <nav className="text-[#C4CBCA] ">
      <ul className="flex flex-row justify-center gap-14 m-4 ">
        <li>
          <a href="#" className="hover:text-gray-100"><span className="text-tiffany-blue">01.</span> About Me</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-100"><span className="text-tiffany-blue">02.</span> Skills</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-100"><span className="text-tiffany-blue">03.</span> Projects</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-100"><span className="text-tiffany-blue">04.</span> Contact</a>
        </li>
      </ul>
    </nav>
  );
}

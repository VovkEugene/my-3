const Header = () => {
  return (
    <header>
      <div className="container m-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="logo">
            <h1 className="font-bold text-xl">
              <a href="#">Eugene Portfolio</a>
            </h1>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="text-gray-400 hover:text-white"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

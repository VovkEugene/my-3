import "./App.css";
import hero from "./assets/hero/01.jpg";
import heroBg from "./assets/hero/02.jpg";
import project1 from "./assets/projects/01.jpg";
import project2 from "./assets/projects/02.jpg";
import project3 from "./assets/projects/03.jpg";
import project4 from "./assets/projects/05.jpg";

function App() {
  return (
    <>
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
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white"
                  >
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
      <main>
        {/*--------- Hero section --------*/}
        <section>
          <div className="container m-auto mb-10 px-4 py-10 flex justify-center gap-10">
            <div>
              <h1 className="font-bold text-4xl mb-1">
                Hello, I'm
                <span className="text-red-400 text-6xl font-extrabold">
                  {" "}
                  Eugene
                </span>
                ,
              </h1>
              <h2 className="font-bold text-4xl mb-4 gradient-text">
                frontend developer.
              </h2>
              <p className="text-gray-400">
                And I'll get your business onlive the right way.
                <br />
                Are you looking for a professional developer to put your
                business online?
                <br />
                You've come to the right place! Hire me today!
              </p>
            </div>
            <div className="relative">
              <img
                src={hero}
                width={320}
                alt="Hero image"
                className="relative z-10 rounded-xl"
              />
              <img
                src={heroBg}
                width={320}
                alt="Hero image"
                className="absolute top-10 left-12 z-0 rounded-xl"
              />
            </div>
          </div>
        </section>
        {/*--------- Projects section -------*/}
        <section>
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <article className="border border-slate-500 rounded-md p-5 flex-1">
                <img src={project1} alt="First project image" />
                <h3 className="text-2xl font-semibold mt-8 mb-2">
                  First project
                </h3>
                <p className="text-sm text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Necessitatibus non quisquam facilis tenetur nesciunt, nobis
                  culpa accusamus, numquam laudantium quia dolores nulla
                  deleniti. Laborum nam earum non tempora voluptates est.
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="px-8 py-3 border border-slate-500 rounded-lg bg-gradient-to-t from-cyan-900 to-red-300 hover:from-blue-900 hover:to-red-200">
                    Live preview
                  </button>
                  <button className="px-8 py-3 border rounded-lg hover:border-slate-400 hover:text-slate-400">
                    Checkout github
                  </button>
                </div>
              </article>
              <article className="border border-slate-500 rounded-md p-5 flex-1">
                <img src={project2} alt="Second project image" />
                <h3 className="text-2xl font-semibold mt-8 mb-2">
                  Second project
                </h3>
                <p className="text-sm text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat delectus accusantium laudantium officia quasi voluptas
                  aspernatur at tempora saepe ea ipsa doloremque adipisci neque
                  dolorum atque, repellat optio voluptates architecto.
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="px-8 py-3 border border-slate-500 rounded-lg bg-gradient-to-t from-cyan-900 to-red-300 hover:from-blue-900 hover:to-red-200">
                    Live preview
                  </button>
                  <button className="px-8 py-3 border rounded-lg hover:border-slate-400 hover:text-slate-400">
                    Checkout github
                  </button>
                </div>
              </article>
            </div>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <article className="border border-slate-500 rounded-md p-5 flex-1">
                <img src={project3} alt="Third project image" />
                <h3 className="text-2xl font-semibold mt-8 mb-2">
                  Third project
                </h3>
                <p className="text-sm text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis provident cumque natus eligendi consequatur officia
                  unde atque molestias voluptatum. Porro aperiam quidem beatae
                  quas? Quia vel obcaecati soluta itaque explicabo.
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="px-8 py-3 border border-slate-500 rounded-lg bg-gradient-to-t from-cyan-900 to-red-300 hover:from-blue-900 hover:to-red-200">
                    Live preview
                  </button>
                  <button className="px-8 py-3 border rounded-lg hover:border-slate-400 hover:text-slate-400">
                    Checkout github
                  </button>
                </div>
              </article>
              <article className="border border-slate-500 rounded-md p-5 flex-1">
                <img src={project4} alt="Fourth project image" />
                <h3 className="text-2xl font-semibold mt-8 mb-2">
                  Fourth project
                </h3>
                <p className="text-sm text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, ex optio. Numquam aut nisi reprehenderit quas odit sint
                  ratione molestiae, amet accusamus natus sit earum dolorem
                  dolores qui enim officiis.
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="px-8 py-3 border border-slate-500 rounded-lg bg-gradient-to-t from-cyan-900 to-red-300 hover:from-blue-900 hover:to-red-200">
                    Live preview
                  </button>
                  <button className="px-8 py-3 border rounded-lg hover:border-slate-400 hover:text-slate-400">
                    Checkout github
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

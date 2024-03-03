import project1 from "../assets/projects/01.jpg";
import project2 from "../assets/projects/02.jpg";
import project3 from "../assets/projects/03.jpg";
import project4 from "../assets/projects/05.jpg";

const Projects = () => {
  return (
    <section>
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="flex flex-col sm:flex-row gap-10 mt-11">
          <article className="border border-slate-500 rounded-md p-5 flex-1">
            <img src={project1} alt="First project image" />
            <h3 className="text-2xl font-semibold mt-8 mb-2">First project</h3>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus non quisquam facilis tenetur nesciunt, nobis culpa
              accusamus, numquam laudantium quia dolores nulla deleniti. Laborum
              nam earum non tempora voluptates est.
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
            <h3 className="text-2xl font-semibold mt-8 mb-2">Second project</h3>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              delectus accusantium laudantium officia quasi voluptas aspernatur
              at tempora saepe ea ipsa doloremque adipisci neque dolorum atque,
              repellat optio voluptates architecto.
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
            <h3 className="text-2xl font-semibold mt-8 mb-2">Third project</h3>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              provident cumque natus eligendi consequatur officia unde atque
              molestias voluptatum. Porro aperiam quidem beatae quas? Quia vel
              obcaecati soluta itaque explicabo.
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
            <h3 className="text-2xl font-semibold mt-8 mb-2">Fourth project</h3>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ex
              optio. Numquam aut nisi reprehenderit quas odit sint ratione
              molestiae, amet accusamus natus sit earum dolorem dolores qui enim
              officiis.
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
  );
};

export default Projects;

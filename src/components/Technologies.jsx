const Technologies = () => {
  return (
    <section className="py-10" id="technologies">
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">Technologies</h2>
        <div className="mt-14">
          <div>
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">HTML</h2>
              <p className="text-gray-500">Advanced</p>
            </div>
            <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">CSS, Sass & Tailwind</h2>
              <p className="text-gray-500">Advanced</p>
            </div>
            <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">JavaScript</h2>
              <p className="text-gray-500">Advanced</p>
            </div>
            <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">React</h2>
              <p className="text-gray-500">Advanced</p>
            </div>
            <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

import hero from "../assets/hero/01.jpg";
import heroBg from "../assets/hero/02.jpg";

const Hero = () => {
  return (
    <section>
      <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col justify-center items-center sm:flex-row gap-10 text-center sm:text-left">
        <div>
          <h1 className="font-bold text-4xl mb-1">
            Hello, I'm
            <span className="text-red-400 text-6xl font-extrabold">
              {" "}
              Eugene
            </span>
            ,
          </h1>
          <h2 className="font-bold text-4xl mb-4 gradient-text running-text">
            frontend developer
          </h2>
          <p className="text-gray-400">
            And I'll get your business onlive the right way.
            <br />
            Are you looking for a professional developer to put your business
            online?
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
          {/* <img
            src={heroBg}
            width={320}
            alt="Hero image"
            className="absolute top-10 left-12 z-0 rounded-xl"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

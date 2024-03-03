import Facebook from "../assets/footer/facebook.svg";
import LinkedIn from "../assets/footer/linkedin.svg";
import Instagram from "../assets/footer/instagram.svg";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-700">
      <div className="container m-auto flex justify-between px-4 py-6">
        <div>
          <p className="text-gray-300 text-sm">Copyright @ 2023</p>
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <a>
                <img src={Facebook} className="size-5 hover:opacity-50" />
              </a>
            </li>
            <li>
              <a>
                <img src={LinkedIn} className="size-5 hover:opacity-50" />
              </a>
            </li>
            <li>
              <a>
                <img src={Instagram} className="size-5 hover:opacity-50" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

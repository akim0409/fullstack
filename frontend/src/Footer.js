import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-sky-900 px-12 py-8 sm:px-20 flex justify-center">
      <div className="max-w-5xl w-full">
        <div className="flex justify-between items-center ">
          <Link className="flex items-center cursor-pointer">
            <img
              className="w-12"
              src="https://raw.githubusercontent.com/Hey-Programmers/htmelle-demo-site/main/images/dog_logo.png"
              alt="Logo"
            />
            <div className="ml-2 text-xl sm:text-2xl font-semibold font-ubuntu text-orange-400">
              Bar<span className="text-sky-500">kr</span>
            </div>
          </Link>
          <div className="text-white">
            <a
              href="https://www.linkedin.com/in/autumn-k-a855a013b/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="text-2xl mr-4 fa-brands fa-linkedin hover:text-orange-400 cursor-pointer"></i>
            </a>
            <a
              href="https://github.com/akim0409"
              target="_blank"
              rel="noreferrer"
            >
              <i className="text-2xl fa-brands fa-github hover:text-orange-400 cursor-pointer"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between text-lg">
          <div className="text-slate-300 font-ubuntu flex justify-between">
            <div className="my-4">
              <div className="my-1 text-slate-50">Sitemap</div>
              <Link
                className="mr-4 my-1 font-light text-slate-400 hover:text-orange-400"
                to="/"
              >
                Dogs
              </Link>
              <Link
                className="mr-4 my-1 font-light text-slate-400 hover:text-orange-400"
                to="/dates"
              >
                Dates
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center font-ubuntu text-slate-400 text-sm font-light">
            <div>Ⓒ 2023 Barkr by Autumn Kim</div>
            <div>All treats reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

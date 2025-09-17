import { Armchair, Banknote, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";

const Footer = () => {
  return (
    <footer>
      <div className="footer_top max-h-[343px] w-full border-b border-[#e1e3e5] pt-[80px] pb-[60px]">
        <div className="lg:container mx-auto grid grid-cols-4 gap-8">
          {/* Left Section */}
          <div>
            {/* logo wrapper */}
            <div className="logo_wrapper mb-7">
              <Link
                to="/"
                className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2"
              >
                <Armchair size="2rem" color="#029fae" /> comforty
              </Link>
            </div>

            <p className="text-base text-[#272343] font-inter font-normal mb-4 max-w-[350px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              repudiandae itaque facere sed nostrum debitis veniam alias
              obcaecati dolores, culpa animi autem odio atque ducimus?
              Exercitationem quas necessitatibus
            </p>

            {/* Social icons */}
            <div className="footer-social flex items-center gap-3">
              {/* Facebook */}
              <a
                className="p-3 rounded-full border-[#007580] inline-block border-[1px]"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size="2rem" color="#1877F2" />
              </a>

              {/* Twitter */}
              <a
                className="p-3 rounded-full border-[#007580] inline-block border-[1px]"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size="2rem" color="#1DA1F2" />
              </a>

              {/* Instagram with gradient */}
              <a
                className="p-3 rounded-full border-[#007580] inline-block border-[1px]"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size="2rem" />
              </a>

              {/* YouTube */}
              <a
                className="p-3 rounded-full border-[#007580] inline-block border-[1px]"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialYoutube size="2rem" color="#FF0000" />
              </a>
            </div>
          </div>

          {/* Right Section - Categories */}
          <div className="footer_wrapper">
            <h3 className="text-xl text-[#272343] font-inter font-medium uppercase">
              category
            </h3>
            <ul className="space-y-2 mt-4">
              <li>
                <Link
                  to="/sofa"
                  className="text-base text-[#272343] font-inter font-normal capitalize"
                >
                  Sofa
                </Link>
              </li>
              <li>
                <Link
                  to="/armchair"
                  className="text-base text-[#272343] font-inter font-normal capitalize"
                >
                  armchair
                </Link>
              </li>
              <li>
                <Link
                  to="/wing-chair"
                  className="text-base text-[#272343] font-inter font-normal capitalize"
                >
                  wing Chair
                </Link>
              </li>
              <li>
                <Link
                  to="/desk-chair"
                  className="text-base text-[#272343] font-inter font-normal capitalize"
                >
                  desk chair
                </Link>
              </li>
              <li>
                <Link
                  to="/wooden-chair"
                  className="text-base text-[#272343] font-inter font-normal capitalize"
                >
                  wooden chair
                </Link>
              </li>
              <li>
                <Link
                  to="/park-bench"
                  className="text-base text-[#272343] font-inter font-normal capitalize"
                >
                  park bench
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer_wrapper">
            <h3 className="text-xl text-[#272343] font-inter font-medium uppercase ">
              support
            </h3>
            <ul className="space-y-2 mt-4">
              <li>
                <Link
                  to="/sofa"
                  className="text-base text-[#272343] font-inter font-normal capitalize"
                >
                  hepe & support
                </Link>
              </li>
              <li>
                <Link
                  to="/armchair"
                  className="text-base text-[#272343] font-inter font-normal capitalize"
                >
                  tearms & condition
                </Link>
              </li>
              <li>
                <Link
                  to="/wing-chair"
                  className="text-base text-[#272343] font-inter font-normal capitalize"
                >
                  privacy policy
                </Link>
              </li>
              <li>
                <Link
                  to="/desk-chair"
                  className="text-base text-[#272343] font-inter font-normal capitalize"
                >
                  help
                </Link>
              </li>
            </ul>
          </div>
          <div className="newsletter">
            <h3 className="text-xl text-[#272343] font-inter font-medium uppercase">
              newsletter
            </h3>
            <form
              action="#"
              className="max-w-[424px] w-full flex items-center gap-2"
            >
              <input
                type="email"
                placeholder="your Email..."
                className="max-w-[285px] w-full h-[46px]
                        border-[#ele3c5] border-[1px] rounded-lg pl-2"
              />
              <button
                type="submit"
                className="text-base text-white font-semibold capitalize
                        w-[127px] h-[46px] bg-[#007580] rounded-lg cursor-pointer "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer_bottom w-full h-[75px] flex items-center justify-center">
        <div className="lg:container mx-auto">
          <div className="flex items-center justify-between">
            <p className="text-base text-[#9a9caa] font-normal font-inter flex items-center gap-2">
              @ 2025 Blogy - Designed & Develop
              <span className="text-[#272343]">Lifeonthecode </span>
              <span className="flex items-center ml-[400px] gap-2 text-xl">Bank Note
              <Banknote size="2rem" className="text-[#029fae]" /></span>

              <span className="flex items-center  gap-2 text-xl">Credit Card
              <CreditCard size="2rem" className="text-[#029fae]" /></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

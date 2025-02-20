import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialMediaIcons() {
  return (
    <div className="w-full max-[410px]:px-4 flex flex-col items-center justify-center gap-8 py-12 sm:py-16 bg-[#f9fffe] bg-gradient-to-b from-[#e1fff8] to-white">
      <h2 className="text-2xl min-[512px]:text-3xl sm:text-4xl text-center font-benedict text-[#f93a97] text-shadow-sm shadow-[#64173c] tracking-wide">
        Síganos por
      </h2>
      <div className="flex items-center justify-center gap-4 min-[512px]:gap-6 lg:gap-8">
        {/* FACEBOOK */}
        <a
          href="https://www.facebook.com/people/Caribbean-Princess-Realty/100083177683200/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transition-transform ease-in-out duration-300 hover:scale-110"
          aria-label="Facebook icon link"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            color="#afe6d8"
            className="w-10 h-10"
          />
        </a>
        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/caribbeanprincessrealty/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transition-transform ease-in-out duration-300 hover:scale-110"
          aria-label="Instagram icon link"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            color="#afe6d8"
            className="w-10 h-10"
          />
        </a>
      </div>
    </div>
  );
}

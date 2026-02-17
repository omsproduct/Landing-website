import { SuitHeartFill } from "react-bootstrap-icons";

type SocialLink = {
  readonly src: string;
  readonly alt: string;
};

const socials: readonly SocialLink[] = [
  { src: "https://res.cloudinary.com/dflelt85r/image/upload/v1770185803/facebook_1_isocog.svg", alt: "Facebook" },
  { src: "https://res.cloudinary.com/dflelt85r/image/upload/v1770185806/instagram_1_rkkunj.svg", alt: "Instagram" },
  { src: "https://res.cloudinary.com/dflelt85r/image/upload/v1770185807/linkedin_1_b0kzsf.svg", alt: "LinkedIn" },
  { src: "https://res.cloudinary.com/dflelt85r/image/upload/v1770185807/twitter_1_pyckiv.svg", alt: "Twitter" },
  { src: "https://res.cloudinary.com/dflelt85r/image/upload/v1770185807/Symbol.svg_dpuht2.svg", alt: "Youtube" },
];

const Footer = () => {
  return (
    <footer className="relative w-full bg-white mt-16 sm:mt-24 lg:mt-32 px-4 sm:px-8 lg:px-16 py-10 sm:py-14">
      <div className="absolute bottom-[0%] right-0 w-[30vh] h-[30vh] bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)] rounded-full blur-3xl opacity-20" />
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-0">

          {/* Left: Logo + Socials */}
          <div className="space-y-8 col-span-2 flex flex-col items-center lg:items-start">
            <img
              src="https://res.cloudinary.com/dflelt85r/image/upload/v1770185805/Group_6357568_rcketl.svg"
              alt="OMS Logo"
              className="w-32 sm:w-36 lg:w-40 h-auto"
            />


            <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
              {socials.map((social) => (
                <a
                  key={social.alt}
                  href="#"
                  aria-label={social.alt}
                  className="
        w-10 h-10 sm:w-9 sm:h-9  // Slightly larger on mobile
        flex items-center justify-center
        rounded-full
        bg-gray-50
        text-[#1A202C]
        shadow-[2px_6px_10px_rgba(0,0,0,0.15)]
        transition-all duration-300
        cursor-pointer
        hover:scale-105
        hover:bg-white
        hover:shadow-[2px_6px_10px_rgba(84,62,210,0.5)]
        active:scale-95 // Add press effect on mobile
      "
                >
                  <img
                    src={social.src}
                    alt={social.alt}
                    className="w-3.5 h-3.5 sm:w-3 sm:h-3 object-contain"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>



            <p className="text-xs font-semibold text-[#7C7C7C]">
              © {new Date().getFullYear()} omslab.in, All rights reserved.
            </p>
          </div>

          {/* Middle: Access */}
          <div className="col-span-2 flex justify-around">
            <div className="">
              <h3 className="text-[#5E4DE1] text-2xl font-medium mb-4">
                Access
              </h3>
              <ul className="space-y-3 text-sm text-[#818181] font-medium">
                <li className="cursor-pointer hover:text-gray-600">
                  Disclaimer
                </li>
                <li className="cursor-pointer hover:text-gray-600">
                  Privacy & Policy
                </li>
                <li className="cursor-pointer hover:text-gray-600">
                  Terms of uses
                </li>
              </ul>
            </div>

            {/* Right: Contact */}
            <div>
              <h3 className="text-[#5E4DE1] text-2xl font-medium mb-4">
                Contact
              </h3>
              <ul className="space-y-3.5 text-sm text-[#818181] font-medium">
                <li className="space-y-1.25">
                  <span>Email</span>
                  <div className="text-gray-800 text-xs">
                    support@oms.org.in
                  </div>
                </li>
                <li className="space-y-1.25">
                  <span>Phone</span>
                  <div className="text-gray-800 text-xs">
                    +91 987654321
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 text-center text-base text-[#353535] font-medium">
          Made in India with&nbsp;
          <SuitHeartFill className="inline text-red-500 align-middle" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;

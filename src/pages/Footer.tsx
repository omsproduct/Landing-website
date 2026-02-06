import { SuitHeartFill } from "react-bootstrap-icons";

const socials = [
  { src: "https://res.cloudinary.com/dflelt85r/image/upload/v1770185803/facebook_1_isocog.svg", alt: "Facebook" },
  { src: "https://res.cloudinary.com/dflelt85r/image/upload/v1770185806/instagram_1_rkkunj.svg", alt: "Instagram" },
  { src: "https://res.cloudinary.com/dflelt85r/image/upload/v1770185807/linkedin_1_b0kzsf.svg", alt: "LinkedIn" },
  { src: "https://res.cloudinary.com/dflelt85r/image/upload/v1770185807/twitter_1_pyckiv.svg", alt: "Twitter" },
  { src: "https://res.cloudinary.com/dflelt85r/image/upload/v1770185807/Symbol.svg_dpuht2.svg", alt: "Youtube" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white mb-8 px-38 mt-40">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Left: Logo + Socials */}
          <div className="space-y-8 col-span-2">
            <div className="flex items-center">
              <img
                src="https://res.cloudinary.com/dflelt85r/image/upload/v1770185805/Group_6357568_rcketl.svg"
                alt="OMS Logo"
              />
            </div>

            <div className="flex items-center gap-3">
              {socials.map((social, index) => (
                <button
                  key={index}
                  aria-label={social.alt}
                  className="
                    w-9 h-9
                    flex items-center justify-center
                    rounded-full
                    bg-gray-50
                    text-[#1A202C]
                    shadow-[2px_6px_10px_rgba(0,0,0,0.15)]
                    transition
                    cursor-pointer
                    hover:scale-105
                    hover:bg-white
                    hover:shadow-[2px_6px_10px_rgba(84,62,210,0.5)]
                  "
                >
                  <img
                    src={social.src}
                    alt={social.alt}
                    className="w-3 h-3 object-contain"
                  />
                </button>
              ))}
            </div>

        

            <p className="text-xs font-semibold text-[#7C7C7C]">
              © {new Date().getFullYear()} omslab.in, All rights reserved.
            </p>
          </div>

          {/* Middle: Access */}
          <div>
            <h3 className="text-[#5E4DE1] font-semibold mb-4">
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
            <h3 className="text-[#5E4DE1] font-semibold mb-4">
              Contact
            </h3>
            <ul className="space-y-3.5 text-sm text-[#818181] font-medium">
              <li className="space-y-1.25">
                <span>Email</span>
                <div className="text-gray-800">
                  support@oms.org.in
                </div>
              </li>
              <li className="space-y-1.25">
                <span>Phone</span>
                <div className="text-gray-800">
                  +91 987654321
                </div>
              </li>
            </ul>
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

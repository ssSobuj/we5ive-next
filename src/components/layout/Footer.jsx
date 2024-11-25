import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-10 lg:flex lg:justify-between lg:items-start">
        {/* Logo and Description */}
        <div className="mb-6 lg:mb-0">
          <img src="/images/logo2.png" alt="We5ive Logo" className="mb-4" />
          <p className="text-gray-400 text-sm lg:w-2/3">
            Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam
            unde quae qui quasi mollitia tenetur. Dicta explicabo est
            consectetur maxime quos fugit velit assumenda est.
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-2">
            Sign Up For Our Newsletter!
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Get notified about updates and be the first to get early access to
            new Podcast episodes.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 rounded-l-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
            />
            <button className="bg-purple-500 hover:bg-purple-600 transition-colors text-white px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-900">
        <div className="container mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          {/* Contact Us */}
          <div>
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <p className="text-gray-400 text-sm">support@we5ive.com</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-2">About Us</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Privacy Policy</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-2">Social Link</h4>
            <div className="flex justify-center md:justify-start space-x-3">
              <Link
                href="facebook.com"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
              >
                <Image
                  src="/images/social/facebook.png"
                  width={24}
                  height={24}
                  alt="social icon"
                />{" "}
                {/* Replace with appropriate icons */}
              </Link>
              <Link
                href="twitter.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Image
                  src="/images/social/twitter.png"
                  width={24}
                  height={24}
                  alt="social icon"
                />{" "}
              </Link>
              <Link
                href="linkedin.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Image
                  src="/images/social/linkedin.png"
                  width={24}
                  height={24}
                  alt="social icon"
                />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-purple-500 text-center text-sm py-4">
        <p>© 2024 | We5ive</p>
      </div>
    </footer>
  );
};

export default Footer;


import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1B1B1B] text-white px-6 py-10 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/coffee-logo.png" alt="Espresso Emporium" className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Espresso Emporium</h2>
          </div>
          <p className="text-sm mb-6">
            Always ready to be your friend. Come & Contact with us to have your memorable moments to share with your best companion.
          </p>
          <div className="space-y-2 text-sm">
            <p><strong>Phone:</strong> +88 01533 333 333</p>
            <p><strong>Email:</strong> info@gmail.com</p>
            <p><strong>Address:</strong> 72, Wall Street, King Road, Dhaka</p>
          </div>
          <div className="flex gap-4 mt-6">
            <FaFacebookF className="hover:text-[#F4C430] cursor-pointer" />
            <FaTwitter className="hover:text-[#F4C430] cursor-pointer" />
            <FaInstagram className="hover:text-[#F4C430] cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#F4C430] cursor-pointer" />
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full bg-[#2C2C2C] text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full bg-[#2C2C2C] text-white"
            />
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered w-full bg-[#2C2C2C] text-white"
              rows="4"
            ></textarea>
            <button className="btn bg-[#F4C430] text-black hover:bg-[#e0b020] w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import Image from "next/image";
import { getImgPath } from "@/utils/image";

const Footer = () => {
  const products = [
    { label: "SystemMindz", href: "https://systemmindz.com" },
    { label: "KareerGrowth", href: "https://kareergrowth.com" },
  ];

  const socialLinks = [
    { platform: "instagram", icon: "/images/icon/instagram-icon.svg", href: "https://www.instagram.com/sharan._09/" },
    { platform: "facebook", icon: "/images/icon/facebook-icon.svg", href: "https://www.facebook.com/p/Sharan-M-Neeli-100013746105869/" },
    { platform: "linkedin", icon: "/images/icon/linkedin-icon.svg", href: "https://www.linkedin.com/in/sharanm09/" },
  ];

  return (
    <footer className="bg-black text-white py-12 sm:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Left Section - Brand & Newsletter */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">Sharan M Neeli</h2>
              <p className="text-gray-400 text-sm">
                Full Stack Developer passionate about building practical digital products.
              </p>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <Image
                    src={social.icon}
                    alt={social.platform}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Center Section - Products */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="flex flex-col gap-2">
                {products.map((product) => (
                  <li key={product.label}>
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      {product.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section - Contact */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
              <p className="text-gray-400 text-sm mb-4">
                Feel free to reach out for collaborations or a casual conversation.
              </p>
              <a
                href="mailto:sharanmneeli09@gmail.com"
                className="text-primary font-semibold text-lg hover:opacity-80 transition-opacity inline-block"
              >
                sharanmneeli09@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-center text-sm">
            © 2025 Sharan M Neeli ❤️ All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

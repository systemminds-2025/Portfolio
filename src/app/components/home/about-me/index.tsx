import { getImgPath } from "@/utils/image";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <Image
            src={getImgPath("/images/home/about-me/resume-bg-img.svg")}
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>About Me</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div className="w-[303px] h-[440px] hidden lg:flex">
                <Image
                  src={getImgPath("/images/home/about-me/about-banner-img.svg")}
                  alt="about-banner"
                  width={303}
                  height={440}
                  className="w-full h-full"
                />
              </div>

              <div className="w-full lg:max-w-2xl flex-1">
                <p>
                  I am Sharan M Neeli, a Full Stack Developer focused on building
                  scalable web applications with Java and the Spring ecosystem.
                  I design robust backend systems, develop high-performance
                  RESTful APIs, and build responsive frontend experiences using
                  React.js and Tailwind CSS. My work includes secure
                  authentication, system architecture, and practical AI-powered
                  automation, with production deployments on cloud platforms
                  like GCP Cloud Run and DigitalOcean.
                </p>

                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href="mailto:sharanmneeli09@gmail.com"
                    className="inline-flex items-center gap-2 text-base md:text-lg text-black hover:text-primary transition-colors"
                  >
                    <Image
                      src={getImgPath("/images/icon/mail-icon.svg")}
                      alt="email"
                      width={24}
                      height={24}
                    />
                    sharanmneeli09@gmail.com
                  </a>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href="https://www.instagram.com/sharan._09/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-base text-black hover:text-primary transition-colors"
                    >
                      <Image
                        src={getImgPath("/images/icon/instagram-icon.svg")}
                        alt="instagram"
                        width={24}
                        height={24}
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/p/Sharan-M-Neeli-100013746105869/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-base text-black hover:text-primary transition-colors"
                    >
                      <Image
                        src={getImgPath("/images/icon/facebook-icon.svg")}
                        alt="facebook"
                        width={24}
                        height={24}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sharanm09/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-base text-black hover:text-primary transition-colors"
                    >
                      <Image
                        src={getImgPath("/images/icon/linkedin-icon.svg")}
                        alt="linkedin"
                        width={24}
                        height={24}
                      />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-3 py-6 xl:py-10 gap-5 border-b border-mistGray">
                  {[
                    { count: "2.5+", label: "Years of experience" },
                    { count: "12+", label: "Happy Clients" },
                    { count: "24+", label: "Project Completed" },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg text-black">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-3.5">
                    <Image
                      src={getImgPath("/images/icon/lang-icon.svg")}
                      alt="lang-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base xl:text-xl text-black">Language</p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {["English", "Kannada", "Hindi", "Telugu"].map((lang) => (
                      <p
                        key={lang}
                        className="bg-white py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-base xl:text-xl"
                      >
                        {lang}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

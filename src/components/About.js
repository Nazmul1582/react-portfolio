import image from "../assets/images/nazmul-hasan.jpg";
import { layout } from "../style";
import resume from "../assets/resume.pdf";

const About = () => {
  return (
    <section id="about" className={`${layout.section} scroll-m-20`}>
      <h2 className="heading">About Me</h2>
      <div className={`${layout.sectionFlex}`}>
        <div className="flex-1">
          <div className="mx-auto about-img-bg w-60 h-72 rounded-xl">
            <img
              className="max-w-full w-60 h-72 object-cover rotate-12 hover:rotate-0 duration-300 rounded-xl"
              src={image}
              alt="about"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="dark:text-slate-100">
            <h2 className="text-md font-bold">Hello!</h2>
            <p className="mt-2">
              This is Md. Nazmul Hasan, I'm a Front-end Web Developer. I am a
              non-CSE student. But I love to code. So, I am learning
              programming. I am working with React JS and Tailwind CSS. I also
              have experience in developing static websites using HTML5, CSS3,
              and JavaScript.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 list-none my-5">
              <div className="">
                <li>
                  <span className="text-amber-500"> Age: </span>24
                </li>
                <li>
                  <span className="text-amber-500">Gender: </span>Male
                </li>
                <li>
                  <span className="text-amber-500">Experience: </span>1 year
                </li>
              </div>
              <div className="">
                <li>
                  <span className="text-amber-500">Phone: </span>+8801828347394
                </li>
                <li>
                  <span className="text-amber-500">Email: </span>
                  nazmulhasan@gmail.com
                </li>
                <li>
                  <span className="text-amber-500">Address: </span>Cumilla,
                  Bangladesh
                </li>
              </div>
            </div>
            <a className="button" href={resume} download="resume">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

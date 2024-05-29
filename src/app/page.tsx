import Image from "next/image";
import heroImage from "../assets/images/hero-image.png";
import heroImage1 from "../assets/images/hero-image-1.png";

import servicesIcon1 from "../assets/images/services-icon-1.svg";
import servicesIcon2 from "../assets/images/services-icon-2.svg";
import servicesIcon3 from "../assets/images/services-icon-3.svg";
import servicesIcon4 from "../assets/images/services-icon-7.svg";
import servicesIcon5 from "../assets/images/services-icon-8.svg";

import project1 from "../assets/images/project-1.webp";

import htmlLogo from "../assets/images/htmllogo.png";
import cssLogo from "../assets/images/csslogo.png";
import jsLogo from "../assets/images/jslogo.png";
import reactLogo from "../assets/images/reactlogo.png";
import reduxLogo from "../assets/images/reduxlogo.png";
import awsLogo from "../assets/images/awsLogo.svg";
import bootstrapLogo from "../assets/images/bootstraplogo.png";
import canvaLogo from "../assets/images/canvalogo.png";
import cLogo from "../assets/images/clogo.png";
import figmaLogo from "../assets/images/figmalogo.png";
import githubLogo from "../assets/images/githublogo.png";
import gitLogo from "../assets/images/gitlogo.png";
import javaLogo from "../assets/images/javalogo.png";
import jqLogo from "../assets/images/jqlogo.png";
import mongoLogo from "../assets/images/mongologo.png";
import mysqlLogo from "../assets/images/mysqllogo.png";
import nodeLogo from "../assets/images/nodelogo.png";
import pythonLogo from "../assets/images/pythonlogo.png";
import tailwindLogo from "../assets/images/tailwindlogo.png";
import ubuntuLogo from "../assets/images/ubuntulogo.png";
import vsLogo from "../assets/images/vslogo.png";
import expressLogo from "../assets/images/expressJsLogo.png";
import nextjsLogo from "../assets/images/nextjslogo.png";
import nextjsSvgLogo from "../assets/images/nextjs-logo.svg";
import typeScriptLogo from "../assets/images/typeScriptlogo.png";
import phpLogo from "../assets/images/PHP-logo.svg";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      {/**================ Hero section start ==================*/}
      <section className="flex items-center justify-center" id="hero-section">
        <div className=" flex md:flex-row lg:flex-row flex-col md:w-9/12 lg:w-9/12 w-11/12 items-center min-h-screen md:pt-0 lg:pt-0 pt-16">
          <div className="md:w-1/2 lg:w-1/2 w-full">
            <h1 className="text-6xl font-semibold mb-12">
              👋 Hey there, It&#39;s
              <br />
              Hibbanur Rahman
            </h1>

            <p className="text-slate-700 font-medium md:pe-8 lg:pe-8 pe-0 text-justify">
              Passionate and driven ReactJS developer with a strong foundation
              in MERN Stack and PHP. Dedicated to creating dynamic and
              user-centric web applications. Eager to contribute my expertise in
              frontend frameworks, modern UI/UX design, and responsive
              development to a forward-thinking team, while continuously
              learning and growing in the ever-evolving world of web
              development.
            </p>
            <button className="text-white bg-black rounded-md p-3 mt-8 hover:animate-bounce hover:bg-slate-300 hover:text-black hover:border-2 hover:transition-all transition-all hover:duration-300 hover:ease-in-out duration-300 ease-in-out">
              Say Hello
            </button>
          </div>
          <div className="md:w-1/2 lg:w-1/2 w-full md:ps-8 lg:ps-8 mt-8 md:mt-0 lg:mt-0 flex md:justify-end lg:justify-end xl:justify-end sm:justify-center">
            <Image src={heroImage} alt="Hero Image" className="w-auto" />
          </div>
        </div>
      </section>

      {/**================ Services section start ==================*/}
      <div className="m-0 p-0 md:w-9/12 lg:w-9/12 w-11/12 mt-8 md:mt-0 lg:mt-0 ">
        <h1 className="text-5xl font-bold w-auto ">Provide Services 🛠</h1>
        <div className="flex flex-wrap w-full mt-16">
          <div className="md:w-2/6 lg:w-2/6 sm:w-full  md:p-2 lg:p-2 ps-0 mt-4 mb-4 ">
            <div className="card flex flex-col justify-center items-center border rounded-lg shadow-xl hover:shadow-2xl transition-all ease-in-out duration-200 hover:duration-200 bg-white p-8">
              <Image
                src={servicesIcon1}
                alt=""
                className="mb-8 "
                style={{ height: "70px", width: "70px" }}
              />
              <h4 className="text-2xl text-center font-medium mb-4">
                UX,UI Design
              </h4>

              <p className="text-justify text-slate-700 pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <div className="md:w-2/6 lg:w-2/6 sm:w-full  md:p-2 lg:p-2 sm:p-0  mt-4 mb-4 ">
            <div className="card flex flex-col justify-center items-center border rounded-lg shadow-xl hover:shadow-2xl transition-all ease-in-out duration-200 hover:duration-200 bg-white p-8">
              <Image
                src={servicesIcon2}
                alt=""
                className="mb-8"
                style={{ height: "70px", width: "70px" }}
              />
              <h4 className="text-2xl text-center font-medium mb-4">
                Web Design
              </h4>

              <p className="text-justify text-slate-700 pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <div className="md:w-2/6 lg:w-2/6 sm:w-full  md:p-2 lg:p-2 sm:p-0  mt-4 mb-4 ">
            <div className="card flex flex-col justify-center items-center border rounded-lg shadow-xl hover:shadow-2xl transition-all ease-in-out duration-200 hover:duration-200 bg-white p-8">
              <Image
                src={servicesIcon3}
                alt=""
                className="mb-8"
                style={{ height: "70px", width: "70px" }}
              />
              <h4 className="text-2xl text-center font-medium mb-4">
                UX Research
              </h4>

              <p className="text-justify text-slate-700 pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <div className="md:w-2/6 lg:w-2/6 sm:w-full  md:p-2 lg:p-2 sm:p-0  mt-4 mb-4 ">
            <div className="card flex flex-col justify-center items-center border rounded-lg shadow-xl hover:shadow-2xl transition-all ease-in-out duration-200 hover:duration-200 bg-white p-8">
              <Image
                src={servicesIcon4}
                alt=""
                className="mb-8"
                style={{ height: "70px", width: "70px" }}
              />
              <h4 className="text-2xl text-center font-medium mb-4">
                Print Design
              </h4>

              <p className="text-justify text-slate-700 pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <div className="md:w-2/6 lg:w-2/6 sm:w-full  md:p-2 lg:p-2 sm:p-0  mt-4 mb-4 ">
            <div className="card flex flex-col justify-center items-center border rounded-lg shadow-xl hover:shadow-2xl transition-all ease-in-out duration-200 hover:duration-200 bg-white p-8">
              <Image
                src={servicesIcon5}
                alt=""
                className="mb-8"
                style={{ height: "70px", width: "70px" }}
              />
              <h4 className="text-2xl text-center font-medium mb-4">
                Social Design
              </h4>

              <p className="text-justify text-slate-700 pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/**================ Projects section start ==================*/}
      <section className="flex items-center justify-center" id="project">
        <div className="m-0 p-0 md:w-9/12 lg:w-9/12 w-11/12 mt-8 md:mt-0 lg:mt-0">
          <h1 className=" mt-4 mb-8 text-5xl font-bold text-center">
            Latest projects
          </h1>

          <div className="mb-4 justify-center">
            <ul
              className="border-b border-gray-200 dark:border-gray-700  flex flex-wrap -mb-px text-sm font-medium text-center justify-center w-auto"
              id="default-tab"
              data-tabs-toggle="#default-tab-content"
              role="tablist"
            >
              <li className="me-2" role="presentation">
                <button
                  className="inline-block p-4 border-b-2 rounded-t-lg"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  All project
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  Design
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="settings-tab"
                  data-tabs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  UI
                </button>
              </li>
              <li role="presentation">
                <button
                  className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="contacts-tab"
                  data-tabs-target="#contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                >
                  Web
                </button>
              </li>
            </ul>
          </div>
          <div id="default-tab-content" className="w-full">
            <div
              className="hidden p-4  "
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="w-full flex flex-wrap">
                <div className="sm:w-full md:w-2/6 lg:w-2/6  xl:w-2/6 p-2">
                  <div className="card rounded-xl border shadow-lg p-4 bg-white ">
                    <div className="m-0 p-0 h-80 border rounded-lg overflow-hidden shadow-sm ">
                      <Image
                        src={project1}
                        alt=""
                        className="m-0 p-0 h-80 border rounded-lg overflow-hidden  hover:scale-125 transition-all duration-200"
                      />
                    </div>

                    <div className="content mt-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        Full Stack
                      </span>{" "}
                      <h5 className="text-2xl mt-4">
                        NextGenEdu: E-learning platform
                      </h5>
                      <p className="text-slate-700 font-light mt-4">
                        Develop a cutting-edge web-based e-learning platform.
                        Integrate the MERN Stack enhance user engagement and
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:w-full md:w-2/6 lg:w-2/6  xl:w-2/6 p-2">
                  <div className="card rounded-xl border shadow-lg p-4 bg-white ">
                    <div className="m-0 p-0 h-80 border rounded-lg overflow-hidden shadow-sm ">
                      <Image
                        src={project1}
                        alt=""
                        className="m-0 p-0 h-80 border rounded-lg overflow-hidden  hover:scale-125 transition-all duration-200"
                      />
                    </div>

                    <div className="content mt-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        Full Stack
                      </span>{" "}
                      <h5 className="text-2xl mt-4">
                        NextGenEdu: E-learning platform
                      </h5>
                      <p className="text-slate-700 font-light mt-4">
                        Develop a cutting-edge web-based e-learning platform.
                        Integrate the MERN Stack enhance user engagement and
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:w-full md:w-2/6 lg:w-2/6  xl:w-2/6 p-2">
                  <div className="card rounded-xl border shadow-lg p-4 bg-white ">
                    <div className="m-0 p-0 h-80 border rounded-lg overflow-hidden shadow-sm ">
                      <Image
                        src={project1}
                        alt=""
                        className="m-0 p-0 h-80 border rounded-lg overflow-hidden  hover:scale-125 transition-all duration-200"
                      />
                    </div>

                    <div className="content mt-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        Full Stack
                      </span>{" "}
                      <h5 className="text-2xl mt-4">
                        NextGenEdu: E-learning platform
                      </h5>
                      <p className="text-slate-700 font-light mt-4">
                        Develop a cutting-edge web-based e-learning platform.
                        Integrate the MERN Stack enhance user engagement and
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:w-full md:w-2/6 lg:w-2/6  xl:w-2/6 p-2">
                  <div className="card rounded-xl border shadow-lg p-4 bg-white ">
                    <div className="m-0 p-0 h-80 border rounded-lg overflow-hidden shadow-sm ">
                      <Image
                        src={project1}
                        alt=""
                        className="m-0 p-0 h-80 border rounded-lg overflow-hidden  hover:scale-125 transition-all duration-200"
                      />
                    </div>

                    <div className="content mt-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        Full Stack
                      </span>{" "}
                      <h5 className="text-2xl mt-4">
                        NextGenEdu: E-learning platform
                      </h5>
                      <p className="text-slate-700 font-light mt-4">
                        Develop a cutting-edge web-based e-learning platform.
                        Integrate the MERN Stack enhance user engagement and
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hidden p-4 rounded-lg"
              id="dashboard"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <div className="flex flex-wrap w-full">
                <div className="sm:w-full md:w-2/6 lg:w-2/6  xl:w-2/6 p-2">
                  <div className="card rounded-xl border shadow-lg p-4 bg-white ">
                    <div className="m-0 p-0 h-80 border rounded-lg overflow-hidden shadow-sm ">
                      <Image
                        src={project1}
                        alt=""
                        className="m-0 p-0 h-80 border rounded-lg overflow-hidden  hover:scale-125 transition-all duration-200"
                      />
                    </div>

                    <div className="content mt-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        Full Stack
                      </span>{" "}
                      <h5 className="text-2xl mt-4">
                        NextGenEdu: E-learning platform
                      </h5>
                      <p className="text-slate-700 font-light mt-4">
                        Develop a cutting-edge web-based e-learning platform.
                        Integrate the MERN Stack enhance user engagement and
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hidden p-4 rounded-lg"
              id="settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <div className="flex flex-wrap">
                <div className="sm:w-full md:w-2/6 lg:w-2/6  xl:w-2/6 p-2">
                  <div className="card rounded-xl border shadow-lg p-4 bg-white ">
                    <div className="m-0 p-0 h-80 border rounded-lg overflow-hidden shadow-sm ">
                      <Image
                        src={project1}
                        alt=""
                        className="m-0 p-0 h-80 border rounded-lg overflow-hidden  hover:scale-125 transition-all duration-200"
                      />
                    </div>

                    <div className="content mt-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        Full Stack
                      </span>{" "}
                      <h5 className="text-2xl mt-4">
                        NextGenEdu: E-learning platform
                      </h5>
                      <p className="text-slate-700 font-light mt-4">
                        Develop a cutting-edge web-based e-learning platform.
                        Integrate the MERN Stack enhance user engagement and
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:w-full md:w-2/6 lg:w-2/6  xl:w-2/6 p-2">
                  <div className="card rounded-xl border shadow-lg p-4 bg-white ">
                    <div className="m-0 p-0 h-80 border rounded-lg overflow-hidden shadow-sm ">
                      <Image
                        src={project1}
                        alt=""
                        className="m-0 p-0 h-80 border rounded-lg overflow-hidden  hover:scale-125 transition-all duration-200"
                      />
                    </div>

                    <div className="content mt-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        Full Stack
                      </span>{" "}
                      <h5 className="text-2xl mt-4">
                        NextGenEdu: E-learning platform
                      </h5>
                      <p className="text-slate-700 font-light mt-4">
                        Develop a cutting-edge web-based e-learning platform.
                        Integrate the MERN Stack enhance user engagement and
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hidden p-4 rounded-lg w-full"
              id="contacts"
              role="tabpanel"
              aria-labelledby="contacts-tab"
            >
              <div className="flex flex-wrap w-full">
                <div className="sm:w-full md:w-2/6 lg:w-2/6  xl:w-2/6 p-2">
                  <div className="card rounded-xl border shadow-lg p-4 bg-white ">
                    <div className="m-0 p-0 h-80 border rounded-lg overflow-hidden shadow-sm ">
                      <Image
                        src={project1}
                        alt=""
                        className="m-0 p-0 h-80 border rounded-lg overflow-hidden  hover:scale-125 transition-all duration-200"
                      />
                    </div>

                    <div className="content mt-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        Full Stack
                      </span>{" "}
                      <h5 className="text-2xl mt-4">
                        NextGenEdu: E-learning platform
                      </h5>
                      <p className="text-slate-700 font-light mt-4">
                        Develop a cutting-edge web-based e-learning platform.
                        Integrate the MERN Stack enhance user engagement and
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/**================= About us section ====================== */}
      <section
        className="flex items-center justify-center w-full pt-16 pb-16"
        id="about-us"
      >
        <div className="m-0  md:w-9/12 lg:w-9/12 w-11/12 mt-8 md:mt-0 lg:mt-0 shadow-2xl rounded-2xl bg-white p-12">
          <h3
            className=" mb-8 text-4xl font-bold text-clip w-auto"
            id="heading"
          >
            {" "}
            Resume
          </h3>
          <div className="flex justify-between md:flex-row lg:flex-row flex-col">
            <div className=" md:w-5/12 lg:w-5/12 xl:w-5/12 ">
              <p className="text-xl font-medium border-b-2 pb-3 text-slate-700">
                Work Experience
              </p>
              <h5 className="m-0 p-0 text-xl font-semibold mt-8 mb-3">
                Meity Project MANUU
              </h5>
              <p className="text-sm text-slate-700">Web developer Intern</p>
              <p className="text-sm text-slate-700">March 2024 - current</p>
              <h5 className="m-0 p-0 text-xl font-semibold mt-8 mb-3">
                Meity Project MANUU
              </h5>
              <p className="text-sm text-slate-700">Web developer Intern</p>
              <p className="text-sm text-slate-700">
                March 2023 - December 2023
              </p>
            </div>
            <div className="md:w-5/12 lg:w-5/12 xl:w-5/12 md:mt-0 lg:mt-0 mt-8">
              <p className="text-xl font-medium border-b-2 pb-3 text-slate-700">
                Education
              </p>
              <h5 className="m-0 p-0 text-xl font-semibold mt-8 mb-3">
                Maulana Azad National Urdu University
              </h5>
              <p className="text-sm text-slate-700">Hyderabad, Telangana</p>
              <p className="text-sm text-slate-700">
                B.tech - Computer Science and Information Technology
              </p>
              <p className="text-sm text-slate-700">August 2021 - April 2025</p>
              <p className="text-sm text-slate-700">CGPA:- 9.08 out of 10</p>

              <h5 className="m-0 p-0 text-xl font-semibold mt-8 mb-3">
                Al-Irfan Residential School
              </h5>
              <p className="text-sm text-slate-700">Aurangabad, Maharastra</p>
              <p className="text-sm text-slate-700">
                Intermediate - PCM(Physics, Chemistry, Mathematics)
              </p>
              <p className="text-sm text-slate-700">March 2019 - April 2021</p>
              <p className="text-sm text-slate-700">Percentage: 85%</p>

              <h5 className="m-0 p-0 text-xl font-semibold mt-8 mb-3">
                +2 M.K.J High School
              </h5>
              <p className="text-sm text-slate-700">Darbhanga, Bihar</p>
              <p className="text-sm text-slate-700">Matriculation - BSEB</p>
              <p className="text-sm text-slate-700">
                March 2018 - February 2019
              </p>
              <p className="text-sm text-slate-700">Percentage: 76.2%</p>
            </div>
          </div>
          <div className="flex flex-col mt-16 flex-wrap justify-center items-center">
            <p className="text-xl font-medium border-b-2 pb-3 text-slate-700 text-center">
              Tech Skills
            </p>

            <div className="flex flex-wrap justify-center mt-8">
              <div
                data-tooltip-target="html-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={htmlLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="html-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                HTML
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="css-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={cssLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="css-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                CSS
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="js-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={jsLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="js-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                JavaScript
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="react-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={reactLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="react-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                ReactJs
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="redux-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={reduxLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="redux-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Redux-toolkit
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="aws-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={awsLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="aws-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                AWS
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="bootstrap-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={bootstrapLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="bootstrap-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Bootstrap
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="canva-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={canvaLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="canva-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Canva
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="c-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={cLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="c-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                C programming
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="figma-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={figmaLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="figma-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Figma
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="git-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={gitLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="git-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Git
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="github-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={githubLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="github-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Github
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="java-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={javaLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="java-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Java
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="jq-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={jqLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="jq-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Jquery
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="mongo-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={mongoLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="mongo-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                MongoDB
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="mysql-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={mysqlLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="mysql-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                MySQL
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="node-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={nodeLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="node-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Nodejs
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="python-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={pythonLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="python-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Python
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="tailwind-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={tailwindLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="tailwind-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Tailwind CSS
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="ubuntu-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={ubuntuLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="ubuntu-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Ubuntu OS
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="vs-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={vsLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="vs-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                VS Code Editor
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="express-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={expressLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="express-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                ExpressJs
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="next-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={nextjsLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="next-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                NextJs
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="type-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={typeScriptLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="type-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                TypeScript
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                data-tooltip-target="php-logo"
                className="icon flex items-center justify-center m-2 border-1 rounded-2xl shadow-xl border p-1"
                style={{ height: "80px", width: "80px" }}
              >
                <Image src={phpLogo} alt="" className="m-0 p-0" />
              </div>
              <div
                id="php-logo"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                PHP
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/**=================== footer section ======================== */}
      <section
        className="flex items-center justify-center w-full pt-16 pb-16"
        id="last-section"
      >
        <div className="m-0  md:w-9/12 lg:w-9/12 w-11/12 mt-8 md:mt-32 lg:mt-32 p-12 flex flex-col justify-center items-center ">
          <h1 className="text-6xl text-center font-bold">
            Have a project in mind?
          </h1>
          <h1 className="text-6xl text-center font-bold">
            Let&#39;s get to work.👋📫
          </h1>
          <button className="mt-8 text-white bg-black rounded-md shadow-lg m-0 py-3 px-3 text-xl flex items-center justify-center w-auto">
            Say Hello <i className="bi bi-arrow-up-right"></i>
          </button>
          <div className="flex flex-row justify-between flex-wrap border-t-2 w-full pt-12 mt-64">
            <div className="flex flex-wrap">
              <div className="s-icon flex justify-center items-center border rounded-full m-0 p-0 h-10 w-10 me-2">
                <i className="bi bi-facebook m-0 p-0 text-2xl"></i>
              </div>
              <div className="s-icon flex justify-center items-center border rounded-full m-0 p-0 h-10 w-10 ms-2 me-2">
                <i className="bi bi-linkedin m-0 p-0 text-2xl"></i>
              </div>
              <div className="s-icon flex justify-center items-center border rounded-full m-0 p-0 h-10 w-10 ms-2 me-2">
                <i className="bi bi-github m-0 p-0 text-2xl"></i>
              </div>
              <div className="s-icon flex justify-center items-center border rounded-full m-0 p-0 h-10 w-10 ms-2 me-2">
                <i className="bi bi-twitter-x m-0 p-0 text-2xl"></i>
              </div>
              <div className="s-icon flex justify-center items-center border rounded-full m-0 p-0 h-10 w-10 ms-2 me-2">
                <i className="bi bi-instagram m-0 p-0 text-2xl"></i>
              </div>
            </div>
            <p className="m-0 p-0 text-slate-700 w-auto mt-8 md:mt-0 lg:mt-0 ">© copy rights reserved 2024 to Hibbanur Rahman</p>
          </div>
        </div>
      </section>
    </main>
  );
}

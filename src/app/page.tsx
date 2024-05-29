import Image from "next/image";
import heroImage from "../assets/images/hero-image.png";
import heroImage1 from "../assets/images/hero-image-1.png";

import servicesIcon1 from "../assets/images/services-icon-1.svg";
import servicesIcon2 from "../assets/images/services-icon-2.svg";
import servicesIcon3 from "../assets/images/services-icon-3.svg";
import servicesIcon4 from "../assets/images/services-icon-7.svg";
import servicesIcon5 from "../assets/images/services-icon-8.svg";

import project1 from "../assets/images/project-1.webp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      {/**================ Hero section start ==================*/}
      <div className=" flex md:flex-row lg:flex-row flex-col md:w-9/12 lg:w-9/12 w-11/12 items-center min-h-screen md:pt-0 lg:pt-0 pt-16">
        <div className="md:w-1/2 lg:w-1/2 w-full">
          <h1 className="text-6xl font-semibold mb-12">
            👋 Hey there, It&#39;s
            <br />
            Hibbanur Rahman
          </h1>

          <p className="text-slate-700 font-medium md:pe-8 lg:pe-8 pe-0 text-justify">
            Passionate and driven ReactJS developer with a strong foundation in
            MERN Stack and PHP. Dedicated to creating dynamic and user-centric
            web applications. Eager to contribute my expertise in frontend
            frameworks, modern UI/UX design, and responsive development to a
            forward-thinking team, while continuously learning and growing in
            the ever-evolving world of web development.
          </p>
          <button className="text-white bg-black rounded-md p-3 mt-8 hover:animate-bounce hover:bg-slate-300 hover:text-black hover:border-2 hover:transition-all transition-all hover:duration-300 hover:ease-in-out duration-300 ease-in-out">
            Say Hello
          </button>
        </div>
        <div className="md:w-1/2 lg:w-1/2 w-full md:ps-8 lg:ps-8 mt-8 md:mt-0 lg:mt-0 flex md:justify-end lg:justify-end xl:justify-end sm:justify-center">
          <Image src={heroImage1} alt="Hero Image" className="w-auto" />
        </div>
      </div>

      {/**================ Services section start ==================*/}
      <div className="m-0 p-0 md:w-9/12 lg:w-9/12 w-11/12 mt-8 md:mt-0 lg:mt-0 ">
        <h1 className="text-5xl font-bold w-auto ">Provide Services 🛠</h1>
        <div className="flex flex-wrap w-full mt-16">
          <div className="md:w-2/6 lg:w-2/6 sm:w-full  md:p-2 lg:p-2 ps-0 mt-4 mb-4 ">
            <div className="card flex flex-col justify-center items-center border rounded-lg shadow-xl hover:shadow-2xl transition-all ease-in-out duration-200 hover:duration-200 bg-white p-8">
              <Image
                src={servicesIcon1}
                alt=""
                className="mb-8"
                style={{ height: "70px", width: "70px" }}
              />
              <h4 className="text-2xl text-center font-medium mb-4">
                UX,UI Design
              </h4>

              <p className="text-justify text-secondary pt-4">
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

              <p className="text-justify text-secondary pt-4">
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

              <p className="text-justify text-secondary pt-4">
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

              <p className="text-justify text-secondary pt-4">
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

              <p className="text-justify text-secondary pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/**================ Projects section start ==================*/}
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
        <div id="default-tab-content">
          <div
            className="hidden p-4  "
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="w-full flex flex-wrap">
              <div className="sm:w-full md:w-2/6 lg:w-2/6 xl:sm:w-full md:w-2/6 lg:w-2/6 xl:w-2/6 p-4">
                <div className="card rounded-xl border shadow-lg p-4 ">
                  <Image
                    src={project1}
                    alt=""
                    className="m-0 p-0 h-80 border rounded-lg overflow-hidden shadow-sm"
                  />
                  <div className="content mt-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Full Stack
                    </span>{" "}
                    <h5 className="text-2xl mt-4">
                      NextGenEdu: E-learning platform
                    </h5>
                    <p className="text-secondary font-light mt-4">
                      Develop a cutting-edge web-based e-learning platform.
                      Integrate the MERN Stack enhance user engagement and
                      experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:w-full md:w-2/6 lg:w-2/6 xl:w-2/6 p-4">
                <div className="card rounded-xl border shadow-lg p-4 ">
                  <Image
                    src={project1}
                    alt=""
                    className="m-0 p-0 h-80 border rounded-lg overflow-hidden shadow-sm"
                  />
                  <div className="content mt-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Full Stack
                    </span>{" "}
                    <h5 className="text-2xl mt-4">
                      NextGenEdu: E-learning platform
                    </h5>
                    <p className="text-secondary font-light mt-4">
                      Develop a cutting-edge web-based e-learning platform.
                      Integrate the MERN Stack enhance user engagement and
                      experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:w-full md:w-2/6 lg:w-2/6 xl:w-2/6 p-4">
                <div className="card rounded-xl border shadow-lg p-4 ">
                  <Image
                    src={project1}
                    alt=""
                    className="m-0 p-0 h-80 border rounded-lg overflow-hidden shadow-sm"
                  />
                  <div className="content mt-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Full Stack
                    </span>{" "}
                    <h5 className="text-2xl mt-4">
                      NextGenEdu: E-learning platform
                    </h5>
                    <p className="text-secondary font-light mt-4">
                      Develop a cutting-edge web-based e-learning platform.
                      Integrate the MERN Stack enhance user engagement and
                      experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:w-full md:w-2/6 lg:w-2/6 xl:w-2/6 p-4">
                <div className="card rounded-xl border shadow-lg p-4 ">
                  <Image
                    src={project1}
                    alt=""
                    className="m-0 p-0 h-80 border rounded-lg overflow-hidden shadow-sm"
                  />
                  <div className="content mt-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Full Stack
                    </span>{" "}
                    <h5 className="text-2xl mt-4">
                      NextGenEdu: E-learning platform
                    </h5>
                    <p className="text-secondary font-light mt-4">
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
            <div className="flex flex-wrap">
              <div className="sm:w-full md:w-2/6 lg:w-2/6 xl:w-2/6 p-4">
                <div className="card rounded-xl border shadow-lg p-4 ">
                  <Image
                    src={project1}
                    alt=""
                    className="m-0 p-0 h-80 border rounded-lg overflow-hidden shadow-sm"
                  />
                  <div className="content mt-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Full Stack
                    </span>{" "}
                    <h5 className="text-2xl mt-4">
                      NextGenEdu: E-learning platform
                    </h5>
                    <p className="text-secondary font-light mt-4">
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
            <div className="sm:w-full md:w-2/6 lg:w-2/6 xl:w-2/6 p-4">
              <div className="card rounded-xl border shadow-lg p-4 ">
                <Image
                  src={project1}
                  alt=""
                  className="m-0 p-0 h-80 border rounded-lg overflow-hidden shadow-sm"
                />
                <div className="content mt-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    Full Stack
                  </span>{" "}
                  <h5 className="text-2xl mt-4">
                    NextGenEdu: E-learning platform
                  </h5>
                  <p className="text-secondary font-light mt-4">
                    Develop a cutting-edge web-based e-learning platform.
                    Integrate the MERN Stack enhance user engagement and
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:w-full md:w-2/6 lg:w-2/6 xl:w-2/6 p-4">
              <div className="card rounded-xl border shadow-lg p-4 ">
                <Image
                  src={project1}
                  alt=""
                  className="m-0 p-0 h-80 border rounded-lg overflow-hidden shadow-sm"
                />
                <div className="content mt-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    Full Stack
                  </span>{" "}
                  <h5 className="text-2xl mt-4">
                    NextGenEdu: E-learning platform
                  </h5>
                  <p className="text-secondary font-light mt-4">
                    Develop a cutting-edge web-based e-learning platform.
                    Integrate the MERN Stack enhance user engagement and
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hidden p-4 rounded-lg"
            id="contacts"
            role="tabpanel"
            aria-labelledby="contacts-tab"
          >
            <div className="sm:w-full md:w-2/6 lg:w-2/6 xl:w-2/6 p-4">
              <div className="card rounded-xl border shadow-lg p-4 ">
                <Image
                  src={project1}
                  alt=""
                  className="m-0 p-0 h-80 border rounded-lg overflow-hidden shadow-sm"
                />
                <div className="content mt-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    Full Stack
                  </span>{" "}
                  <h5 className="text-2xl mt-4">
                    NextGenEdu: E-learning platform
                  </h5>
                  <p className="text-secondary font-light mt-4">
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
    </main>
  );
}

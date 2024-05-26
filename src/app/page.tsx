import Image from "next/image";
import heroImage from '../assets/images/hero-image.png';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <div className="flex md:flex-row lg:flex-row flex-col w-5/6 items-center min-h-screen" >
        <div className="md:w-1/2 lg:w-1/2 w-full">
          <h1 className="text-6xl font-semibold mb-12">
            👋 Hey there,  It's 
            <br />
          Hibbanur Rahman
          </h1>

          <p className=" text-slate-700 font-medium md:pe-8 lg:pe-8 pe-0 text-justify">
            Passionate and driven ReactJS developer with a strong foundation in
            MERN Stack and PHP. Dedicated to creating dynamic and user-centric
            web applications. Eager to contribute my expertise in frontend
            frameworks, modern UI/UX design, and responsive development to a
            forward-thinking team, while continuously learning and growing in
            the everevolving world of web development.
          </p>
          <button className="text-white bg-black rounded-md p-3 mt-8 hover:animate-bounce hover:bg-slate-300 hover:text-black hover:border-2 hover:transition-all transition-all hover:duration-300 hover:ease-in-out duration-300 ease-in-out">
            Say Hello
          </button>
        </div>
        <div className="md:w-1/2 lg:w-1/2 w-full md:ps-8 lg:ps-8">
          <Image src={heroImage} alt=""/>
        </div>
      </div>
    </main>
  );
}

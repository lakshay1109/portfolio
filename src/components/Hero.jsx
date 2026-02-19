import Hyperspeed from './Hyperspeed.jsx';
import { hyperspeedPresets } from './hyperspeedPresets.js';
import RotatingText from "./RotatingText";


export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-x-hidden">

  {/* Background */}
  <div className="absolute inset-0 z-0">
    <Hyperspeed effectOptions={hyperspeedPresets.four} />
  </div>

  <div className="relative z-10 text-white mt-12">

    {/* TOP */}
    <div className="flex flex-col lg:flex-row 
      justify-between gap-10">

      {/* Left */}
      <div className="text-center lg:text-left">
        <a 
        href="/Lakshay_Varshney_Resume_3.pdf" target="_blank" rel="noopener noreferrer" title='Lakshay_Resume'
        className="font-abril 
          text-4xl sm:text-5xl lg:text-6xl">
          LAKSHAY VARSHNEY
        </a>

        <p className="font-alice 
          text-xl sm:text-2xl mt-3">
          I am a
          <RotatingText
            className="block sm:inline ml-2 
            text-3xl sm:text-4xl lg:text-5xl"
            texts={[
              "FULL STACK DEVELOPER",
              "PROGRAMMER",
              "BACKEND ENGINEER",
              "AI ENTHUSIAST",
              "PROBLEM SOLVER",
              "ORATOR",
            ]}
          />
        </p>
      </div>

      {/* Right */}
      <div className="text-center lg:text-right">
        <p className="font-anonymous text-lg sm:text-2xl">
          lakshvar1010@gmail.com
        </p>
        <i className="block mt-2 text-sm sm:text-xl text-blue-200">
          “I build fast, scalable products with clean UI and strong backend foundations.”
        </i>
      </div>
    </div>

    {/* BOTTOM */}
    <div className="mt-20 lg:mt-28 
      flex flex-col lg:flex-row 
      gap-16 justify-between">

      {/* LEFT COLUMN */}
      <div className="text-center lg:text-left">

        {/* Internships */}
        <a
        href="/Lakshay_Varshney_Resume_3.pdf" target="_blank" rel="noopener noreferrer" title='Lakshay_Resume'
        className="font-alfa text-3xl sm:text-5xl">
          INTERNSHIPS
        </a>
        <p className="font-anonymous text-lg sm:text-3xl">
          • FULL STACK INTERN @<i>InfinitoComics</i>
        </p>

        {/* Skills */}
        <div className="mt-8">
          <p className="font-alfa text-3xl sm:text-5xl">
            SKILLS
          </p>
          <p className="font-anonymous text-base sm:text-2xl leading-relaxed opacity-80">
            Java • C++ • Python <br />
            React.js • Tailwind CSS • Node.js • Express.js <br />
            MongoDB • MySQL • REST APIs <br />
            Flask • FastAPI • Next.js <br />
            DSA • Competitive Programming <br/>
            AI/ML Basics • Git & GitHub <br/>
            • Public Speaking
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="text-center lg:text-right">

        {/* Quote */}
        <p className="font-abril text-xl sm:text-2xl 
          max-w-xl mb-12 opacity-90">
          <i> “When it feels scary to jump, that is exactly when you jump. Otherwise you end up staying in the same place your whole life.”</i>
        </p>

        {/* Projects */}
        <p className="font-alfa text-3xl sm:text-5xl ">
          PROJECTS
        </p>
        <a 
        href="https://github.com/Vatsal-Garg-iiitd/fasal-maitri" target="_blank" rel="noopener noreferrer" title="Fasal Maitri"
        className="flex flex-col text-2xl sm:text-3xl">
          FASAL MAITRI – Crop Disease Detection App<br/>
          <i className='text-xl font-anonymous text-blue-300'>• MERN • Flask • AI Langchain </i>
        </a>
        <a 
        href="https://github.com/lakshay1109/Ride-Booking-App" target="_blank" rel="noopener noreferrer" title="Ride Booking App"
        className="flex flex-col text-2xl sm:text-3xl mt-6">
          Ride Booking App <br/>
          <i className='text-xl font-anonymous text-blue-300'>• MERN • MapboxGL.js </i>
        </a>
      </div>
    </div>
  </div>
</section>

  );
}

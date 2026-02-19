import { useState } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ClickSpark from "./components/clickSpark";
import BackgroundMusic from "./components/BackgroundMusic";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
        <>
          <BackgroundMusic />

          <div className="min-h-screen bg-black text-white">
            <div className="max-w-[1900px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 pt-8 sm:pt-12 lg:pt-16">
              <ClickSpark
                sparkColor="#ffffff"
                sparkSize={16}
                sparkRadius={20}
                sparkCount={12}
                duration={650}
              >
                <Header />
                <Hero />
              </ClickSpark>
            </div>
          </div>
          {loading && <Loader onComplete={() => setLoading(false)} />}
        </>
    </>
  );
}


// import BackgroundMusic from "./components/BackgroundMusic";
// import ClickSpark from "./components/clickSpark";
// import Header from "./components/Header";
// import Hero from "./components/Hero";


// export default function App() {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <BackgroundMusic />
//       <div className="max-w-[1900px] mx-auto 
//         px-4 sm:px-6 md:px-10 lg:px-20 
//         pt-8 sm:pt-12 lg:pt-16">
//         <ClickSpark
//           sparkColor="#ffffff"
//           sparkSize={16}
//           sparkRadius={20}
//           sparkCount={12}
//           duration={650}
//         >
//           <Header />
//           <Hero />
//         </ClickSpark>
//       </div>
//     </div>
//   );
// }


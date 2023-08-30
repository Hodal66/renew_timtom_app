import { useState, useEffect } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import PlayButton from "../../components/PlayButton";

const VideoBackground = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const texts = [
    "Air ticketing",
    "Training in aviation courses",
    "Admission and Visa assistance",
    "Hotel Booking",
    "Consultancy", 
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full h-[800px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full  object-cover absolute top-0 left-0 z-0"
      >
        <source src="/videos/homebg4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start z-10">
        <div className="text-white text-2xl sm:text-3xl md:text-4xl px-8 md:px-32 flex flex-col gap-4">
          <p className=" font-bold leading-relaxed pt-24">
            <p>Let &apos;s Give you better Service in </p>
            <p>
              <span className="px-3 bg-gradient-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
                {texts[currentTextIndex]}
              </span>{" "}
              With Us{" "}
            </p>
          </p>
          <div className="text-lg md:text-xl font-bold py-4 gradient-text w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            asperiores odio. Eligendi obcaecati aliquam et aut, tempore,
            quibusdam totam repudiandae necessitatibus.
          </div>
          <div className="flex  flex-col-reverse sm:flex-row gap-8">
            <ButtonComponent title="Learn More ..." />
            <div onClick={() => setPlayVideo(!playVideo)} >
             <div className="flex md:justify-center items-center gap-4"> <PlayButton /> <span>Watch Intro</span></div>

              {playVideo && (
                <div className=" absolute top-0 bottom-0 left-0 right-0 bg-blue-50 z-50">
                 <source src="/videos/homebg3mp4.mp4" type="video/mp4" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;

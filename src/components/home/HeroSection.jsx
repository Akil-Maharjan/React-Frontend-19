import noBg from "@/assets/noBg.png";


const HeroSection = () => {
  return (
    <div className="flex items-start  h-screen pt-30 justify-between">
      <div className="flex flex-col w-full items-center gap-5">
        <h1 className="text-7xl font-bold w-50">Endless your Creativity!</h1>
        <p className="text-md font-semibold max-w-[350px]">
          I will create something that will exceeding your expectation
        </p>
       
      </div>
      <div>
        <img src={noBg} alt="my Image" />
      </div>
    </div>
  );
};

export default HeroSection;

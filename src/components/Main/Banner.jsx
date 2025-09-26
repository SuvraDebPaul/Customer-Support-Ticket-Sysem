import bgImg from "../../assets/images/vector1.png";

const Banner = ({ progressCounter, resolveTaskCounter }) => {
  return (
    <section className="w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-center my-10 text-white gap-4">
      <div className="purple-gradient w-full flex flex-col justify-center items-center h-[250px] relative rounded-lg">
        <img className="absolute top-0 left-0" src={bgImg} alt="" />
        <img
          className="absolute top-0 right-0 transform scale-x-[-1]"
          src={bgImg}
          alt=""
        />
        <h2 className="text-2xl my-4">In-Progress</h2>
        <h3 className="text-6xl">{progressCounter}</h3>
      </div>
      <div className="green-gradient w-full flex flex-col justify-center items-center h-[250px] relative rounded-lg">
        <img className="absolute top-0 left-0" src={bgImg} alt="" />
        <img
          className="absolute top-0 right-0 transform scale-x-[-1]"
          src={bgImg}
          alt=""
        />
        <h2 className="text-2xl my-4">Resolved</h2>
        <h3 className="text-6xl">{resolveTaskCounter}</h3>
      </div>
    </section>
  );
};

export default Banner;

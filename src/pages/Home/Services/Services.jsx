const Services = () => {
  return (
    <div className="flex flex-col  items-center  lg:items-start  lg:flex-row py-10 gap-6">
      <img
        src="/src/assets/about/doctor.png"
        alt=""
        className=" w-[335px] h-[633px] lg:w-[558px] lg:h-[1053px] flex-shrink-0"
      />
      <div>
        <h1 className="text-[#0A0808] font-source font-bold text-4xl text-center lg:text-start">
          Our Services
        </h1>
        <p className="w-[438px] flex flex-col text-base font-source leading-6 text-center lg:text-start">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
    </div>
  );
};

export default Services;

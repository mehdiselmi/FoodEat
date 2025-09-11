const Hero = () => {
  return (
    <div className="min-h-[600px] w-full grid grid-cols-1 md:grid-cols-2 items-center  ">
      {/* text */}
      <div className="px-6 md:pl-32 text-center md:text-left pt-20 pb-10">
        
          <h1 className="font-semibold pb-3 text-[32px] md:text-[42px] leading-tight">
            Double fun on every delivery.
          </h1>
          <p className="my-6 text-[16px] md:text-[18px] text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            mollitia. Exercitationem quas aspernatur esse deleniti tempora nemo
            sed ipsa dolores?
          </p>

          {/* {buttons} */}
          <div className="flex gap-4 items.center md:justify-start justify-center ">
            <button className="primary-btn">Menu</button>
            <button className="secondary-btn">Book Table</button>
          </div>
        
      </div>

      {/* image */}
      <div className="flex justify-center  ">
        <img
          className="w-[300px] md:w-[350px] md:mr-[100px] "
          src="/MEXICANPIZZA.png"
          alt="Pizza"
        />

      </div>


    </div>
  );
};

export default Hero;

const Toplist = () => {
  const Data = [
    {
      image: "/pizza1.webp",
      rating: "⭐9.1",
      name: "Food Name 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "$9.99",
    },
    {
      image: "/pizza2.webp",
      rating: "⭐8.2",
      name: "Food Name 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "$9.99",
    },
    {
      image: "/pizza3.webp",
      rating: "⭐7.9",
      name: "Food Name 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "$9.99",
    },
  ];
  return (
    <div className=" " >
      <div className=" flex justify-center items-center  text-center flex-col mt-20 mb-10">
        <p className="font-semibold text-3xl">Toplist</p>
        <p>Our top list</p>
      </div>
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 w-full px-6 md:px-32 ">
        {Data.map((item, index) => (
          <div
            key={index}
            className="bg-[#758BFD] space-y-5 shadow-lg rounded-2xl p-6 hover:scale-105 duration-300"
          >
            <img
              className="w-[150px] h-[150px] rounded-full m-auto  object-cover img-shadow"
              src={item.image}
              alt={item.name}
              
            />
            <div className="flex justify-between items-center mt-8 ">
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-yellow-300">{item.rating}</p>
            </div>
            <p className="text-sm ">{item.desc}</p>
            <button className="bg-white text-[#758BFD] px-4 py-2 rounded-full font-semibold hover:scale-105 duration-300">
              {item.price}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toplist;

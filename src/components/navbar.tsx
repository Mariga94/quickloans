const Navbar = () => {
  return (
    <nav className="container flex flex-row justify-between h-16 px-[6rem] items-center">
      <div className="font-bold ">
        <span className="text-[#1B424C]">Smart Cash</span>
        <span> </span>
        <span className="text-[#39C260]">Solutions</span>
      </div>
      <div className="flex flex-row justify-between gap-x-[3rem]">
        <p className="tracking-[0.5px] font-normal">Home</p>
        <p className="tracking-[0.5px]">Services</p>
        <p className="tracking-[0.5px]">How we work ?</p>
        <p className="tracking-[0.5px]">About Us</p>
      </div>
      <div className="rounded-full bg-[--bg-primary] text-white px-5 py-3 flex justify-center items-center">
        <a href="#contact">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;

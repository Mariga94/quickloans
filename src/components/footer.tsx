import Logo from "./logo";
const Footer = () => {
  return (
    <div className="bg-footer-pattern bg-cover w-full h-80 px-6 text-white p-6 flex flex-row justify-between items-start">
      <div className="flex flex-col gap-6">
        <Logo />
        <p className="text-wrap w-[400px]">
          We aim to empower individuals and businesses, equipping them with the
          financial resources necessary to reach their aspirations.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="uppercase">Our Services</h3>
        <div className="flex flex-col gap-6">
        <a href="#">Personal loan</a>
        <a href="#">Business loan</a>
        <a href="#">Education loan</a>
        <a href="#">Auto loan</a>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="uppercase">Contact Us</h3>
        <p>+2547000000</p>
        <p>smartcashsolutions@email.com</p>
      </div>
    </div>
  );
};

export default Footer;

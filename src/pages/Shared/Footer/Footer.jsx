import icon from "/icon.png";
const Footer = () => {
  return (
    <footer className="bg-base-200 font-semibold">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center md:justify-between p-5 md:p-10 text-sm">
        <div className="w-fit mx-auto text-center md:col-span-2 lg:col-span-1">
          <img src={icon} className="w-20 h-20 mx-auto" alt="" />
          <h1 className="footer-title text-black opacity-100 text-xl font-source-serif-pro italic">
            TOY MASTER
          </h1>
          <p>
            AN EDUCATION & SCIENTIFIC <br /> TOYS & EQUIPMENTS SERVICES
          </p>
        </div>
        <div className="flex flex-col space-y-2 w-fit mx-auto text-center">
          <h1 className="footer-title text-black opacity-100 text-xl">
            OUR SERVICES
          </h1>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Services</a>
        </div>
        <div className="flex flex-col space-y-2 w-fit mx-auto text-center">
          <h1 className="footer-title text-black opacity-100 text-xl">
            Terms And Condition
          </h1>
          <a className="link link-hover">Terms</a>
          <a className="link link-hover">Conditions</a>
          <a className="link link-hover">Privacy & Policy</a>
        </div>
      </div>
      <div>
        <p className="text-center text-sm my-5">
          &copy; TOY MASTER | All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

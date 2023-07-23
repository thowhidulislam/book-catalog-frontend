import { RiFacebookBoxFill, RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-[#242630] text-secondary p-12 lg:p-20">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-5 md:mb-0">BOOKSHELF</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-20">
          <ul className="space-y-2">
            <li>All Books</li>
            <li>Shipping</li>
            <li>How it works</li>
          </ul>
          <ul className="space-y-2">
            <li>Support</li>
            <li>Careers</li>
          </ul>
          <ul className="space-y-2">
            <li>List your gear</li>
            <li>Contact team</li>
          </ul>
        </div>
        <div className="flex  gap-2 text-2xl py-3 md:py-0">
          <RiFacebookBoxFill />
          <RiInstagramLine />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-full mt-20 gap-5">
        <p>Privacy Policy</p>
        <p>Terms & Condition</p>
        <p className="mx-auto md:ml-auto"> &#169; Bookshelf {year}</p>
      </div>
    </div>
  );
};

export default Footer;

import { RiFacebookBoxFill, RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-[#242630] text-secondary p-20 mt-10">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">BOOKSHELF</h1>
        </div>
        <div className="flex gap-20">
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
        <div className="flex gap-2 text-2xl">
          <RiFacebookBoxFill />
          <RiInstagramLine />
        </div>
      </div>
      <div className="flex w-full mt-20 gap-5">
        <p>Privacy Policy</p>
        <p>Terms & Condition</p>
        <p className="ml-auto"> &#169; Bookshelf {year}</p>
      </div>
    </div>
  );
};

export default Footer;

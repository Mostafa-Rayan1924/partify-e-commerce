import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import Sidebar from "./Sidebar";
import { links } from "@/constants/NavLinks";
import LinkLi from "./LinkLi";
import LoggedUserBtns from "./LoggedUserBtns";
import LoggedUserData from "./LoggedUserData";
import Cart from "../Cart/Cart";
const Header = () => {
  return (
    <header className="bg-background/50   shadow-md shadow-primary/20 fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <div className="container  flex justify-between items-center gap-4">
        <Logo />
        <nav className="md:flex  hidden">
          <ul className="flex items-center  gap-4 lg:gap-7">
            {links.map((link) => (
              <LinkLi link={link} />
            ))}
          </ul>
        </nav>
        <div className="flex relative items-center gap-4">
          <div className="hidden md:flex">
            <LoggedUserData />
          </div>
          <Cart />
          <ModeToggle />
          <div className="flex md:hidden">
            <Sidebar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

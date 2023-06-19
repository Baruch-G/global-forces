import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const TopNavbar = () => {
  return (
    <div
      className={`flex h-16 w-full items-center justify-between bg-[#054475] p-2 text-white`}
    >
      <div className="flex w-4/6 justify-between md:w-1/2 lg:w-1/4">
        <Link href="/">
          <h1 className="cursor-pointer">
            Home
          </h1>
        </Link>
        <h1 className="cursor-pointer" onClick={() => alert("Clicked")}>
          Navbar
        </h1>
        <h1 className="cursor-pointer" onClick={() => alert("Clicked")}>
          About
        </h1>
        <h1 className="cursor-pointer" onClick={() => alert("Clicked")}>
          Browse
        </h1>
        <Link href="/training">
          <h1 className="cursor-pointer">Training</h1>
        </Link>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
export default TopNavbar;

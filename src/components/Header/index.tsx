import Image from "../Image";

import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="flex items-center gap-5 h-24 px-5 w-full bg-gradient-to-r from-violet-500 to-orange-500">
      <Image className="h-16" src={logo} alt="Pokemon logo" />
      <h1 className="text-4xl font-bold text-center text-white">
        Gotta Catch 'Em All
      </h1>
    </header>
  );
}

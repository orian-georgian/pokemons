import Image from "../Image";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="h-20 px-5 w-full bg-gradient-to-r from-violet-800 to-orange-600">
      <div className="flex items-center gap-5 max-w-7xl mx-auto h-full">
        <Link to="/">
          <Image className="h-16" src={logo} alt="Pokemon logo" />
        </Link>

        <h1 className="text-3xl font-bold text-center text-white">
          Gotta Catch 'Em All
        </h1>

        <Link
          to="/"
          className="bg-violet-600 hover:bg-violet-800 rounded-2xl px-7 py-2 text-white font-bold ml-auto"
        >
          Home
        </Link>
      </div>
    </header>
  );
}

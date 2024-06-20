import { Link } from "react-router-dom";

import { Pokemon } from "../../../types";
import Image from "../../../components/Image";
import Badge from "../../../components/Badge";

import { PokemonType } from "../../../types";

export default function ListItem({ name, imageUrl, types }: Pokemon) {
  return (
    <Link to={`/pokemon/${name}`}>
      <li className="flex flex-col sm:flex-row sm:justify-center items-center px-10 sm:gap-10 mb-5 border border-gray-200 bg-gradient-to-r from-purple-200 to-orange-200">
        <Image className="rounded-full w-24 h-24" src={imageUrl} alt={name} />
        <div className="mb-10 sm:mb-0">{name}</div>
        <div className="sm:ml-auto sm:mb-0 mb-10 flex gap-3">
          {types.map((type) => (
            <Badge key={type} type={type as PokemonType}>
              {type}
            </Badge>
          ))}
        </div>
      </li>
    </Link>
  );
}

import { Link } from "react-router-dom";

import { Pokemon } from "../../../types";
import Image from "../../../components/Image";
import Badge from "../../../components/Badge";

import { PokemonType } from "../../../types";

export default function ListItem({ name, imageUrl, types }: Pokemon) {
  return (
    <Link to={`/pokemon/${name}`}>
      <li className="flex items-center px-10 gap-10 mb-5 border border-gray-200 bg-gradient-to-r from-purple-200 to-orange-200">
        <Image className="rounded-full w-24 h-24" src={imageUrl} alt={name} />
        <div>{name}</div>
        {types.map((type, index) => (
          <Badge
            {...(index === 0 ? { className: "ml-auto" } : {})}
            key={type}
            type={type as PokemonType}
          >
            {type}
          </Badge>
        ))}
      </li>
    </Link>
  );
}

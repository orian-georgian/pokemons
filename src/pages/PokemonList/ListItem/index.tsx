import { Pokemon } from "../../../types";
import Image from "../../../components/Image";
import Badge from "../../../components/Badge";

import { PokemonType } from "../../../types";

export default function ListItem({ name, imageUrl, types }: Pokemon) {
  return (
    <li className="flex items-center gap-5 mb-5 border border-slate-50">
      <Image className="rounded-full w-24 h-24" src={imageUrl} alt={name} />
      <div>{name}</div>
      {types.map((type) => (
        <Badge key={type} type={type as PokemonType}>
          {type}
        </Badge>
      ))}
    </li>
  );
}

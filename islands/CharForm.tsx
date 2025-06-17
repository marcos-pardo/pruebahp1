import { useEffect, useRef, useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";
import axios from "axios";
import CharacterList from "../components/CharacterList.tsx";

type Character = {
  id: string;
  name: string;
};

const CharForm: FunctionalComponent = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchName, setSearchName] = useState<string>("");
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const fetchCharacter = async () => {
    try {
      const response = await axios.get(
        "https://hp-api.onrender.com/api/characters",
      );
      const characters: Character[] = response.data;
      const name = searchName.trim().toLowerCase();

      const filtrado = name ? characters.filter((e) => e.name.toLowerCase().includes(name)): characters;
      setCharacters(filtrado);
    } catch (error) {
      console.error("no se encuentran personajes", error);
      setCharacters([]);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(fetchCharacter, 2000);
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [searchName]);

  return (
    <div>
      <input
        type="text"
        placeholder="introduce el personaje"
        value={searchName}
        onInput={(e) => setSearchName(e.currentTarget.value)}
      />
      <h1>LISTA DE PERSONAJES</h1>
      <CharacterList characters={characters} />
    </div>
  );
};

export default CharForm;

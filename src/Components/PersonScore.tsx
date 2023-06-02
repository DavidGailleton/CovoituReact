import { useEffect, useState } from 'react';
import { getPerson } from './getPerson.ts';

export function PersonScore() {
  // on utilise | pour definir une union de type, name peut etre de type undefined ou string
  const [name, setName] = useState<string | undefined>();
  const [defined, isDefined] = useState<boolean>(name === undefined ? false : true);

  useEffect(() => {
    getPerson().then(
      (person) => {
        console.log(person);
        setName(person.name);
        isDefined(true);
      },

      () => {},
    );
  }, []);

  return (
    <>
      {!defined && <h1 className="text-center">Loading...</h1>}
      {defined && <h1 className="text-center">Name {name}</h1>}
    </>
  );
}

// Afficher Loading... tant que name est undefined
// lorsque name vaut bob, afficher hello bob

// utiliser usestate a nouveau pour creer une variable d'etat booleene qui
// permettra de gerer l'affichage conditionnel

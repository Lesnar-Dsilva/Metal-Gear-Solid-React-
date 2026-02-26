import "./App.css";

import "./fonts/METAG___.TTF";
import "./fonts/Tactical Espionage Action.ttf";

//FONTS END HERE

// CHARACTERS
// PascalCase is important to import elements from another .jsx file
import CharacterIMG from "./characters/characterIMG"



function App() {
  return (
    <>
      <div className="title">%</div>

      <CharacterIMG/>
    </>
  );
}

export default App;

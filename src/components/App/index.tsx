import { GlobalStyles } from "../../assets/styles/global";
import { Button, Conteiner, Controlsarea, H3, Textarea } from "./style";
import {FaPlay, FaPause, FaStop} from 'react-icons/fa';

function App() {
  return (
    <Conteiner>
      <GlobalStyles/>
      <H3>
        Converta texto em voz!
      </H3>
      <Textarea>
        <textarea rows={15} cols={33} className="inputtext"/>
      </Textarea>
      <Controlsarea>
        <Button onClick={()=>console.log('Clicou...')}>
          <FaPlay/>
        </Button>
        <Button onClick={()=>console.log('Clicou...')}>
          <FaPause/>
        </Button>
        <Button onClick={()=>console.log('Clicou...')}>
        <FaPause/><FaPlay/>
        </Button>
        <Button onClick={()=>console.log('Clicou...')}>
          <FaStop/>
        </Button>
      </Controlsarea>
    </Conteiner>
  );
}

export default App;

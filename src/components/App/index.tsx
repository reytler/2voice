import { GlobalStyles } from "../../assets/styles/global";
import { Btnssarea, Button, Conteiner, Controlsarea, H3, Textarea } from "./style";
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
      <div className="controlsarea">
        <Controlsarea>
          <div className="divslider">
            <span>
              Velocidade:
            </span>
            <input type="range" min={0} max={2} step={0.1}/>
          </div>
          <div className="divslider">
            <span>
              Volume:
            </span>
            <input type="range" min={0} max={2} step={0.1}/>
          </div>
          <div className="divslider">
            <span>
              Afinação:
            </span>
            <input type="range" min={0} max={2} step={0.1}/>
          </div>
        </Controlsarea>
        <Btnssarea>
          <Button onClick={()=>console.log('Clicou...')}>
            <FaPlay/>
          </Button>
          <Button onClick={()=>console.log('Clicou...')}>
            <FaPause/>
          </Button>
          <Button onClick={()=>console.log('Clicou...')}>
            <FaPause className="resume"/><FaPlay/>
          </Button>
          <Button onClick={()=>console.log('Clicou...')}>
            <FaStop/>
          </Button>
        </Btnssarea>
      </div>
    </Conteiner>
  );
}

export default App;

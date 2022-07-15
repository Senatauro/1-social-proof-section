import SocialProofHeader from './components/SocialProof/SocialProofHeader';
import SocialProofComment from './components/SocialProof/SocialProofComment';

import imgColton from "./images/image-colton.jpg";
import imgIrene from "./images/image-irene.jpg";
import imgAnne from "./images/image-anne.jpg";
import './App.css';

function App() {
  return (
    <div className="App">
      <SocialProofHeader />
      <div className='social-proof-comments'>
        <SocialProofComment avatar={imgColton} name="Colton Smith" margin={20} />
        <SocialProofComment avatar={imgIrene} name="Irene Roberts" margin={40}/>
        <SocialProofComment avatar={imgAnne} name="Anne Wallace" margin={60} />
      </div>
    </div>
  );
}

export default App;

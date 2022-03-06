import Header from "./componentes/Header"
import Main from "./componentes/Main"
import Form from "./componentes/Form"
import ConteudoR6 from "./componentes/ConteudoRound6";
import ConteudoOhana from "./componentes/ConteudoOhana";
import IndexPage from "./componentes/IndexPage";
import Banner from "./componentes/banner";


export default function Home() {


  return ( 
  <>
  <div className="body">
    <IndexPage />
  <div className="header">
         <Header /> 
  </div>

  <div className="main">
    <Main />
  </div>
  <div className="form-inscricao">
  <Form />
  </div>
  <div className="ConteudoR6">
    <ConteudoR6 />
  </div>
  <div className="conteudoOhana">
    <ConteudoOhana />
  </div>
  <div className="banner">
    <Banner />  
  </div>
  </div>
  </>

  );
};

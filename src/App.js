
import './App.css';
import Slide from './component/slider';
import Navi from './component/Navigation';
import Services from './component/services';
import Cards from './component/card';
import Foot from './component/footer';
// import data from './images/firstcardimage.png
import first from './component/images/firstcardimage.png'
import second from './component/images/wifi.png'
import third from'./component/images/tripodstand.png'
import Fourth from './component/images/fourth.png'
import Fifth from './component/images/pngwing.com (1).png'
import Sixth from './component/images/sixth.png'

import './component/data.css';
import Agent from './component/agents';
import Agend from './component/agentdesign';
// about us
import firsting from'./component/images/firstagent.jpg';
 import seconding from'./component/images/secondagent.jpg'
 import thiring from'./component/images/thirdagent.jpg'
import About from './component/about';
import Head from './abouthead';
//Testomoial
import Test from './component/Testno';
import Testnomail from './component/testonomial';
import Firstclient from './component/images/firstclients.jpg'
import Secondclient from './component/images/secondclient.jpg'
import Thirdclient from './component/images/thirdclient.jpg'

function App() {
  const data=[{name:"first heading", image:first},
    {name:"second heading",image:second},
    {name:"third heading",image:third},
    {name:"fourth heading",image:Fourth},
    {name:"fifth heading",image:Fifth},
    {name:"sixth heading",image:Sixth}]
    const img=[{ima:firsting,name:"Walter White",post:"ChiefExecutiveOfficer"},{ima:seconding,name:"Sarah Jhonson",post:"Rent Manager"},{ima:thiring,name:"William Anderson",post:"Sale manager"}]
const h=[{image:Firstclient,name:"Saul Goodman",post:"Ceo&Founder"},{image:Secondclient,name:"Jhon Larson",post:"Entreprenure"},{image:Thirdclient,name:"Sara Wilsoon",post:"Designer"}]
    //  console.log(firstclient)
     console.log(third)
  return (
    <div className="App">
        <Navi/>
           <Slide />
           <Head/>
           <About/>
           <Services/>
           <Cards send={data}/>
           <Agent/>         
          <Agend send={img}/>
          <Test/>
          <Testnomail send={h}/>
          <Foot/>
    </div>
  );
}
export default App;

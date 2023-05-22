import './App.css';
import { Print } from './Component/Task_One/PrintHelloWorld';
import { CongratsCard } from './Component/Task_Two/CongratsCard';
import { SuperLeague } from './Component/Task_Three/SuperOver';
import { SocialMedia } from './Component/Task_four/SocialMedia';
import { Notifications } from './Component/Task_five/Notification';
import { LoginPage } from './Component/Task_six/login';
import { SixCard } from './Component/Task_seven/Card';
import  Menu  from './Component/Router/Menu'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js"
import { IncandDec } from './Component/Task_Eight/Use_state';
import { Counter } from './Component/Task_nine/Counter';
import { EmojiImg } from './Component/Task_Ten/Emoji';
import { FeedBack } from './Component/Task_Ten/Thankyou';
import { ApiCalls } from './Component/Fetch/fetchApi';
import { FakeApiCalls } from './Component/Fetch/fetchfakeapi';
import { MydbApiCalls } from './Component/Fetch/fetchMydb';
import { CrudOperaction } from './Component/Spring/Crud';
import { CrudInsert } from './Component/Spring/CrudInsert';
import { Loading } from './Component/Loading/loading';

function App() {
  return (
  <>
   <BrowserRouter>
      <Routes>
      <Route path="/" element={<Loading/>} />
        <Route path="/task1" element={[<Menu/>,<Print />]} />
        <Route path="/task2" element={[<Menu/>,<CongratsCard/>]} />
        <Route path="/task3" element={[<Menu/>,<SuperLeague/>]} />
        <Route path="/task4" element={[<Menu/>,<SocialMedia/>]} />
        <Route path="/task5" element={[<Menu/>,<Notifications/>]} />
        <Route path="/task6" element={[<Menu/>,<LoginPage/>]} />
        <Route path="/task7" element={[<Menu/>,<SixCard/>]} />
        <Route path="/task8" element={[<Menu/>,<IncandDec/>]} />
        <Route path="/task9" element={[<Menu/>,<Counter/>]} />
        <Route path="/task10" element={[<Menu/>,<EmojiImg/>]} />
        <Route path="/open" element={<FeedBack />} />
        <Route path="/api" element={[<Menu/>,<ApiCalls/>]} />
        <Route path="/fakeapi" element={[<Menu/>,<FakeApiCalls/>]} />
        <Route path="/databaseapi" element={[<Menu/>,<MydbApiCalls/>]} />
        <Route path="/springboot" element={[<Menu/>,<CrudOperaction/>]} />
        <Route path='springbootinsert' element={[<Menu/>,<CrudInsert/>]} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;

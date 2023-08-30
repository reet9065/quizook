import Home from "./Layouts/Home";
import Quiz from "./components/Quiz/Quiz";
import {
  Route,
  Routes
} from 'react-router-dom'
import HomeLayout from "./Layouts/HomeLayout";
import About from "./components/About/About";
import Result from "./components/Resultpage/Result";
import QuizeLayout from "./Layouts/QuizeLayout";
import StartQuiz from "./Layouts/StartQuiz";
import Flotebutton from "./components/Flotebutton/Flotebutton";


function App() {
  return (
    <div className="App">

    <Flotebutton/>

      <Routes>
        <Route path="/" element={<HomeLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path=":qid" element={<StartQuiz/>}/>
        </Route>
        <Route path="/start/:qid" element={<QuizeLayout/>}>
         <Route index element={<Quiz/>}/>
         <Route path="result" element={<Result/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
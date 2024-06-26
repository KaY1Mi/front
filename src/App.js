import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome';
import Home from './Components/Home/Home';
import Login from './Components/Auth/Login';
import Registation from './Components/Auth/Registation';
import Pay from './Components/Pay/Pay';
import { useCookies } from 'react-cookie'
import { useEffect } from 'react';

import English from './Components/Courses/English/English';
import Spain from './Components/Courses/Spain/Spain'
import Italia from './Components/Courses/Italia/Italia'
import France from './Components/Courses/France/France'
import Choose from './Components/Choose/Choose'
import Lesson1 from './Components/Lessons/LessonsEnglish/Lesson1/lesson1';
import Lesson2 from './Components/Lessons/LessonsEnglish/Lesson2/lesson2';
import Profile from './Components/PersonalAccount/Account';
import Test from './Components/Lessons/LessonsEnglish/Lesson2/Test';
import Test1 from './Components/Lessons/LessonsEnglish/Lesson3/Test1';
import Lesson3 from './Components/Lessons/LessonsEnglish/Lesson3/Lesson3';
import Lesson4 from './Components/Lessons/LessonsEnglish/Lesson4/Lesson4';
import Test2 from './Components/Lessons/LessonsEnglish/Lesson4/Test2';
import FinalPage from './Components/Lessons/LessonsEnglish/FinalPage/FinalPage';
import Spain1 from './Components/Lessons/LessonsSpain/Lesson1/Spain1';
import Spain2 from './Components/Lessons/LessonsSpain/Lesson2/Spain2';
import TestSpain from './Components/Lessons/LessonsSpain/Lesson2/testSpain';
import Spain3 from './Components/Lessons/LessonsSpain/Lesson3/Spain3';
import TestSpain3 from './Components/Lessons/LessonsSpain/Lesson3/TestSpain3';
import Spain4 from './Components/Lessons/LessonsSpain/Lesson4/Spain4';
import TestSpain4 from './Components/Lessons/LessonsSpain/Lesson4/TestSpain4';
import FinalPageSpain from './Components/Lessons/LessonsSpain/FinalPage/FinalPageSpain';



function App() {
  const [token] = useCookies(['token'])
  useEffect(()=>{

  }, [token])

  return (
 
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/Pay' element={<Pay />} />
        <Route path='/English' element={<English />} />
        <Route path='/Spain' element={<Spain />} />
        <Route path='/Italia' element={<Italia />} />
        <Route path='/France' element={<France />} />
        <Route path='/Choose' element={<Choose />} />
        <Route path='English/lesson1' element={<Lesson1/>} />
        <Route path='English/lesson2' element={<Lesson2/>} />
        <Route path='English/lesson2/test' element={<Test/>} />
        <Route path='English/Lesson3' element={<Lesson3/>} />
        <Route path='English/lesson3/test' element={<Test1/>} />
        <Route path='English/Lesson4' element={<Lesson4/>} />
        <Route path='English/Lesson4/test' element={<Test2/>} />
        <Route path='English/FinalPage' element={<FinalPage/>} />
        <Route path='Spain/Spain1' element={<Spain1/>} />
        <Route path='Spain/Spain2' element={<Spain2/>} />
        <Route path='Spain/Spain2/TestSpain' element={<TestSpain/>} />
        <Route path='Spain/lesson3/Spain3' element={<Spain3/>} />
        <Route path='Spain/Spain3/TestSpain3' element={<TestSpain3/>} />
        <Route path='Spain/lesson4/Spain4' element={<Spain4/>} />
        <Route path='Spain/Spain4/TestSpain4' element={<TestSpain4/>} />
        <Route path='Spain/FinalPage' element={<FinalPageSpain/>} />

        
     
        
        
      </Routes>
    </Router>

  );
}

export default App;
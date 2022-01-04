import react from 'react'
import { Link, scroller } from 'react-scroll';
import './App.css';
import About from './component/About';
import Experience from './component/Experience';
import Project from './component/Project';
import Skill from './component/Skill';
import svn from './assets/svn.jpg'

function App() {


  return (
    <div className="App">
      <div className="min-h-screen md:h-screen flex flex-col text-white md:flex-row" style={{backgroundColor: "#151515"}}>
        <div className="w-1/2">
          
          <div className="my-5 mx-10 w-96 md:my-20 md:mx-32 md:w-full">
            <div className="font-semibold text-6xl md:text-6xl">
              Hello, I'm 
              <div>
                Savan Pedhadiya
              </div>
            </div>
          </div>

          <div className="mx-32 w-full flex flex-col items-start invisible md:visible">

            <div className=" ">
              <a href="#about" className='flex my-2 w-32 transform custom cursor-pointer' >
                01 
                <div className="bg-white dash mx-5"></div>
                ABOUT
              </a>
            </div>
            <div className=" ">
              <a href="#skill" className='flex my-2 w-40 transform custom cursor-pointer' >
                02 
                <div className="bg-white dash mx-5"></div>
                SKILLS
              </a>
            </div>
            <div className="">
              <a href="#experience" className='flex my-2 w-40 transform custom cursor-pointer'>
                03
                <div className="bg-white dash mx-5"></div>
                EXPERIENCE
              </a>
            </div>
            <div className="">
              <a href="#project" className='flex my-2 w-40 transform custom cursor-pointer'>
                04 
                <div className="bg-white dash mx-5"></div>
                PROJECTS
              </a>
            </div>
            
          </div>

          <div className="flex mx-10 -mt-36 md:mt-48 md:mx-32">
            <div className="">
              <img src={svn} className="inline object-cover w-12 h-12 mr-2 rounded-full mix-blend-luminosity " alt="Profile image"/>
            </div>

             <ul className='flex -mx-16 mt-3'>
               <li className='ml-20'>
                <a href="linkedin.com/in/savan1007" >
                  <img src="https://img.icons8.com/small/25/FFFFFF/linkedin--v1.png"/>
                </a>
               </li>
               <li className='ml-8'>
                <a href='https://github.com/Savan1007' >
                  <img src="https://img.icons8.com/small/25/ffffff/github.png"/>
                </a>
               </li>
             </ul>

          </div>
        </div>
        <div className="flex-1 flex md:overflow-hidden">
          <div className="flex-1 md:overflow-y-scroll">
            <About />
            <Skill />
            <Experience />
            <Project />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

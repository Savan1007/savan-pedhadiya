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
    <div className="App overflow-x-hidden">
      <div className="min-h-screen md:h-screen flex flex-col text-white md:flex-row" style={{backgroundColor: "#151515"}}>
        <div className="md:w-5/12">
          
          <div className="my-5 mx-10 w-96 md:my-20 md:mx-32 md:w-full">
            <div className="font-semibold text-6xl md:text-6xl">
              Hello, I'm 
              <div>
                Savan Pedhadiya
              </div>
            </div>
          </div>

          <div className="mx-32 w-full flex flex-col items-start invisible md:visible" style={{color: "#7d7d7e"}}>

            <div className="my-1">
              <a href="#about" className="flex my-2 w-32 custom transform cursor-pointer text-xs font-semibold tracking-widest" >
                01 
                <div className="bg-white dash mx-5"></div>
                ABOUT
              </a>
            </div>
            <div className="my-1">
              <a href="#experience" className='flex my-2 w-40 transform custom cursor-pointer text-xs font-semibold tracking-widest'>
                02
                <div className="bg-white dash mx-5"></div>
                EXPERIENCE
              </a>
            </div>
            <div className="my-1">
              <a href="#project" className='flex my-2 w-40 transform custom cursor-pointer text-xs font-semibold tracking-widest'>
                03 
                <div className="bg-white dash mx-5"></div>
                PROJECTS
              </a>
            </div>
            
          </div>

          <div className="flex flex-row mx-10 -mt-24 md:mt-44 md:mx-32 w-96 md:w-full">
            <div className="">
              <img src={svn} className="inline object-cover w-12 h-12 mr-2 rounded-full mix-blend-luminosity " alt="Profile image"/>
            </div>
            <div className='flex justify-between mt-3'>
               <div className='ml-6'>
                <a href="linkedin.com/in/savan1007" className='flex'>
                  <img src="https://img.icons8.com/small/25/FFFFFF/linkedin--v1.png"/>
                  <p className=' mx-2'>Linkedin</p>
                  <img className='w-5 h-5 my-1' src="https://img.icons8.com/material-outlined/20/ffffff/external-link.png"/>
                </a>
               </div>
               <div className='ml-6'>
                <a href='https://github.com/Savan1007' className='flex' >
                  <img src="https://img.icons8.com/small/25/ffffff/github.png"/>
                  <p className=' mx-2'>Github</p>
                  <img className='w-5 h-5 my-1' src="https://img.icons8.com/material-outlined/20/ffffff/external-link.png"/>
                </a>
               </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex w-full md:overflow-hidden ">
          <div className="flex-1 md:overflow-y-scroll">
            <About />
            <Experience />
            <Project />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react'

const About = () => {
    return (
        <div className="" id="about">
            <div className='h-4'></div>
            <h2 className='visible md:invisible mt-20 md:mt-0 mx-8 tracking-widest font-semibold'>ABOUT ME</h2>

            <div className="h-full mx-8 md:mx-24 mt-8 transform transition duration-200 md:hover:scale-110" style={{backgroundColor: "#202022"}}>
                <div className="px-6 p-5 font-semibold tracking-widest">
                    Personal
                </div>

                <div className="px-8 pb-5">
                    <div class="flex my-2">
                        <img src="https://img.icons8.com/material-outlined/20/ffffff/phone.png"/>
                        <p class="ml-5">97262 50924</p>  
                    </div>
                    <div class="flex my-2">
                        <img src="https://img.icons8.com/ios-filled/20/ffffff/gmail-new.png"/>
                        <p class="ml-5">savanpedhadiya85@gmail.com</p>
                    </div>
                    <div class="flex my-2">
                        <img src="https://img.icons8.com/material-rounded/20/ffffff/marker.png"/>
                        <p class="ml-5">Surat, Gujarat, India</p>
                    </div>
                </div>
            </div>


            <div className="h-full mx-8 md:mx-24 my-3 transform transition duration-200 md:hover:scale-110" style={{backgroundColor: "#202022"}}> 
                <div className="p-6 font-semibold tracking-widest">
                    Education
                </div>

                <div className="px-8 pb-8">
                    <div>
                        <p className="font-bold text-lg tracking-wider"> B.Tech - Computer Science & Engineering </p>
                        <p className="my-1"> Charotar University Of Science and Technology</p>
                        <div className="flex text-sm" style={{color: "#7d7d7e"}}>
                            <div className="flex-1"> 2019 - 2023 </div>
                            <p className="flex-initial" > Anand, Gujarat </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="h-full mx-8 md:mx-24 my-4 transform transition duration-200 md:hover:scale-110" style={{backgroundColor: "#202022"}}>
                <div className="px-6 p-5 font-semibold tracking-widest">
                    Skills
                </div>

                <div class="px-8 pb-8">
                    <div>
                        <ul class="my-1 flex flex-wrap">
                        <li class="m-1 py-1 px-3 rounded-lg skill-bg">HTML</li>
                        <li class="m-1 py-1 px-3 rounded-lg skill-bg">CSS</li>
                        <li class="m-1 py-1 px-3 rounded-lg skill-bg">Javascript</li>
                        <li class="m-1 py-1 px-3 rounded-lg skill-bg">React Js</li>
                        <li class="m-1 py-1 px-3 rounded-lg skill-bg">Redux Js</li>
                        <li class="m-1 py-1 px-3 rounded-lg skill-bg">Node Js</li>
                        <li class="m-1 py-1 px-3 rounded-lg skill-bg">Express Js</li>
                        <li class="m-1 py-1 px-3 rounded-lg skill-bg">MongoDB</li>
                        <li class="m-1 py-1 px-3 rounded-lg skill-bg">MySQL</li>
                        <li class="m-1 py-1 px-3 rounded-lg skill-bg">C / C++</li>
                        <li class="m-1 py-1 px-3 rounded-lg skill-bg">Java</li>
                        <li class="m-1 py-1 px-3 rounded-lg skill-bg">Python</li>
                        <li class="m-1 py-1 px-3 rounded-lg skill-bg">Data Structure & Algorithms</li>
                        <li class="m-1 py-1 px-3 rounded-lg skill-bg">Problem Solving</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

// About -> 

// My Name is Savan Pedhadiya from Gujarat, India
// Currently, I am studying in 3rd of computer science and 
// engineering from Charusat University.

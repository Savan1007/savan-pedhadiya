import React from 'react'

const Experience = () => {
    return (
        <div className="" id="experience">
            <div className='h-4'></div>
            <h2 className='visible md:invisible mt-10 mx-8 tracking-widest font-semibold'>EXPERIENCE</h2>

            <div className="h-full mx-8 md:mx-24 my-3 transform transition duration-200 md:hover:scale-110" style={{backgroundColor: "#202022"}}> 
                {/* <div className="p-6 font-semibold tracking-widest">
                    Education
                </div> */}

                <div className="p-8">
                    <div>
                        <p className="font-bold text-lg tracking-wider"> Software Engineer - Intern </p>
                        <p className="my-1"> Ecera System LLC</p>
                        <div className="flex text-sm" style={{color: "#7d7d7e"}}>
                            <div className="flex-1"> May 2021 - Jul 2021 </div>
                            <p className="flex-initial" > Michigen, USA </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience

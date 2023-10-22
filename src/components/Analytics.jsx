import React from 'react'
import Analysis from '../assets/analysis-img.png'

function Analytics() {
    return (
        <section className='bg-white py-10'>
             <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img className="object-cover object-center rounded" alt="hero" src={Analysis} />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Why Laravel?
                   
                </h1>
                <p className=' text-[18px] font-medium text-[#2fc7c9] mb-3'>A Progressive Framework</p>
                <p className="mb-8 leading-relaxed">We like to call Laravel a "progressive" framework. By that, we mean that Laravel grows with you. If you're just taking your first steps into web development, Laravel's vast library of documentation, guides.</p>
                <div className="flex justify-center">
                <button className="bg-[#2a3a53] w-[200px] rounded-lg font-bold my-6 mx-auto py-3  text-white">Get Started</button>
                </div>
            </div>
        </div>
        </section>
       
    )
}

export default Analytics

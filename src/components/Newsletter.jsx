import React from 'react'

function Newsletter() {
    return (
        <>
        <div className='w-full py-16 text-white px-4'>
            <div className='mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>A Community Framework Community </h1>
                    <p>Laravel combines the best packages in the PHP ecosystem to offer.</p>

                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-black' type="email"placeholder='Enter email' />
                        <button className="bg-[#c6fbfc] w-[200px] rounded-lg font-bold my-6  py-3  ml-4 text-black">Get Started</button>
                    </div>

                </div>

            </div>

        </div>
        
        
        </>




    )
}

export default Newsletter

import React from 'react'

const FollowSection = () => {
  return (

    <div className="w-full p-4 text-center my-44 sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 text-deeppink">Stay Connected</h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up-to-date with the latest mental health information and move forward with confidence. </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a href="https://web.facebook.com/SangkayHelpLine" className="transition-all w-full sm:w-auto bg-deeppink hover:bg-deeppink focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg className='mr-3 w-7 h-7' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_17_61)">
                <path d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_17_61">
                <rect width="48" height="48" fill="white"/>
                </clipPath>
                </defs>
            </svg>

                <div className="text-left">
               
                    <div className="-mt-1 font-sans text-sm font-semibold">Like us on Facebook</div>
                </div>
            </a>
            <a href="https://discord.gg/crggfDTptq" className="transition-all w-full sm:w-auto bg-deeppink hover:bg-deeppink focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center  px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg viewBox="0 0 48 48" className='mr-3 w-7 h-7' fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M40.634 8.31127C37.5747 6.90751 34.294 5.87327 30.8638 5.28093C30.8013 5.2695 30.7389 5.29806 30.7067 5.3552C30.2848 6.10563 29.8175 7.08463 29.4902 7.85412C25.8008 7.30178 22.1304 7.30178 18.5166 7.85412C18.1893 7.06753 17.705 6.10563 17.2811 5.3552C17.249 5.29997 17.1866 5.2714 17.1241 5.28093C13.6958 5.87138 10.4151 6.90561 7.35387 8.31127C7.32737 8.32269 7.30465 8.34176 7.28958 8.3665C1.06678 17.6632 -0.6379 26.7314 0.19836 35.6872C0.202144 35.731 0.22674 35.7729 0.260796 35.7996C4.36642 38.8147 8.34341 40.6451 12.2466 41.8583C12.309 41.8774 12.3752 41.8546 12.415 41.8031C13.3383 40.5423 14.1613 39.2128 14.867 37.8147C14.9086 37.7328 14.8688 37.6357 14.7837 37.6033C13.4783 37.1081 12.2352 36.5043 11.0395 35.8187C10.9449 35.7634 10.9373 35.6281 11.0243 35.5634C11.2759 35.3748 11.5276 35.1786 11.7679 34.9805C11.8114 34.9444 11.872 34.9367 11.9231 34.9596C19.7786 38.5461 28.2831 38.5461 36.0459 34.9596C36.097 34.9348 36.1576 34.9425 36.203 34.9787C36.4433 35.1767 36.6949 35.3748 36.9484 35.5634C37.0354 35.6281 37.0298 35.7634 36.9352 35.8187C35.7394 36.5176 34.4964 37.1081 33.189 37.6014C33.1039 37.6338 33.0661 37.7328 33.1077 37.8147C33.8285 39.2108 34.6515 40.5403 35.5578 41.8012C35.5956 41.8546 35.6637 41.8774 35.7262 41.8583C39.6483 40.6451 43.6252 38.8147 47.7309 35.7996C47.7668 35.7729 47.7895 35.7329 47.7933 35.6891C48.7942 25.3352 46.117 16.3414 40.6964 8.3684C40.6832 8.34176 40.6605 8.32269 40.634 8.31127ZM16.04 30.2341C13.675 30.2341 11.7263 28.0628 11.7263 25.3962C11.7263 22.7297 13.6372 20.5584 16.04 20.5584C18.4617 20.5584 20.3916 22.7487 20.3538 25.3962C20.3538 28.0628 18.4428 30.2341 16.04 30.2341ZM31.9895 30.2341C29.6245 30.2341 27.6758 28.0628 27.6758 25.3962C27.6758 22.7297 29.5867 20.5584 31.9895 20.5584C34.4113 20.5584 36.3411 22.7487 36.3033 25.3962C36.3033 28.0628 34.4113 30.2341 31.9895 30.2341Z" fill="white"/>
            </svg>
                <div className="text-left">
                    <div className="font-sans text-sm font-semibold ">Join us on Discord</div>
                </div>
            </a>
        </div>
    </div>      
  
  )
}

export default FollowSection


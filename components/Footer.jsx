import Link from "next/link"

const Footer = () => {
  return (
   
<footer>
    <div className="w-full max-w-screen-xl mx-auto md:py-8">
        <div className="text-center sm:flex sm:items-center sm:justify-between">


        <h1 className="mb-4 mr-auto text-2xl font-extrabold leading-none tracking-tight sm:mb-0">Project Sangkay</h1> 
        
            <ul className="flex flex-wrap justify-center mb-4 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Providers</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Help Line</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-0 border-t border-pink border-opacity-20" />
        <span className="block my-4 text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">© 2023 Project Sangkay. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Footer


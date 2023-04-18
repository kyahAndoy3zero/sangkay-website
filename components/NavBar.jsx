import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="flex items-baseline py-10">
        
        <h1 className="mr-auto text-2xl font-extrabold leading-none tracking-tight">Project Sangkay</h1> 
        <div className="flex justify-center space-x-4">
          <Link href='tel:09301135002' className="px-4 py-2 text-base font-bold text-white rounded-full hover:bg-deeppink bg-pink">Call Sangkay</Link>
        </div>
    </nav>
  )
}

export default NavBar

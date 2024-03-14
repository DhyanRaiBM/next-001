import Link from "next/link"
import SearchBar from "./SearchBar"

type Props = {}
const Navbar = (props: Props) => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div>
          <a href="#" className="text-white text-xl font-bold">WikiRocket🚀</a>
        </div>
        <menu className="text-white" >
          <Link href="/drinks" ><button className="btn btn-ghost  uppercase">drinks</button></Link>
        </menu>
        <div>
            <SearchBar />
        </div>
      </div>
    </nav>
  )
}
export default Navbar
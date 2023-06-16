import Link from "next/link"

const Nav = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
      <div>
        <Link href="/" passHref legacyBehavior>
          <a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="m-3 rounded-lg"
              src="/strapi-logo.png"
              width={50}
              height={50}
              alt="Strapi logo" 
            />
          </a>
        </Link>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        className="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>

      <div id="menu" className="hidden w-full md:flex md:items-center md:w-auto">
        <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 space-x-2">
          <li>
            <Link href="/" legacyBehavior>
              <a className="md:p-2 py-2 block hover:text-purple-400">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/films" legacyBehavior>
              <a className="md:p-2 py-2 block hover:text-purple-400" href="#">
                Films
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
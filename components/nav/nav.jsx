import Logo from "@components/logo/logo"
import Link from 'next/link'
import SearchBar from "@components/searchBar/searchBar"
import { Icon } from '@iconify/react'
import { useState } from "react"

export default function Nav(){
  const [toggle, setToggle] = useState(false)

  const toggleNav = () => setToggle(!toggle)
  return(
    <nav className="w-[90%] max-w-[85rem] 2xl:max-w-[90rem] mx-auto py-5">
      <div className="flex justify-between">
        <Link href="/">
          <button>
            <Logo />
          </button>
        </Link>

        <div className="hidden sm:block w-[50%]">
          <SearchBar />
        </div>

        <div className="hidden sm:block sm:flex space-x-6 mt-3">
          <Link href='/cart'>
            <a className="hover:cursor-pointer">
              <Icon icon="bi:cart" color="#056424" width="25" height="25" />
            </a>
          </Link>

          <Link href='/auth/signin'>
            <a className="hover:cursor-pointer">
              <Icon icon="iconoir:profile-circled" color="#056424" width="25" height="25" />
            </a>  
          </Link>

          <div className="w-fit hidden">
            <button>
              <Icon icon="ant-design:logout-outlined" color="#056424" width="25" height="25" />
            </button>
          </div>
        </div>

        <div className="mt-1 sm:hidden">
          <button onClick={toggleNav}>
            <Icon icon="octicon:three-bars-16" color="#056424" width="30" height="30" />
          </button>
        </div>
      </div>

      <div className={`${toggle ? 'block' : 'hidden'} sm:hidden`}>
        <hr className="border-[#056424] mt-3"/>

        <div className="mx-auto w-full flex space-x-5 justify-between mt-3">
          <div className="w-full">
            <SearchBar />
          </div>

          <div className="flex space-x-4 mt-3">
            <Link href='/cart'>
              <a className="hover:cursor-pointer">
                <Icon icon="bi:cart" color="#056424" width="25" height="25" />
              </a>
            </Link>

            <Link href='/auth/signin'>
              <a className="hover:cursor-pointer">
                <Icon icon="iconoir:profile-circled" color="#056424" width="25" height="25" />
              </a>  
            </Link>

            <div className="w-fit hidden">
              <button>
                <Icon icon="ant-design:logout-outlined" color="#056424" width="25" height="25" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
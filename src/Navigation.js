import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navigation = () => {
  return (
    <main>
        <header>
    <nav className="ml-3 h-10 w-screen flex justify-evenly items-center">
      
        <ul className="flex w-screen justify-around">
          <li className="w-24 h-8 hover:bg-red-200 flex justify-center items-center rounded-lg ">
            <Link to="/">Home</Link>
          </li>
          <li className="w-24 h-8 hover:bg-red-200 flex justify-center items-center rounded-lg ">
            <Link to="/articles">Articles</Link>
          </li>
        </ul>
    </nav>
    <section>
        <Outlet/>
    </section>
    </header>
    </main>
  )
}

export default Navigation

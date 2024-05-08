import Link from "next/link"
import React from "react"



export default function Nav(){
  
  return(
    <div className="nav">
      <nav className=" flex align-middle">
        <div className="flex-1 flex justify-start">
          <h3><Link href="/">Jason Codes</Link></h3>
        </div>
        <ul className="flex-1 gap-5 flex justify-center ">
          <li><Link href='/posts/1'>Posts</Link></li>
          <li><Link href='/contact'>Contact</Link></li>
        </ul>
        <ul className="flex-1 flex justify-end ">
          <li><Link href="/login">log In</Link></li>
        </ul>
      </nav>

    </div>
  )
}
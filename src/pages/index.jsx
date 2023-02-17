import React, { useRef, useEffect } from "react"
import Link from "next/link"

// icons
import { FiExternalLink } from "react-icons/fi"

export default function Home() {

  const button1Ref = useRef(null)
  const button2Ref = useRef(null)
  const button3Ref = useRef(null)
  const button4Ref = useRef(null)
  const button5Ref = useRef(null)

  // const buttonsMagnet = (e) => {
  //   const position = button1Ref.current.getBoundingClientRect()

  //   const x = e.pageX - position.left - position.width / 2
  //   const y = e.pageY - position.top - position.height / 2

  //   button1Ref.current.style.transform = `translate(${x * .6}px, ${y * .6}px)`
  //   spanRef.current.style.transform = `translate(${x * .1}px, ${y * .1}px)`
  // }

  // const buttonsMagnetOut = () => {
  //   button1Ref.current.style.transform = `translate(0px, 0px)`
  //   spanRef.current.style.transform = `translate(0px, 0px)`
  // }

  useEffect(() => {
    const buttons = [button1Ref.current, button2Ref.current, button3Ref.current, button4Ref.current, button5Ref.current]

    buttons.forEach(magnet => {
      magnet.addEventListener('mousemove', (e) => {
        const position = magnet.getBoundingClientRect()

        const x = e.pageX - position.left - position.width / 2
        const y = e.pageY - position.top - position.height / 2

        magnet.style.transform = `translate(${x * 1}px, ${y * 1}px)`
      })
      magnet.addEventListener('mouseout', () => {
        magnet.style.transform = `translate(0px, 0px)`
      })
    })
  }, [])

  return (
    <div className="main-content">
      <div className="magnet-container">
        <button className="hover-this" ref={button1Ref}>One</button>
        <button className="hover-this" ref={button2Ref}>Two</button>
        <button className="hover-this" ref={button3Ref}>Three</button>
        <button className="hover-this" ref={button4Ref}>Four</button>
        <button className="hover-this" ref={button5Ref}>Five</button>
      </div>
      <Link target="_blank" href="https://www.youtube.com/watch?v=eOkfkp4nkJM"><div className="credits">Credits: <span>FreeCodeWeb</span> <FiExternalLink/></div></Link>
    </div>
  )
}
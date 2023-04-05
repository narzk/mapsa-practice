import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/Context"

export default function Home() {
  const Navigate = useNavigate()
  const { isLoggedIn } = useContext(UserContext)

  useEffect(() => {
    if (!isLoggedIn) {
      Navigate("/login")
    }
  }, [Navigate, isLoggedIn])

  return <h1>HOME</h1>
}

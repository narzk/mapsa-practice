/// login -> username pass-> check

import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/Context"

const adminUser = { userName: "abc", passWord: "abc" }

export default function Login() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const { setIsLoggedIn } = useContext(UserContext)

  const handleLogin = (event) => {
    //ToDo preventDefault
    event.preventDefault()
    // check admin user is comming

    if (
      userName.toLowerCase() === adminUser.userName.toLowerCase() &&
      password.toLowerCase() === adminUser.passWord.toLowerCase()
    ) {
      //1. login -> /
      // say that I am login

      navigate("/")
      setIsLoggedIn(true)
      console.log("user is valid")
    } else {
      //2. wrong -> alert(invalid user)
      alert("invalid user please sign up")
    }

    setUserName("")
    setPassword("")
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          userName:
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </label>
        <label>
          password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </>
  )
}

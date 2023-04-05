import { createContext, useState } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Card from "./components/Card"
import ContactForm from "./components/ContactForm"
import ContactPage from "./components/ContactPage"
import Counter from "./components/Counter"
import Home from "./components/Home"
import Input from "./components/Input"
import Login from "./components/Login"
import NotFound from "./components/NotFound"

{
  /* <Card /> */
}
{
  /* <Input/> */
}
{
  /* <Counter/> */
}
{
  /* <ContactPage/> */
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App

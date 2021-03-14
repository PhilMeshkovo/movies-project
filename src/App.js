import {React} from "react"
import {Header} from "./layout/Header"
import {Footer} from "./layout/Footer"
import {Main} from "./layout/Main"
import { Component } from "react"

class App extends Component {


  render () {
    return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );}
}

export default App;

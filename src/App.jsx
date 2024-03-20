// import DaisyNav from "./component/DaisyNav/DaisyNav"
import NavBar from "./component/NavBar/NavBar"
import PriceOption from "./component/PriceOption/PriceOption"


function App() {

  return (
    <div className="container max-w-7xl mx-auto px-5">
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOption></PriceOption>
    </div>
  )
}

export default App

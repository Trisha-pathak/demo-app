import AddUnit from "./Components/AddUnits";
import RoomThirdComponent from "./Components/RoomThirdComponent";
import RoomComponents from "./Components/RoomComponents";
import Vendor from "./Components/Vendor";

function App() {
  return (
    <div className="App">
      <div className="row head">
        <div className="col-md-6"><a href="#workmenu" role="button">&lt; &nbsp; Blank</a></div>
        <div className="col-md-2"><a href="#materialmenu" role="button">BOQ Total:4800/-</a></div>
        <div className="col-md-2"><a href="#materialmenu" role="button" >Project Total:6000/-</a></div>
        <div className="col-md-2"><a href="#materialmenu" role="button">BOQ&nbsp;<span className='bi bi-download'></span></a></div>
      </div>
      <div className="row ex-row">
        <div className="col-md-2 ex-col text-left"><AddUnit /></div>
        <div className="col-md-2 ex-col text-left roomcomponent"><RoomComponents id='1' /></div>
        <div className="col-md-4 ex-col text-left"><RoomThirdComponent id='1' /></div>
        <div className="col-md-2 ex-col text-left roomcomponent"><Vendor id='1' /></div>
      </div>
    </div>
  );
}

export default App;

import NarBar from '../navbar/navbar'
import ExPage from '../page/EX/ex'
import FirstPage from '../page/firstpage/firstpage'

function LayOut() {
  return (
    <>
        <NarBar/>
        <div style={{margin:"8px",textAlign:"center"}}>
        <ExPage/>
        </div>
    </>
  )
}

export default LayOut
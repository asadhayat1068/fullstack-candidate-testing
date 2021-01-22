import LeftMenu from './LeftMenus'
import MainContainer from './MainContainer'

const Body = (props) => (
    <div className="grid grid-cols-4 gap-x-4">
        <div className="col-span-1">
            <LeftMenu/>
        </div>
        <div className="col-span-3">
            <MainContainer children={props.children}/>
        </div>
    </div>
  )
  export default Body
  
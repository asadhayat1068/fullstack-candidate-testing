import LeftMenu from './LeftMenus'
import MainContainer from './MainContainer'

const Body = (props) => {
    // console.log('Body Props: ', props)
    return (
    <div className="grid grid-cols-4 gap-x-4">
        <div className="hidden md:block col-span-1">
            <LeftMenu filters={props.filters}/>
        </div>
        <div className="col-span-4 md:col-span-3">
            <MainContainer children={props.children} locations={props.jobs}/>
        </div>
    </div>
  )}
  export default Body
  
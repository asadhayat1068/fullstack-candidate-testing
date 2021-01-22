import LeftMenuSection from './LeftMenuSection' 
const LeftMenu = (props) => {
    // console.log('Left Menu Props: ', props)
    return (
    <div className="">
        {Object.keys(props.filters).map((key) => (
             <LeftMenuSection section={props.filters[key]} title={key} key={key}/>
        ))}
        
    </div>
    
  )
}

export default LeftMenu
  
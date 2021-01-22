import Header from '../components/header/header'
import Body from '../components/body/body'
import SearchBar from '../components/body/searchBar'

const Index = (props) => (
  <div className="bg-gray-100">
    <Header/>
    <div className="container mx-auto">
      <SearchBar/>
      <Body children={props.children}/>
    </div>
  </div>
)
export default Index
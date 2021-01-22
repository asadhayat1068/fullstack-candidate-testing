const SearchBar = (props) => {
    
    const handleSearch = (e) => {
        props.handleSearch(e.target.value)
    }

    return (
        <div className=" bg-white my-6 p-3 px-6 border">
            <input
                onChange = {handleSearch}
                className="py-2 px-3 text-grey-darkest min-w-full"
                type="text"
                name="search_bar"
                placeholder="Search for any job, title, keywords or company"
                id="search_bar" />
        </div>
    )
    }
  
  export default SearchBar
  
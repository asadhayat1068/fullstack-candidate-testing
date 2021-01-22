const SearchBar = (props) => {
    
    const handleSearch = (e) => {
        props.handleSearch(e.target.value)
    }

    return (
        <div className=" bg-white my-6 p-3 px-6 border relative">
            <svg className="w-6 absolute top-5 left-4  text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            
            <input
                onChange = {handleSearch}
                className="py-2 px-3 text-grey-darkest min-w-full pl-6 focus:outline-none"
                type="text"
                name="search_bar"
                placeholder="Search for any job, title, keywords or company"
                id="search_bar" />
        </div>
    )
    }
  
  export default SearchBar
  
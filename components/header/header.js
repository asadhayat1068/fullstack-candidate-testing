const Header = () => (
    <div className=" bg-white p-3 px-6 grid grid-cols-4">
        <div className="col-span-2 md:col-span-1">
            <h1 className="text-blue-400 text-2xl uppercase font-bold">Health Explore</h1>
        </div>
        {/* MENUS */}
        <div className="col-span-0 hidden md:block md:col-span-2">
            <ul className="flex justify-items-center">
                <li className="p-3 uppercase">Profile</li>
                <li className="p-3 uppercase">Jobs</li>
                <li className="p-3 uppercase">Professional Network</li>
                <li className="p-3 uppercase">Lounge</li>
                <li className="p-3 uppercase">Salary</li>
            </ul>
        </div>

        <div className="col-span-2 md:col-span-1 flex justify-end">
            <div className="hidden md:inline-block">
                <button className="uppercase text-blue-400 border-blue-400 btn">Create Job</button>
            </div>

            <div className="bg-blue-400 rounded-full w-8 h-8 inline-block mr-4 ml-4 mt-2 cursor-pointer relative">
                <p className="text-white pt-1 text-center">JO</p>
                <div className="bg-red-600 rounded-full w-4 h-4 cursor-pointer absolute -top-1 -right-1">
                    <p className="text-white text-center text-xs">2</p>
                </div>
            </div>

            <div className="hidden md:inline-block uppercase p-3 font-semibold">
                <a>Logout</a>
            </div>
        </div>
    </div>
  )
  export default Header
  
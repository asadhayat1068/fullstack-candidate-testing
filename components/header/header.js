const Header = () => (
    <div className=" bg-white p-3 px-6 grid grid-cols-4">
        <div className="col-span-1">
            <h1 className="text-blue-400 text-2xl uppercase font-bold">Health Explore</h1>
        </div>
        {/* MENUS */}
        <div className="col-span-2">
            <ul className="flex justify-items-center">
                <li className="p-3 uppercase">Profile</li>
                <li className="p-3 uppercase">Jobs</li>
                <li className="p-3 uppercase">Professional Network</li>
                <li className="p-3 uppercase">Lounge</li>
                <li className="p-3 uppercase">Salary</li>
            </ul>
        </div>

        <div className="col-span-1 flex justify-end">
            <div>
                <button className="uppercase text-blue-400 border-blue-400 btn">Create Job</button>
            </div>

            <div>
                {/* AVATARRR */}
            </div>

            <div className="uppercase p-3">
                <a>Logout</a>
            </div>
        </div>
    </div>
  )
  export default Header
  
import CartWidget from "./CartWidget"

const DaysiNavBar = () => {
    return (
        <div className="navbar h-32">
            <div className="flex-1 ">
                <img className="logo-header h-32 top-0 left-0 absolute" src="https://i.ibb.co/bKqJhvR/logo-dietetica.jpg"></img>
            </div>
            <div className="flex-1">
                <div className="dropdown dropdown-hover">
                    <label tabIndex="0" className="btn-ghost m-1 font-bold text-white text-3xl">Productos</label>
                    <ul tabIndex="0" className="dropdown-content menu text-white p-2 shadow bg-base-100 rounded-box w-52 bg-green-700 border-solid border-2 border-white outline-cyan-500">
                        <li><a className="font-bolder">Item 1</a></li>
                        <li><a className="font-bolder">Item 2</a></li>
                    </ul>         
                </div>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-3xl text-white font-bold"><h1>Marcas</h1></a>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-3xl text-white font-bold"><h1>Promociones</h1></a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Buscar" className="input input-bordered bg-white text-center" />
                </div>
            </div>
            <CartWidget />
        </div>
    )
}
export default DaysiNavBar
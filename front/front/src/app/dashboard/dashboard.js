const Dashboard = () => {
    return (
      <section className="flex md:flex-col mr-1 flex-row md:w-1/4 w-full justify-between md:items-start items-end h-full md:min-h-[480px] py-3">
        <div className="flex flex-col gap-4 text-custom-grey">
          <div className="flex gap-2 items-center">
            <span className="text-xl">
              <FaRegCircleUser />
            </span>
            <Link
              href={`${PATHROUTES.DASHBOARD}/user`}
              className={`hover:text-custom-white ${
                pathName === `${PATHROUTES.DASHBOARD}/user`
                  ? "text-custom-white"
                  : ""
              }`}
            >
              Mi cuenta
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-xl">
              <FaCalendarCheck />
            </span>
            <Link
              href={`${PATHROUTES.DASHBOARD}/reservations`}
              className={`hover:text-custom-white ${
                pathName === `${PATHROUTES.DASHBOARD}/reservations`
                  ? "text-custom-white"
                  : ""
              }`}
            >
              Mis reservas
            </Link>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="border md:w-1/2 w-1/5 md:h-auto h-12 flex gap-1 items-center text-sm border-custom-red py-2 px-3 text-center min-w-36 rounded-md bg-transparent text-custom-white hover:bg-custom-red hover:cursor-pointer"
        >
          <span className="text-xl">
            <MdLogout />
          </span>
          Cerrar sesión
        </button>
      </section>
    );
  };
  
  export default Dashboard;
  

  //MOVER A COMPONENTE Y DEJAR ACÁ EL ENRUTADO  
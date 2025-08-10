import {Outlet} from "react-router"
const ManagerLayout = () => {
  return (
    <div className="flex gap-4">
        <div className="">this is sidebar</div>
      <Outlet/>
    </div>
  )
}

export default ManagerLayout
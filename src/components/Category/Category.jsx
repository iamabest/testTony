import { Outlet } from "react-router-dom"
import HomeLayout from "../HomeLayout/HomeLayout"


function Category() {
  return (
    <div>
      <HomeLayout>
        <Outlet/>
      </HomeLayout>
    </div>
  )
}

export default Category

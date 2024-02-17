import NavbarComponent from "../components/navbar"

/* eslint-disable react/prop-types */
const AdminLayout = ({children}) => {
  return (
    <div>
        <NavbarComponent />
        AdminLayout
        {children}
    </div>
  )
}

export default AdminLayout
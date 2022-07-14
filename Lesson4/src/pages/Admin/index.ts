import AdminHeader from "../../components/Header/Admin"
import Sidebar from "../../components/Sidebar"

const AdminPage = {
    render: () => {
        return /*html*/`
        ${AdminHeader.render()}
        <div class="flex mt-4">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            <div class="grow">
                <h1>Home page</h1>
            </div>
        </div>
        `
    }
}

export default AdminPage
import AdminHeader from "../../components/Header/Admin"
import Sidebar from "../../components/Sidebar"

const AdminPage = {
    render: () => {
        return /*html*/`
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            <div class="grow px-4">
                <div class="flex justify-between">
                    <div>
                    Sản phẩm chung
                    </div>
                    <a href="/admin/products/add">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </a>
                </div>            
            </div>
        </div>
        `
    }
}

export default AdminPage
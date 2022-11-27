import './sidebar.css';
const Sidebar = () => {
    return (
        <div>
            <div className="sidebar">
                <div className="sidebar__logo">
                </div>
                <div className="sidebar__menu">
                    <div>
                        <h5>Role</h5>
                        <button>sign out</button>
                    </div>
                    <div className="sidebar__link active_menu_link">
                        <i className="fa fa-home"></i>
                        {/* <a href="#">Dashboard</a> */}
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-user"></i>
                        {/* <a href="#">Profile</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

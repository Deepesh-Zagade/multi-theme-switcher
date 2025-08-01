//Package Imports
import { Outlet } from "react-router";

//Project Imports
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { useTheme } from "../contexts/ThemeContext";

const AppLayout = () => {
    const { theme } = useTheme()
    return (
        <div className="flex">
            {theme === 'theme2' ?
                (
                    <>
                        <SideBar />
                        <div className="ml-[256px] p-6 overflow-auto">
                            <Outlet />
                        </div>
                    </>
                ) : (
                    <>
                        <Header />
                        <Outlet />
                    </>
                )

            }
        </div>
    );
};

export default AppLayout;
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w w-[100%] ">{children}</main>
    </div>
  );
};

export default Layout;

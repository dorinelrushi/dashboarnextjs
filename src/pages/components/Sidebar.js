import Link from "next/link";
const Sidebar = () => {
  return (
    <div className="Navigation w-[300px] border-r-[1px] border-r-[#dddbe6]">
      <div className="navflex h-[100vh] flex flex-col justify-between py-[20px] px-[40px] ">
        <div className="upMenu flex items-center gap-[15px]">
          <div className="profile w-[58px] h-[58px] rounded-[50%] "></div>
          <div className="text">
            <Link href="/demo">Dorinel.js</Link>
          </div>
        </div>
        <div className="centerMenu">
          <nav className="nav">
            <ul className="flex flex-col gap-5 text-[#8e8e9d] text-[15px]">
              <li className="flex items-center gap-4">
                <i className="fa fa-home" aria-hidden="true"></i>
                <Link href="/">Dashboard</Link>
              </li>
              <li className="flex items-center gap-4">
                <i className="fa fa-pie-chart" aria-hidden="true"></i>
                <Link href="/Summary">SUMMARY</Link>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-exchange-alt" aria-hidden="true"></i>
                <Link href="/Transaction">TRANSACTION</Link>
              </li>{" "}
              <li className="flex items-center gap-3">
                <i className="fa fa-line-chart" aria-hidden="true"></i>

                <Link href="/Statictic">STATISTIC</Link>
              </li>{" "}
              <li className="flex items-center gap-3">
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
                <Link href="/Products">PRODUCT</Link>
              </li>{" "}
            </ul>
          </nav>
        </div>
        <div className="downMenu"></div>
      </div>
    </div>
  );
};

export default Sidebar;

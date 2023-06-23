import ChartComponent from "./components/ChartComponent";
import ChartLines from "./components/ChartLines";
import Image from "next/image";
import Upgrade from "../../public/security-check-6877543-5639689.png";
import Link from "next/link";
import data from "./data";

const Dashboard = () => {
  return (
    <div className="s w-[100%] ">
      <div className="dashboard w-[100%] flex  ">
        <div className="dashboardLeft h-[100vh] overflow-y-scroll flex-[2]">
          <div className="insideLeft py-[20px] px-[40px]">
            {/* business dashboard box */}
            <div className="flexTextSeach flex justify-between items-center">
              <div className="leftText">
                <h2 className="text font-bold text-[25px]">
                  Business Dashboard
                </h2>
              </div>
              <div className="rightIcon flex gap-4">
                <i
                  className="fa fa-search border-[1px]  border-[#d3d3d3] p-[10px] rounded-[8px]"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-calendar border-[1px] border-[#d3d3d3] p-[10px] rounded-[8px]"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
            {/*gridBox*/}
            <div className="gridBox">
              <div className="gridBoxFlex flex gap-[40px] mt-[30px]">
                <div className="firstBox bg-[#4552bb] flex-[1] p-[30px] rounded-[18px] text-[white] shadow-2xl">
                  <h2 className="text-[20px]  font-bold">CUSTOMERS</h2>
                  <p className="text-[#e8e8e8]">66,566</p>
                </div>
                <div className="secondBox firstBox bg-[#4552bb] flex-[1] p-[30px]  text-[white] shadow-2xl rounded-[18px]">
                  <h2 className="text-[20px] font-bold">INCOME</h2>
                  <p className="text-[#e8e8e8]">840,516</p>
                </div>
                <div className="thirdBox firstBox bg-[#4552bb] flex-[1]  p-[30px]  text-[white] shadow-2xl rounded-[18px]">
                  <h2 className="text-[20px] font-bold">PRODUCTS SOLD</h2>
                  <p className="text-[#e8e8e8]">6,566</p>
                </div>
              </div>
            </div>
            {/*marketplace*/}
            <h2 className="text mt-[30px] font-bold text-[20px] mb-[30px]">
              Marketplace
            </h2>
            <div className="flex-data flex w-[100%] gap-[40px]">
              <div className="data-left flex-[2]  ">
                <div className="data-up shadow-1xl bg-[white] p-[25px] rounded-[18px] mb-[40px] flex justify-between">
                  <div className="leftDatas flex flex-col">
                    <h2 className="text-[25px] font-bold max-w-[190px] mb-[18px]">
                      Data Analytics Overview
                    </h2>
                    <p className="m max-w-[270px] text-[17.4px] tracking-[0.5px] text-[#9d9d9d]">
                      See how your account grow and how you can boost it.
                    </p>
                  </div>
                  <div className="rightDatas">
                    <ChartComponent />
                  </div>
                </div>
                <div className="data-donw shadow-1xl bg-[white] p-[25px] rounded-[18px]  flex justify-between">
                  <div className="leftDatas">
                    <h2 className="text-[25px] font-bold max-w-[190px] mb-[28px]">
                      Finance Flow
                    </h2>
                    <p className="text-[25px] font-bold mb-[10px]">$2,546</p>
                    <p className="text-[17.4px] tracking-[0.5px] text-[#9d9d9d]1">
                      Semptember 2023
                    </p>
                  </div>
                  <div className="rightDatas">
                    <ChartLines />
                  </div>
                </div>
              </div>
              <div className="data-right flex-[1] bg-[white] rounded-[18px] shadow-1xl">
                <div className="insideofUpgrade p-[25px] flex flex-col justify-center items-center">
                  <h2 className="text-[16px] text-[#4552bb] font-bold mb-[19px]">
                    UPGRADE TO PRO
                  </h2>
                  <div className="lineVertical w-[80%] h-[1px] bg-[#ebe3e3]"></div>
                  <Image
                    src={Upgrade}
                    alt="secure"
                    width={230}
                    className="o object-cover mb-[14px]"
                  />
                  <h2 className="text-[25px] font-bold mb-[10px]">$56 p/m</h2>
                  <p>100% insurance for your goods</p>
                </div>
              </div>
            </div>
            {/*orders*/}
            <div className="flexOrder flex justify-between items-center mt-[30px] mb-[30px]">
              <h2 className="text  font-bold text-[20px] ">Recent Orders</h2>
              <Link href="#">View order</Link>
            </div>
            <div className="datas">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="listed text-[17.5px] font-[200 ] text-[#8e8b8b] flex justify-between border-b-[1px] border-[#88888833] py-[10px]"
                >
                  <p>{item.nr}</p>
                  <p>{item.name}</p>
                  <p>{item.date}</p>
                  <p>{item.price}</p>
                  <p>{item.link}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*right*/}
        <div className="dashboardRight  flex-[1] h-[100vh] bg-[#f9f8fd] overflow-x-scroll">
          <div className="insideBoardRight py-[20px] px-[60px]  ">
            <h1 className="text font-bold text-[25px] mb-[10px]">Summary</h1>
            <div className="summaryCart bg-[white] rounded-[18px] relative">
              <div className="summaryCartFlex p-[28px] ">
                <div className="flex-balance flex justify-between items-center">
                  <h4>Your Balance</h4>
                  <i
                    className="fa fa-ellipsis-h text-[#9f9fae]"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="flexBalances flex justify-between items-center mt-[15px] mb-[20px]">
                  <h2 className="text-[30px] font-bold">$10 655.00</h2>
                  <div className="add w-[50px] h-[50px] absolute right-[-25px] bg-[#fb2f2f] rounded-[50%] flex items-center justify-center">
                    <i
                      className="fa-light fa-plus text-[24px]  ml-[-1.2px] mt-[1px] text-[white]"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <div className="trade flex items-center gap-[20px]">
                  <div className="leftTrade flex gap-[11px] items-center">
                    <i
                      className="fa fa-caret-up text-[#4eb457] text-[20px]"
                      aria-hidden="true"
                    ></i>
                    <p className="text-[18px] text-[#9f9fae]">$5,542.058</p>
                  </div>
                  <div className="rightTrade flex gap-[11px] items-center">
                    <i
                      className="fa fa-caret-down text-[#fb2f2f] text-[20px]"
                      aria-hidden="true"
                    ></i>
                    <p className="text-[18px] text-[#9f9fae]">$1,222.058</p>
                  </div>
                </div>
              </div>
            </div>
            {/*Activity*/}
            <div className="flexActivity mt-[25px] py-[20px] flex items-center justify-between border-b-[#cdcccc] border-b-[1px]">
              <div className="leftAc">
                <h2 className="text  font-bold text-[20px]">Activity</h2>
              </div>
              <div className="rightAc">
                <Link className="text-[#4552bb] font-bold" href="">
                  SEE ALL
                </Link>
              </div>
            </div>
            {/*Activity Withdraw and paying*/}
            <div className="insideW flex items-center justify-between mt-[20px]">
              <div className="leftW flex gap-[20px] items-center">
                <div className="iconW ">
                  <i className="fas fa-wallet text-[20px] bg-[#4552bb] p-[20px] rounded-[15px] text-[white]"></i>
                </div>
                <div className="">
                  <h2 className="text-[20px] font-bold">Widthdraw Earning</h2>
                  <p className="text-[18px] text-[#9f9fae]">12:40 am</p>
                </div>
              </div>
              <div className="rightW">
                <h2 className="text-[18px] text-[#000000]">$6,150</h2>
              </div>
            </div>
            {/*Duplicate*/}
            <div className="insideW flex items-center justify-between mt-[20px]">
              <div className="leftW flex gap-[20px] items-center">
                <div className="iconW ">
                  <i className="fa-solid fa-id-card text-[20px] bg-[#4552bb] p-[20px] rounded-[15px] text-[white]"></i>
                </div>
                <div className="">
                  <h2 className="text-[20px] font-bold">Paying website tax</h2>
                  <p className="text-[18px] text-[#9f9fae]">12:40 am</p>
                </div>
              </div>
              <div className="rightW">
                <h2 className="text-[18px] text-[#000000]">- $264</h2>
              </div>
            </div>
            {/*Top categories*/}
            <h2 className="text  font-bold text-[20px] mt-[40px] mb-[10px]">
              Top Categories
            </h2>
            <p className="text-[16px] text-[#9f9fae] mb-[25px] max-w-[320px]">
              Explore your top categories and keep shopping with cashback{" "}
            </p>
            <div className="boxFlexGrid flex items-center gap-[30px]">
              <div className="firstGridBox bg-[#fff0bf] roundend-[10px] p-[22px]">
                <i className="fa-sharp fa-solid fa-shoe-prints text-[#ffcc25] text-[20px] mb-[15px]"></i>
                <h2 className="d font-bold">FootWear</h2>
                <p className="d text-[#464646]">29 954 units</p>
              </div>
              <div className="secondGridBox bg-[#e1f2ec] p-[22px] ">
                <i className="fa-sharp fa-solid fa-mitten text-[#55e848] text-[20px] mb-[15px]"></i>
                <h2 className="d font-bold">Accessories</h2>
                <p className="d text-[#464646]">21 954 units</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

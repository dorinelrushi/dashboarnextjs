import React from "react";
import ChartWaves from "./components/ChartWaves";
import HorizontalBar from "./components/HorizontalBar";
import Link from "next/link";
function Statictic() {
  return (
    <div>
      {/*start*/}
      <div className="s w-[100%] ">
        <div className="transaction w-[100%] flex ">
          {/*left*/}
          <div className="transactionLeft h-[100vh] overflow-y-scroll flex-[2]">
            <div className="insideLeft py-[22px] px-[40px] ">
              {/*start*/}
              <div className="flexCards flex gap-[20px] ">
                <div className="leftCards flex  rounded-[10px] items-center justify-between p-[15px] bg-[#4552BB] flex-[1]">
                  <div className="leftIns flex gap-[18px] items-center ">
                    <div className="icons bg-white py-[27px] px-[30px] rounded-[10px] shadow-sm">
                      <i
                        className="fa fa-eye text-[#4552BB] text-[17px]"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="textit text-[white]">
                      <h2 className="text-[29px] font-bold">3,759K</h2>
                      <p className="text-[#e8e8e8] text-[13px] tracking-[1px]">
                        Total Views
                      </p>
                    </div>
                  </div>
                  <div className="arrow">
                    <i
                      className="fa fa-caret-right text-[white] text-[20px]"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                {/*end*/}
                <div className="leftCards flex  rounded-[10px] items-center justify-between p-[15px] bg-[white] flex-[1]">
                  <div className="leftIns flex  gap-[18px]  items-center ">
                    <div className="icons bg-[#b1b8ef7f] py-[27px] px-[30px] rounded-[10px]">
                      <i
                        className="fa fa-shopping-basket text-[#4552BB] text-[17px]"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="textit text-[black]">
                      <h2 className="font-bold text-[29px]">45,455k</h2>
                      <p className="text-[#797878] text-[13px] tracking-[1px]">
                        Total profit
                      </p>
                    </div>
                  </div>
                  <div className="arrow">
                    <i
                      className="fa fa-caret-right text-[#4552BB] text-[20px]"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
              {/*end*/}
              {/*dowm start*/}
              {/*start*/}
              <div className="flexCards flex gap-[20px] mt-[18px]">
                <div className="leftCards flex  rounded-[10px] items-center justify-between p-[15px] bg-[white] flex-[1]">
                  <div className="leftIns flex gap-[18px] items-center ">
                    <div className="icons bg-[#b1b8ef7f] py-[27px] px-[30px] rounded-[10px]">
                      <i
                        className="fa fa-briefcase text-[#4552BB] text-[17px]"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="textit text-[black]">
                      <h2 className="font-bold text-[29px]">3,456K</h2>
                      <p className="text-[#797878] text-[13px] tracking-[1px]">
                        Total Products
                      </p>
                    </div>
                  </div>
                  <div className="arrow">
                    <i
                      className="fa fa-caret-right text-[#4552BB] text-[20px]"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                {/*end*/}
                <div className="leftCards flex  rounded-[10px] items-center justify-between p-[15px] bg-[white] flex-[1]">
                  <div className="leftIns flex  gap-[18px]  items-center ">
                    <div className="icons bg-[#b1b8ef7f] py-[27px] px-[30px] rounded-[10px]">
                      <i
                        className="fa fa-user text-[#4552BB] text-[17px]"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="textit text-[black]">
                      <h2 className="font-bold text-[29px]">6,456K</h2>
                      <p className="text-[#797878] text-[13px] tracking-[1px]">
                        Total Users
                      </p>
                    </div>
                  </div>
                  <div className="arrow">
                    <i
                      className="fa fa-caret-right text-[#4552BB] text-[20px]"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
              {/*end*/}
              {/*down end*/}
              {/*Down section*/}
              <div className="grapjs p-[30px] mt-[25px] bg-[white] rounded-[18px]  ">
                <div className="flex-icon flex justify-between  items-center">
                  <div className="leftIconsF flex gap-[20px] items-center">
                    <i
                      className="fa fa-calendar-check-o text-[#4552BB] text-[25px]"
                      aria-hidden="true"
                    ></i>
                    <h2 className="text-[28px] font-bold">Orders Details</h2>
                  </div>
                  <div className="rightIconsFoption">
                    <select className="border-[1px] p-[12px] text-[gray] rounded-[10px] cursor-pointer">
                      <option value="last">Last 30 Days</option>
                      <option value="last">Last 20 Days</option>
                      <option value="last">Last 10 Days</option>
                    </select>
                  </div>
                </div>
                <div className="chars mt-[25px]">
                  <ChartWaves />
                </div>
              </div>
              {/*End section*/}
            </div>
          </div>
          {/*right*/}
          <div className="transactionRight  flex-[1] h-[100vh] bg-[#f9f8fd] vh-[100Cvh] overflow-x-scroll">
            <div className="insideBoardRight py-[30px] px-[40px] ">
              {/*first*/}
              <div className="firstProfit bg-[white] ">
                <div className="insideProfit p-[22px]">
                  <div className="flexProfit flex justify-between mb-[10px]">
                    <h2 className="text-[18px] font-bold">Profit this day</h2>
                    <i
                      className="fa fa-ellipsis-h text-[#9f9fae]"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h2 className="text-[39px] font-bold">$12.656</h2>
                  <div className="chart mt-[20px]">
                    <HorizontalBar />
                  </div>
                </div>
              </div>
              {/*first*/}
              {/*second */}
              <div className="firstProfit bg-[white] mt-[20px] ">
                <div className="insideProfit p-[22px]">
                  <div className="flexActivity mt-[1px] py-[5px] flex items-center justify-between border-b-[#cdcccc] ">
                    <div className="leftAc">
                      <h2 className="text  font-bold text-[20px]">Activity</h2>
                    </div>
                    <div className="rightAc">
                      <Link className="text-[#4552bb] font-bold" href="">
                        SEE ALL
                      </Link>
                    </div>
                  </div>
                  {/* start user */}
                  <div className="userac mt-[25px]">
                    <div className="insideAcc flex justify-between items-center">
                      <div className="flexProf flex items-center gap-[19px]">
                        <div className="pr a1"></div>
                        <div className="inf">
                          <h2 className="font-bold text-[18px]">
                            Daniel Mudos
                          </h2>
                          <p className="text-[#a8a8a8]">
                            Buy some products with new..
                          </p>
                        </div>
                      </div>
                      <div className="min">
                        <p className="text-[#a8a8a8]">10m</p>
                      </div>
                    </div>
                  </div>
                  {/* end user */}
                  {/* start user */}
                  <div className="userac mt-[25px]">
                    <div className="insideAcc flex justify-between items-center">
                      <div className="flexProf flex items-center gap-[19px]">
                        <div className="pr a2"></div>
                        <div className="inf">
                          <h2 className="font-bold text-[18px]">Jack Almeos</h2>
                          <p className="text-[#a8a8a8]">
                            Buy some products with new..
                          </p>
                        </div>
                      </div>
                      <div className="min">
                        <p className="text-[#a8a8a8]">10m</p>
                      </div>
                    </div>
                  </div>
                  {/* end user */}
                  {/* start user */}
                  <div className="userac mt-[25px]">
                    <div className="insideAcc flex justify-between items-center">
                      <div className="flexProf flex items-center gap-[19px]">
                        <div className="pr a3"></div>
                        <div className="inf">
                          <h2 className="font-bold text-[18px]">
                            Alexia Dimeos
                          </h2>
                          <p className="text-[#a8a8a8]">
                            Buy some products with new..
                          </p>
                        </div>
                      </div>
                      <div className="min">
                        <p className="text-[#a8a8a8]">10m</p>
                      </div>
                    </div>
                  </div>
                  {/* end user */}
                  {/* start user */}
                  <div className="userac mt-[25px]">
                    <div className="insideAcc flex justify-between items-center">
                      <div className="flexProf flex items-center gap-[19px]">
                        <div className="pr a4"></div>
                        <div className="inf">
                          <h2 className="font-bold text-[18px]">
                            Nicola Wallson
                          </h2>
                          <p className="text-[#a8a8a8]">
                            Buy some products with new..
                          </p>
                        </div>
                      </div>
                      <div className="min">
                        <p className="text-[#a8a8a8]">10m</p>
                      </div>
                    </div>
                  </div>
                  {/* end user */}
                </div>
              </div>
              {/* second */}
            </div>
          </div>
        </div>
      </div>
      {/*end*/}
    </div>
  );
}

export default Statictic;

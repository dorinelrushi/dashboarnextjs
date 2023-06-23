import React from "react";
import ReturnNumbers from "./components/ReturnNumbers";

function Summary() {
  return (
    <div className="summary ">
      <div className="summryFlexInside p-[0px] ">
        {/* Summary Start*/}
        <div className="returnSummary w-100% px-[18px]  py-[15px] items-center bg-[rgb(255,255,255)] flex justify-between ">
          <div className="leftSummary">
            <h2 className="text-[25px] font-bold">Return Summary</h2>
          </div>
          <div className="rightSummary">
            <form>
              <input
                type="search"
                className="w-[480px] p-[18px] rounded-[10px] bg-[#f7f7f7]"
                placeholder="Search or type a command"
              />
            </form>
          </div>
        </div>
        {/*Summary End*/}
        {/*Start*/}
        <div className="paddinga w-[100%] px-[20px] py-[30px] h-[100vh] overflow-y-scroll  ">
          <div className="insidePaddingnubmer flex gap-[20px] items-start overflow-x-scroll ">
            {/*left*/}
            <div className="insideLefted overflow-x-scroll flex-[1.5]  overflow-y-scroll ">
              {/* insdie*/}
              <div className="insidedLefted p-[30px] bg-[white] rounded-[18px] ">
                <div className="flex-icon flex justify-between  items-center">
                  <div className="leftIconsF flex gap-[20px] items-center">
                    <i
                      className="fa fa-bar-chart text-[#4552BB] text-[25px]"
                      aria-hidden="true"
                    ></i>
                    <h2 className="text-[28px] font-bold">Summary</h2>
                  </div>
                  <div className="rightIconsFoption">
                    <select className="border-[1px] p-[12px] text-[gray] rounded-[10px] cursor-pointer">
                      <option value="last">Last 30 Days</option>
                      <option value="last">Last 20 Days</option>
                      <option value="last">Last 10 Days</option>
                    </select>
                  </div>
                </div>
                {/*FLexBoxing*/}
                <div className="boxingFlex flex justify-center gap-[30px] mt-[20px]">
                  <div className="firstBox border-r-[1px]   flex-[1] p-[10px] text-center">
                    <h2 className="text-[52px] font-bold">103</h2>
                    <p className="text-[18px] max-w-[180px] m-auto text-[gray]">
                      Return Needing Processing
                    </p>
                  </div>
                  <div className="firstBox text-center  border-r-[1px]   p-[10px]  flex-[1]">
                    <h2 className="text-[52px] font-bold">23</h2>
                    <p className="t text-[18px]  text-[gray]">
                      Return in Transit
                    </p>
                  </div>
                  <div className="firstBox     text-center p-[10px]  flex-[1]">
                    <h2 className="text-[52px] font-bold">260</h2>
                    <p className="text-[18px]  text-[gray]">Total Return</p>
                    <p className="text-[#fb2f2f] w-[195px] m-auto text-center py-[10px] mt-[13px] rounded-[10px] bg-[#ff17171d]">
                      -14% than last month
                    </p>
                  </div>
                </div>
                {/*end FlexBoxing*/}
              </div>
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
                  <ReturnNumbers />
                </div>
              </div>
              {/*End section*/}
              <div className="insidedLefted p-[30px] bg-[white] rounded-[18px] mt-[25px]">
                <div className="flex-icon flex justify-between  items-center">
                  <div className="leftIconsF flex gap-[20px] items-center">
                    <i
                      className="fa fa-folder-open-o text-[#4552BB] text-[25px]"
                      aria-hidden="true"
                    ></i>
                    <h2 className="text-[28px] font-bold">Summary</h2>
                  </div>
                  <div className="rightIconsFoption">
                    <select className="border-[1px] p-[12px] text-[gray] rounded-[10px] cursor-pointer">
                      <option value="last">Last 30 Days</option>
                      <option value="last">Last 20 Days</option>
                      <option value="last">Last 10 Days</option>
                    </select>
                  </div>
                </div>
                {/*FLexBoxing*/}
                <div className="boxingFlex flex justify-center gap-[30px] mt-[20px]">
                  <div className="firstBox border-r-[1px]   flex-[1] p-[10px] text-center">
                    <h2 className="text-[52px] font-bold">103</h2>
                    <p className="text-[18px] max-w-[180px] m-auto text-[gray]">
                      Return Needing Processing
                    </p>
                  </div>
                  <div className="firstBox text-center  border-r-[1px]   p-[10px]  flex-[1]">
                    <h2 className="text-[52px] font-bold">23</h2>
                    <p className="t text-[18px]  text-[gray]">
                      Return in Transit
                    </p>
                  </div>
                  <div className="firstBox     text-center p-[10px]  flex-[1]">
                    <h2 className="text-[52px] font-bold">260</h2>
                    <p className="text-[18px]  text-[gray]">Total Return</p>
                  </div>
                </div>
              </div>
            </div>
            {/*Start*/}
            <div className="insideRighted flex-[1] bg-[white] rounded-[18px]">
              <div className="insidedRighted p-[30px]">
                <div className="flexIcon">
                  <div className="iconBag flex gap-[19px] items-center">
                    <i
                      className="fa fa-shopping-bag text-[28px] text-[#4552BB]"
                      aria-hidden="true"
                    ></i>
                    <h2 className="text-[28px] font-bold">Mos Returned</h2>
                  </div>
                  <div className="lastedPost mt-[25px]">
                    <select className="border-[1px] w-[100%] p-[12px] text-[gray] rounded-[10px] cursor-pointer">
                      <option value="last">Last 30 Days</option>
                      <option value="last">Last 20 Days</option>
                      <option value="last">Last 10 Days</option>
                    </select>
                  </div>
                  {/**/}
                  <div className="items1 mt-[35px] w-[100%] border-l-[6px] border-l-[#4552BB] ">
                    <div className="insideItems px-[20px] py-[15px]">
                      <h2 className="text-[28px] font-bold">102 Returns</h2>
                      <p className="text-[19px] mt-[0px] text-[gray]">
                        Seamless Long Sleeve
                      </p>
                    </div>
                    {/**/}
                  </div>
                  <div className="lines w-[80%] m-auto h-[1.5px] bg-[#e0e0e0] mt-[25px] mb-[5px]"></div>
                  <div className="items1 mt-[35px] w-[100%] border-l-[6px] border-l-[#4552BB] ">
                    <div className="insideItems px-[20px] py-[15px]">
                      <h2 className="text-[28px] font-bold">93 Returns</h2>
                      <p className="text-[19px] mt-[0px] text-[gray]">
                        Daily Crop Tee - White
                      </p>
                    </div>
                    {/**/}
                  </div>
                  <div className="lines w-[80%] m-auto h-[1.5px] bg-[#e0e0e0] mt-[25px] mb-[5px]"></div>
                  <div className="items1 mt-[35px] w-[100%] border-l-[6px] border-l-[#4552BB] ">
                    <div className="insideItems px-[20px] py-[15px]">
                      <h2 className="text-[28px] font-bold">54 Returns</h2>
                      <p className="text-[19px] mt-[0px] text-[gray]">
                        Seamless Leggings -Sunset
                      </p>
                    </div>
                    {/**/}
                  </div>
                  <div className="lines w-[80%] m-auto h-[1.5px] bg-[#e0e0e0] mt-[25px] mb-[5px]"></div>
                </div>
              </div>
            </div>
          </div>
          {/**/}

          {/*End*/}
        </div>
      </div>
    </div>
  );
}

export default Summary;

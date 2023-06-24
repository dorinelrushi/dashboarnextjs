import React from "react";
import Image from "next/image";
import Position from "./components/Position";
import ChartLines1 from "./components/ChartLines1";
import Link from "next/link";
import stars from "../../public/Starbucks-logo.png";

function Transaction() {
  const datas = [
    {
      id: 1,
      brand: <Image src={stars} alt="demo" width="60px" />,
      data: "27 May",
      Vendor: "Star Bucks",
      purchasted: "2 Cappuchino with Cookies",
      const: "$28.00",
      details: <button>Details</button>,
    },
    {
      id: 2,
      brand: <Image src={stars} alt="demo" width="60px" />,
      data: "24 May",
      Vendor: "Star Bucks",
      purchasted: "2 Cappuchino with Cookies",
      const: "$28.00",
      details: <button>Details</button>,
    },
    {
      id: 3,
      brand: <Image src={stars} alt="demo" width="60px" />,
      data: "27 May",
      Vendor: "Star Bucks",
      purchasted: "2 Cappuchino with Cookies",
      const: "$28.00",
      details: <button>Details</button>,
    },
    {
      id: 4,
      brand: <Image src={stars} alt="demo" width="60px" />,
      data: "27 May",
      Vendor: "Star Bucks",
      purchasted: "2 Cappuchino with Cookies",
      const: "$28.00",
      details: <button>Details</button>,
    },
    {
      id: 5,
      brand: <Image src={stars} alt="demo" width="60px" />,
      data: "27 May",
      Vendor: "Star Bucks",
      purchasted: "2 Cappuchino with Cookies",
      const: "$28.00",
      details: <button>Details</button>,
    },
  ];
  return (
    <div className="s w-[100%] ">
      {/*Start*/}
      <div className="transaction w-[100%] flex ">
        {/*Left*/}
        <div className="transactionLeft h-[100vh] overflow-y-scroll flex-[2]">
          <div className="insideLeft py-[22px] px-[40px]">
            {/* flez Data box*/}
            <div className="flexData flex gap-[25px]">
              {/*Left Data box*/}
              <div className="flexdataLeft flex-[1] bg-[white] rounded-[15px] ">
                <div className="insideDataLeft flex flex-col justify-center   p-[40px]">
                  <h3 className="text-center text-[#111]  tracking-[1px]">
                    Your Balance
                  </h3>
                  <h2 className="text-center font-bold text-[35px] mb-[15px] text-[#4552BB]">
                    $6054.000
                  </h2>
                  <div className="flexMonths flex justify-center items-center gap-[20px] mb-[10px]">
                    <p className="text-[#b3b3b3]">This month</p>
                    <div className="flexPracies  border-[1px] border-[#38de64] px-[20px] py-[5px] rounded-[50px]">
                      <h1 className="text-[#38de64] font-bold">$123.00</h1>
                    </div>
                  </div>
                  <div className="chars mt-[25px]">
                    <ChartLines1 />
                  </div>
                  <div className="flexExTr flex mt-[32px] gap-[30px]">
                    <div className="flexExLeft flex-[1] ">
                      <h2 className="font-bold text-[18px]">$455</h2>
                      <p>Expenses</p>
                      <div className="progress mt-[10px] w-[100%] h-[4px] bg-gray-100">
                        <div className="insideProgress w-[40%] bg-[#4552BB] h-[100%]"></div>
                      </div>
                    </div>
                    <div className="flexExRight flex-[1]">
                      <h2 className="font-bold text-[18px]">$455</h2>
                      <p>Expenses</p>
                      <div className="progress mt-[10px] w-[100%] h-[4px] bg-gray-100">
                        <div className="insideProgress w-[40%] bg-[#38de64] h-[100%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*right Data box*/}
              <div className="flexdataRight flex-[1.3] bg-[white] rounded-[15px] ">
                <div className="insideflexdataRight p-[40px]">
                  <div className="flexLasTr mb-[40px] flex justify-between items-center">
                    <h2>Last Week Transactions</h2>
                    <p className="font-bold text-[#38de64]">+24%</p>
                    {/*Position*/}
                  </div>
                  <div className="chars">
                    <Position />
                  </div>
                </div>
              </div>
            </div>
            {/**/}
            <div className="flexTr mt-[35px] flex justify-between align-center">
              <h2 className="text-[black] font-bold">Previous Transactions</h2>
              <Link href="/" className="text-[#4552BB] font-bold text-[17px]">
                View All
              </Link>
            </div>
            <div className="datas mt-[30px] mb-[20px] ">
              <div className="flexDatas ">
                <div className="firstColumn flex justify-between text-left tracking-[0.5px] items-center text-[#878787]   ">
                  <p>Brand</p>
                  <p>Date</p>
                  <p>Vendor</p>
                  <p>Purchased Detail</p>
                  <p>Cost</p>
                  <p>Details</p>
                </div>
              </div>
            </div>
            <div className="bg-white px-[40px] py-[15px] rounded-[18px] overflow-y-scroll h-[350px]">
              {datas.map((item) => (
                <div key={item.id} className="flexData ">
                  <div className="flexIndies ">
                    <div className="datasIndex flex justify-between items-center  mb-[22px] text-center text-[#1d1d1d] border-b-[1px] py-[10px]">
                      <div className="images w-[30px]">{item.brand}</div>
                      <p>{item.data}</p>
                      <p>{item.Vendor}</p>
                      <p>{item.purchasted}</p>
                      <p>{item.const}</p>
                      <div className="det cursor-pointer text-[white] bg-[#4552BB] font-[600] rounded-[8px] border-[#4552BB] border-[0.5px] px-[15px] py-[7px]">
                        {item.details}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/*end*/}
          </div>
        </div>
        {/*right*/}
        <div className="transactionRight  flex-[1] h-[100vh] bg-[#f9f8fd] vh-[100Cvh] overflow-x-scroll">
          <div className="insideBoardRight py-[20px] px-[60px] ">
            <div className="flexCars flex items-center justify-between">
              <h1>Saved Cards</h1>
              <Link href="" className="text-[#4552BB] font-bold">
                + Add New Card
              </Link>
            </div>
            <div className="cardCredit rounded-[12px] mt-[15px]">
              <div className="insidecardCredot p-[25px]">
                <div className="flexChip flex justify-between items-center">
                  <div className="chipImages w-[65px] h-[40px] bg-white rounded-[8px]"></div>
                  <div className="circlesMaster flex">
                    <div className="c1 w-[36px] h-[36px] bg-[#ffffff43] rounded-[50%] relative left-[14px] "></div>
                    <div className="c2 w-[36px] h-[36px] bg-[#ffffff88] rounded-[50%] relative  "></div>
                  </div>
                </div>
                {/*cart Number */}
                <h1 className="text-[19px text-[#ffffffbc] mt-[20px] tracking-[1px]">
                  Cart Number
                </h1>
                <h1 className="font-bold mt-[2px] text-white text-[20px] tracking-[2px]">
                  1856 2254 4534 2549
                </h1>
                <div className="series flex items-center justify-between mt-[20px]">
                  <div className="left">
                    <h2 className="text-[#ffffffbc] tracking-[1px]">Series</h2>
                    <h2 className="font-bold mt-[2px] text-white text-[20px] tracking-[2px]">
                      10/21
                    </h2>
                  </div>
                  <div className="right-series">
                    <h2 className="edit text-[white] font-bold tracking-[2px]">
                      Edit
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/*bying*/}
            <div className="flexCars mt-[29px] rounded-[18px]">
              <div className="firstCard bg-white">
                <div className="insideCards flex justify-between items-center p-[29px]">
                  <div className="leftlfex flex gap-[20px] items-center">
                    <div className="cImages w-[39px] h-[39px]   rounded-[50%]"></div>
                    <div className="text">
                      <h2 className=" text-[20px]">2 Capuchino</h2>
                      <p className="text-[#434343] mt-[5px]">22/05/2023</p>
                    </div>
                  </div>
                  <h2 className="text-[#38de64] font-bold text-[18px]">
                    $12.55
                  </h2>
                </div>
              </div>
              <div className="firstCard bg-white mt-[20px]">
                <div className="insideCards flex justify-between items-center p-[29px]">
                  <div className="leftlfex flex gap-[20px] items-center">
                    <div className="cImages w-[39px] h-[39px]  rounded-[50%]"></div>
                    <div className="text">
                      <h2 className=" text-[20px]">2 Capuchino</h2>
                      <p className="text-[#434343] mt-[5px]">22/05/2023</p>
                    </div>
                  </div>
                  <h2 className="text-[#38de64] font-bold text-[18px]">
                    $12.55
                  </h2>
                </div>
              </div>
              <div className="firstCard bg-white mt-[20px]">
                <div className="insideCards flex justify-between items-center p-[29px]">
                  <div className="leftlfex flex gap-[20px] items-center">
                    <div className="cImages w-[39px] h-[39px]   rounded-[50%]"></div>
                    <div className="text">
                      <h2 className=" text-[20px]">2 Capuchino</h2>
                      <p className="text-[#434343] mt-[5px]">22/05/2023</p>
                    </div>
                  </div>
                  <h2 className="text-[#38de64] font-bold text-[18px]">
                    $12.55
                  </h2>
                </div>
              </div>
              <div className="firstCard bg-white mt-[30px] p-[30px]">
                <h1 className="mb-[30px] font-bold">Automative Payments</h1>
                <div className="insideCards flex justify-between items-center ">
                  <div className="leftlfex flex gap-[20px] items-center">
                    <div className="cImages w-[39px] h-[39px]   rounded-[50%]"></div>
                    <div className="text">
                      <h2 className=" text-[20px]">Paypal</h2>
                      <p className="text-[#434343] mt-[5px]">1 Day 18h 20m</p>
                    </div>
                  </div>
                  <h2 className="text-[#4552BB] font-bold text-[18px]">
                    Cancel
                  </h2>
                </div>
              </div>
            </div>
            {/*end buying*/}
          </div>
        </div>
      </div>
      {/*end*/}
    </div>
  );
}

export default Transaction;

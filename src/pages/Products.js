import Link from "next/link";
import React from "react";
import Image from "next/image";
function Products({ store }) {
  return (
    <div>
      <div className="s w-[100%] ">
        <div className="shop w-[100%]  ">
          <div className="shopLeft h-[100vh] overflow-y-scroll ">
            <div className="shop py-[22px] px-[40px] ">
              <div className="allProducts  ">
                {store.map((stores) => {
                  const truncatedTitle = stores.title.slice(0, 15); // Truncate title to 15 characters
                  return (
                    <div key={stores.id} className="d flex">
                      <div className="gridBox flex  bg-[white] p-[30px] rounded-[10px]">
                        <div>
                          <div className="">
                            <Image
                              alt="demo"
                              className="o w-[200px] h-[200px] object-cover"
                              src={stores.image}
                              width="190px"
                              height="190px"
                            />
                            <h2 className=" mt-[10px]">
                              {truncatedTitle + "..."}
                            </h2>
                            <h2 className="d text-[#4552bb] font-bold text-[30px]">
                              ${stores.price}
                            </h2>
                            <button className="bg-[#4552bb] mt-[10px]  text-[#ffffff] w-[100%] h-[40px] rounded-[5px] ">
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

export async function getStaticProps() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return {
    props: {
      store: data,
    },
  };
}

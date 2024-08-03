import React, { useEffect, useState } from "react";

function shop() {
  //loading
  const [loader, setLoader] = useState(false);

  // location where we store the data of all products
  const [allProducts, setAllProducts] = useState([]);

  //  category ko store krwane ke lie
  const [category, setCategory] = useState([]);

 //filter data wali use state
  const [filteredData,setFilterData] = useState([]);

  //seleted category use state
  const [selectedCategory,setSelectedCategory] = useState(null);

  //  useeffect hook for all category
  //useEffect hook use to render components
  useEffect(() => {
    const fetchAllProducts = async () => {
      setLoader(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setAllProducts(data);
        setFilterData(data);
      } 
      catch (error) {
        console.error("Error products fetching:", error);
      } 
      finally {
        setLoader(false);
      }
    };
    fetchAllProducts();
  }, []);

  //async function use for intreact with the api


  //useeffect for all category
  useEffect(() => {
    const fetchAllCategory = async () => {
      setLoader(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const categories = await response.json();
        setCategory(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoader(false);
      }
    };
    fetchAllCategory();
  }, []);

  const categoryHandler = (category) => {

    setSelectedCategory(category);

    // if koi category select nhi hai to all product show kr do
    if(category===null){
      setFilterData(allProducts);
    }
    else 
    {
      const filtered = allProducts.filter((item)=> item.category === category);
      setFilterData(filtered);
    }
  }

  console.log(filteredData);

  return (
    <div className="flex shop-div">
      {/* // category wali div  */}

      <div className="w-[200px] mt-8">
        <p className="text-black text-2xl font-bold">Category</p>

        {loader ? (
          <div className="loader">loader</div>
        ) : (
          category.map((item, index) => (
            <div className="text-xl mt-1 font-semibold gap-y-8 capitalize hover:cursor-pointer border border-slate-700"
            onClick={()=>categoryHandler(item)}
            key={index}
            >
              {item}
            </div>
          ))
        )}
      </div>

      {/* // product wali div  */}
      <div className="grid grid-cols-3 w-full  space-x-5 mx-auto mb-5 ">
        {/* all product wala div */}
        {loader ? (
          <div className="loader">loader</div>
        ) : (

        //  sara data filtered data me hai 

          filteredData.map((item, index) => (
            <div
              key={index}
              className="w-[250px]
           hover:scale-[1.07] hover:shadow-lg shadow-black transition-all duration-500
                   space-y-6  p-4 mx-auto mt-8 rounded-md border border-black  bg-white"
            >
              <p className="text-xl font-bold"> {item.title}</p>
              <img src={item.image} className="h-[200px] mx-auto  " />
              <p className="text-sm text-slate-500">
                {item.description.substring(0, 100)}...
              </p>
              <div className="flex justify-between">
                <p className="text-green-600 font-medium">${item.price}</p>
                <button className="border border-black rounded-md px-6 py-2 hover:text-white hover:bg-black transition-all duration-500">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      
    </div>
  );
}

export default shop;

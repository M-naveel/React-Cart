
// import { use, useReducer } from 'react';
import React, { useEffect, useState, useRef } from 'react';

function Product({
  data,
  title,
  filterkey,
  addtoCart,
  placeholder
}) {




  const containerRef = React.useRef(null);
  // const RowRef1 = React.useRef(null);
  // const RowRef2 = React.useRef(null);



  // Scroll function 
  const scrollLeft = (ref) => {
    // control the reference dynamically instead of hardcoded
    ref.current.scrollLeft -= 200;
  };
  const scrollRight = (ref) => {

    ref.current.scrollLeft += 200;
  };




  let [filterInput, setFilterInput] = useState("");
  let [appliedFilter, setAppliedFilter] = useState("");

  // Filterd data
  const filterdata = data.filter(item =>
    item[filterkey].toString().toLowerCase().includes(appliedFilter.toLowerCase())
  );

  const resetFilter = () => {

    setFilterInput("")
    setAppliedFilter("")
  }

  // filter button code 
  const applyfilter = () => {
    setAppliedFilter(filterInput);
  }

  return (


    <>



      <div className="row1">
        <h2 className=''>{title}</h2>


      <div className="fil row  mb-3 p-2">

      <div className="col mb-2">

        <input type="text" 
          value={filterInput}
          placeholder={placeholder}
          
          onChange={(e) => {
            setFilterInput(e.target.value);
          }} />
          </div>
          <div className="col-auto d-flex gap-2 ms-auto " >

        <button type='button'
          onKeyDown={(e) => {
            if (e.key === "Enter" && filterInput.trim())applyfilter()  }}
            className=' btn btn-md btn-primary' onClick={applyfilter} disabled={!filterInput.trim()} >Apply filter</button>
        <button className='btn btn-danger' onClick={resetFilter} disabled={!filterInput.trim()}>Reset</button>

            </div>
            </div>

        <div className="controls " >
          <button className='left' onClick={
            () =>

              scrollLeft(containerRef)

          } >{"<"}
          </button>
          <button className="right" onClick={
            () =>

              scrollRight(containerRef)

          }> {">"} </button>


        </div>
        <div className="product-container " ref={containerRef}>



          {filterdata.length > 0 ? (
            filterdata.map((item, index) => {

              return (



                <div className="product" key={item.id || item.product_id || item.product.id} >

                  <div className="header">
                    <img src={item.images?.[0] || item.avatar || item.image  || item.image_link ||''} alt="image is broken" height="200" width="200" />
                  </div>

                  <div className="body">
                    <h5>{item.title || item.name || item.products.name}</h5>
                    <h3> Price : {item.price || item.email  }</h3>
                  </div>

                  <button onClick={() => {
                    addtoCart(item)
                    console.log('product is added to cart')
                    // increaseCart()
                  }
                  }>Add to cart</button>


                </div>

              )
            })
          ) : appliedFilter ? (
            <h3> No data found</h3>
          ) : null}
          {/* map end */}

        </div>

      </div>


    </>


  )
}

export default Product

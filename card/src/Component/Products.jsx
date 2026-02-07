import React, { useEffect, useState } from 'react'

import Card from './Card'
import Footer from './Footer'

function Products() {
    {/* this will be the product page and here we will call the cards to show it my aim is to get the most of reuseable component */ }
        const [loading , setLoading] = useState(true)

    //   fetching the Api to call the products (dummy for practice)
    // data states
    const [webdata, setWebdata] = useState([]);
    const [dummy, setDummy] = useState([]);
    const [user, setUser] = useState([]);
    const [fakepro, setFakepro] = useState([]);
    const [makeUp, setMakeUp] = useState([]);

        // cart and total states
          const [cart, setCart] = useState([]);
          const [total, setTotal] = useState(0);
          let [cartnotify, setCartnotify] = useState(0);
    
    // APis calling

    useEffect(() => {

        Promise.all([
        fetch('https://api.escuelajs.co/api/v1/users').then(function (res) {return res.json()}),
        fetch('https://fakestoreapi.com/products').then(function (res) {return res.json()}),
        fetch('https://makeup-api.herokuapp.com/api/v1/products.json').then(function (res) {return res.json()}),
     fetch('https://api.escuelajs.co/api/v1/products').then(function (res) {return res.json()}), fetch('https://fake-store-api.mock.beeceptor.com/api/products').then(function(res){
        return res.json();})])
            .then(([user, dummy,makeUp , webdata, fakepro]) =>{
                setUser(user);
                setWebdata(dummy);
                setMakeUp(makeUp)
                setDummy(webdata);
                setFakepro(fakepro);

            }
            )
            .catch(function (error
            ) {
                alert(`something went wrong ${error}`)
                // console.log(`something went wrong ${error}`)
            }).finally(()=>{
                setLoading(false)
            })}, [])
            
        
        //   Total of cart items
            useEffect(() => {
              const sum = cart.reduce((acc, item) => acc + Number(item.price || 0), 0)
              setTotal(sum);
            }, [cart]);
          
            const addtoCart = (item)=>{
                setCart(prev => [...prev, item])
                increaseCart()    }

             const increaseCart = () => {
                // console.log('added')
                setCartnotify(prev => prev + 1)}
            
              if (loading) {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
      <div className="spinner-border text-primary" role="status"></div>
      <span className="ms-2">Loading products...</span>
    </div>
  );
}


    return (
        <>
        {/* loading animation or text */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto " >
  <div className="container-fluid " >
    <a className="navbar-brand" href="#">React Cart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent"  >
        <div className="ms-auto">

        <button className='btn btn-primary' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> <span  className="bi bi-cart"></span> : {cartnotify}</button>
        </div>
    </div>

  </div>
</nav>

        <div className="container">

        
        

            <Card title="Gadgets"  data={dummy} filterkey="title"  placeholder="search for title" addtoCart={addtoCart} />
            <Card title="Clothes" data={webdata} filterkey="title" placeholder="search for title" addtoCart={addtoCart}/>
            <Card title="Products" data={fakepro} filterkey="name" placeholder="search for name" addtoCart={addtoCart}/>
            <Card title="Makeup" data={makeUp} filterkey="name" placeholder="search for title" addtoCart={addtoCart}/>
            <Footer />


      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Cart Total</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <h2>Total: {total}</h2>
          <p>Total items {cartnotify}</p>
        </div>
      </div>
      </div>
        </>
    )
}
        

      
export default Products

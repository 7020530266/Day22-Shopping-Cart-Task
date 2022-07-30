import React from "react";
import productdata from "./Data";

export default function Cart(props){
   
  return ( 
    <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">  
        {productdata.map((item,index)=>{
            return (
           <div key ={index
           } className="col mb-5">
                <div className="card h-100">
                {/* <!-- Sale badge--> */}
                          {item.sale ? (<div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>) : ""}
                {/* Product image */}
                    <img className="card-img-top" src={item.productImg} alt="..." />
                {/* <!-- Product details--> */}
                    <div className="card-body p-4">
                        <div className="text-center">

                {/* <!-- Product name--> */}
                            <h5 className="fw-bolder">{item.productName}</h5>
                {/* <!-- Product reviews--> */}
                            {item.productRating 
                             ? 
                             (<div className="d-flex justify-content-center small text-warning mb-2"> 
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                            </div>) 
                            :
                            ""
                             }

                {/* <!-- Product price--> */}
                            {item.productPrice[0]
                           ? 
                           (item.productPrice[1]) 
                           : 
                           <div><span className="text-muted text-decoration-line-through">{item.productPrice[1]}</span>{item.productPrice[2]}</div>
                            }
                        </div>
                    </div>
                 {/* <!-- Product actions--> */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        {item.productaction[0] 
                        ? 
                        (<div className="text-center"><a className="btn btn-outline-dark mt-auto"  href="/">{item.productaction[2]}</a></div>) 
                        : 
                        (<div className="text-center" onClick={props.handleIncre1}><button className="btn btn-outline-dark mt-auto" >{item.productaction[1]}</button></div>)
                        }
                    </div>
                </div>
            </div>)})}
        </div>
    </div>
    </section>

)
}
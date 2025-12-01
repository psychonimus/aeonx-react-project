import React from 'react'
import Header from '../Header/Header'
import supplierX from '/images/supplierXlogo.png'
import xpense from '/images/Xpense.png'
import scanX from '/images/scanX.png'
import logistyX from '/images/Logystix-logo.png'
import GlassButton from '../GlassButton/GlassButton'
import { FaArrowRight } from "react-icons/fa6";

const ProductShowcase = () => {
  return (
    <>
        <section className="proudct-showcase">
            <div className="container">
                <Header
                    subtext="Our Flagship Products"
                    headline="AeonX’s Flagship Products"
                    highlight="Flagship Products"
                />

                <div className="row">
                    <div className="col-md-4">
                        <div className="product-card p-3 pc-1">
                            <div className="inner-product-card p-3">
                                <img src={supplierX} alt="" />
                                <h2>SupplierX</h2>
                                <p>Supplier X is a leading supplier of high-quality products. We are committed to providing our customers with the best possible products and services.</p>
                                <GlassButton
                                    title="Know More"
                                    icon={()=><FaArrowRight />}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-card p-3 pc-2">
                            <div className="inner-product-card p-3">
                                <img src={xpense} alt="" />
                                <h2>XPense</h2>
                                <p>Supplier X is a leading supplier of high-quality products. We are committed to providing our customers with the best possible products and services.</p>
                                <GlassButton
                                    title="Know More"
                                    icon={()=><FaArrowRight />}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-card p-3 pc-3">
                            <div className="inner-product-card p-3">
                                <img src={scanX} alt="" />
                                <h2>ScanX</h2>
                                <p>Supplier X is a leading supplier of high-quality products. We are committed to providing our customers with the best possible products and services.</p>
                                <GlassButton
                                    title="Know More"
                                    icon={()=><FaArrowRight />}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                        <div className="product-card p-3 pc-3">
                            <div className="inner-product-card p-3">
                                <img src={logistyX} alt="" />
                                <h2>LogystiX</h2>
                                <p>Supplier X is a leading supplier of high-quality products. We are committed to providing our customers with the best possible products and services.</p>
                                <GlassButton
                                    title="Know More"
                                    icon={()=><FaArrowRight />}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-card p-3 pc-3">
                            <div className="inner-product-card p-3">
                                <img src={logistyX} alt="" />
                                <h2>LogystiX</h2>
                                <p>Supplier X is a leading supplier of high-quality products. We are committed to providing our customers with the best possible products and services.</p>
                                <GlassButton
                                    title="Know More"
                                    icon={()=><FaArrowRight />}
                                />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                

            </div>
        </section>
    </>
  )
}

export default ProductShowcase
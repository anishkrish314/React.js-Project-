import React from 'react'
import "./Description.css"

const Description = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                  Review (135)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>
              At Pop Cart, we’re dedicated to bringing you the latest trends and high-quality products at unbeatable prices. 
              Every item in our collection is carefully selected to ensure it meets our standards for design, comfort, and durability. 
              Whether you’re shopping for fashion, gadgets, or home essentials, Pop Cart is your one-stop destination for everything you love.
              We value your shopping experience and aim to make it smooth, secure, and enjoyable — from browsing to doorstep delivery.
            </p>
            <p>
              Our team continuously updates the product lineup to keep up with what’s new and exciting. 
              We believe online shopping should be easy, reliable, and fun — that’s why we offer fast shipping, responsive customer support, 
              and regular deals you won’t want to miss. Shop smart, shop confidently — only at Pop Cart.
            </p>
        </div>
    </div>
  )
}

export default Description

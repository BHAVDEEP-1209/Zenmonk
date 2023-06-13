import React from 'react'

const Product = (props) => {
  return (
    <>
<div className="product-card">
		
		<div className="product-tumb">
			<img src={props.item.img} alt="" />
		</div>
		<div className="product-details">
			
			<h4>{props.item.name}</h4>
			<p>{props.item.desc}</p>
			<div className="product-bottom-details">
				<div className="product-price">{props.item.price}.rs</div>
				<div className="product-links">
                    {props.item.quantity}
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default Product
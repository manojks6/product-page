import './Product.css';
function Product(props){
     return(
          <div className="Product">
               <div className='Photo'>
                    <img src={props.image} alt='alt'></img>
               </div>
               <div className='Name'>
                    <p> {props.name}</p>
               </div>
               <div className='Price'>
                    <p> {props.price} </p>
               </div>
          </div>
     )
}
export default Product;
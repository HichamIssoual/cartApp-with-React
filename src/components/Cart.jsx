import { useDispatch, useSelector } from "react-redux";
import { cartClear, removeFromCart } from "../rtk/slices/cart-slice";

function Cart() {
    const products = useSelector(state => state.cart);
    console.log(products);

    const dispatch = useDispatch();
    let totalPrice = 0;
    return <div>
        <h1 className="text-center p-2 bg-primary text-white">Welcome to Cart</h1>
        <div className="d-flex justify-content-center mb-4">
            <button className="btn btn-dark fw-bold fs-5 text-center" onClick={() => {
                dispatch(cartClear())
            }}>Clear Cart</button>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Quantitiy</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                    totalPrice += (+product.price);
                    return <tr key={`${product.id} ${Date.now() * (Math.random() * 100)}`}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td><img src={product.image} alt={product.title} style={{ width: "100px", height: "100px" }} /></td>
                        <td>{product.description}</td>
                        <td>{product.price}$</td>
                        <td>{product.category}</td>
                        <td>{product.quantitiy}</td>
                        <td><button className="btn btn-danger p-2" onClick={() => {
                            dispatch(removeFromCart(product))
                        }}>Delete</button></td>
                    </tr>
                })}
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan={7}>Total Price</th>
                    <th >{(totalPrice).toFixed(2)}$</th>
                </tr>
            </tfoot>
        </table>
    </div>
}
export default Cart;

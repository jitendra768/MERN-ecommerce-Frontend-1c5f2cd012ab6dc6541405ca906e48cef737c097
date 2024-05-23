import NavBar from "../features/navbar/Navbar";
import ProductDetailes from "../features/product-list/components/ProductDetailes";
function ProductDetailPage() {
    return ( 
        <div>
            <NavBar>
               <ProductDetailes></ProductDetailes>
            </NavBar>
        </div>
     );
}

export default ProductDetailPage;
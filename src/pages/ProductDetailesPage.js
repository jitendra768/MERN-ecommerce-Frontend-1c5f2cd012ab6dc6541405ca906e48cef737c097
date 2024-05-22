import NavBar from "../features/navbar/Navbar";
import ProductDetailes from "../features/product-list/components/ProductDetailes";

function ProductDetailesPage() {
    return ( 
        <div>
            <NavBar>
                <ProductDetailes/>
            </NavBar>
        </div>
     );
}

export default ProductDetailesPage;
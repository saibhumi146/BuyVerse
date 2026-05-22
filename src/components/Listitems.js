import react from "react";

const Listitems =() =>{
    return(
        <ul className="text-sm ml-2">
           <li><input type="checkbox" id="womens" />
            <label htmlFor="womens">Womens</label></li>
            <li><input type="checkbox" id="mens" />
            <label htmlFor="mens">Mens</label></li>
             <li><input type="checkbox" id="kids" />
            <label htmlFor="kids">Kids</label></li>
              <li><input type="checkbox" id="accessories" />
            <label htmlFor="accessories">Accessories</label></li>
               <li><input type="checkbox" id="shoes" />
            <label htmlFor="shoes">Shoes</label></li>
        </ul>
    )
};
export default Listitems;
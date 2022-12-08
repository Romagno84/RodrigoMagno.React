import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { data } from "../utils/data";
import { customFetch } from "../utils/customFetch";
import { useParams } from "react-router-dom";

const ItemListContainer = () =>{
    const [datos,setDatos] = useState([]);
    const { categoryid } = useParams();

     useEffect(() =>{
        if(categoryid){
            customFetch(2000, data.filter(item => item.categoryId === parseInt (categoryId)))
      .then(response => setDatos (response))
      .catch(err => console.log(err))

        }else{
            customFetch(2000, data)
            .then(response => setDatos (response))
            .catch(err => console.log(err))
        }
     
     },[categoryid])

    return(
        <ItemList datos = {datos}/>
    )
}

export default ItemListContainer;
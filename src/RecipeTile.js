import React from 'react';
import "./RecipeTile.css"

export default function RecipeTile({recipe}) {
  return (
    <div className="recipeTile" onClick={()=>{
        window.open(recipe["recipe"]["url"]);
    }}>
        <img className="recipeTile_img" src={recipe["recipe"]["image"]} alt='not found'/>
         <p className="recipeTile_name">{recipe["recipe"]["label"]}</p>
    </div>
    
  )
}

import './App.css';
import  Axios from 'axios';
import { useState } from 'react';
import RecipeTile from './RecipeTile';



function App() {
  const [query , setquery] = useState('');
  const [recipes, setrecipes] = useState([]);

  const YOUR_APP_ID= '3e4d6d27' ;
  const YOUR_APP_KEY='3c6492d14726c0cf789987c77fd38f8a'

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;

 async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data)
  }

  const submit = (e)=>{
    e.preventDefault();
    getRecipes();
  }

  return (
   
    <div className="App">
      <h1 className='appName'>F<span>oo</span>die <i>B</i>linders <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-egg-fill" viewBox="0 0 16 16">
  <path d="M14 10a6 6 0 0 1-12 0C2 5.686 5 0 8 0s6 5.686 6 10z"/>
</svg></h1>

<p>search any cuisine or dish you want to eat and learn how to cook it.</p>

      <form className='formSearch' onSubmit={submit}>
        <div className='form-group'>
        <input type="text" className='inputApp ' placeholder='enter dish name' value={query} onChange={(e)=> setquery(e.target.value)}/>
          <input type="submit" className='submitBtn ' value="Search" />
        </div>

      </form>

      <div className='recipiesApp'>
        {recipes.map((recipe,i) => {
         return <RecipeTile key={i} recipe={recipe}/>;
        })}
      </div>
    </div>
  );
}

export default App;

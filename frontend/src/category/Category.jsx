import React,{useState} from 'react';
import "./Category.css";


const categoryData=[
   {
      catName:"All",
      id:1
   },
   {
      catName:"Entertainment",
      id:2
   },
   {
      catName:"Technologies",
      id:3
   },
   {
      catName:"Computer",
      id:4
   },
   {
      catName:"Commerce",
      id:5
   },
   {
      catName:"Programming",
      id:6
   },
   {
      catName:"Networking",
      id:7
   },
   {
      catName:"ReactJs",
      id:8
   },
   {
      catName:"Node",
      id:9
   },
   {
      catName:"Programming",
      id:10
   },
   {
      catName:"Engineering",
      id:11
   },
   {
      catName:"Physics",
      id:12
   },
   {
      catName:"English",
      id:13
   },

   {
      catName:"Mathmatics",
      id:14
   },

   {
      catName:"News",
      id:15
   },

   {
      catName:"Technical",
      id:16
   },

]

const Category = () => {

   const [active, setActive] = useState('All');

   const setActiveCat=(catName)=>{
      setActive(catName);
   }

  return (
     <div className="category">

     {
      categoryData.map((cat)=>{
         return(
            <span  onClick={(e)=>setActiveCat(cat.catName)} key={cat.id}  className={active===cat.catName?"active":"category-name"}>{cat.catName}</span>
         )
      })
     }
      
     </div>
  )
}

export default Category
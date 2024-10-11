# day4



function--> update ---> render


here when multiple states updates happen in a single even handler,react will batch them together and apply them in a single render cycle.

 const  [count,setCount]  = useState(0);
  const handleIncrease = ()=>
  {
    setCount(count + 100)
    setCount(count + 100)
    setCount(count + 100)
    setCount(count + 100)
    
   }

   we have to write like below

   setCount((prev=>prev + 100))
   setCount((prev=>prev + 100))
   setCount((prev=>prev + 100))
   setCount((prev=>prev + 100))
 
 react already developed inside closure property 
   

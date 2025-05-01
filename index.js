  const butn=document.getElementById("btn");
  butn.addEventListener("mousemove",()=>{
    butn.textContent="Change Background";
    
     document.body.style.backgroundImage="url('imag/1746033500858.jpg')";
    
  });
  butn.addEventListener("mouseout",()=>{
  butn.textContent="EXPLORE FULL MENU";
  document.body.style.backgroundImage="url('imag/1746033419935.jpg')";
  });
  

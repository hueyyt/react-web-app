import ModuleList from "./ModuleList";
import React from "react";




function Modules() {
    
    
  return (
    <div>


      <header class="d-none d-md-block">
      
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-light">Collapes All</button>
            
        
              <button type="button" class="btn btn-light"> View Progress</button>
           
            
          
<div class="btn-group">
<button type="button" class="btn btn-default dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
Publish all
</button>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="#">Publish All</a></li>

<li><a class="dropdown-item" href="#">Publish all items and modules</a></li>
<li><a class="dropdown-item" href="#">UnPublish</a></li>
<li><hr class="dropdown-divider" /></li>


</ul>
</div>

              <button type="button" class="btn btn-danger">+ Module</button>


       
      <hr/>
   
  </header>
  
  
      <ModuleList />
   

   

    </div>

    
  );
}

  

export default Modules;
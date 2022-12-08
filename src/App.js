import Button from "./components/Button";



function App() {
  
   return (
    <div>
      <Button 
       type="primary" 
       onClick={()=>{alert("ben 1.butonum")}} 
       buttonText="1.Buton"
      />
      <Button 
       type="secondary" 
       onClick={()=>{alert("ben 2.butonum")}} 
       buttonText="2.Buton"
      />
      <Button 
       type="danger" 
       onClick={()=>{alert("ben 3.butonum")}} 
       buttonText="3.Buton"
      />
    

    </div>
   )
  
};

export default App;

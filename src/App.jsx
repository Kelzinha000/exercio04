import './App.css'

const App = () => {
   return(
    <main className="main">
        <div className="box">
         <h3>Your Result</h3>
         <div className="box-number76">
           <h1>76</h1>
            <h4>of 100</h4>
         </div>
         <h3>Great</h3>
         <p>You scored higer than 65% of the people who have taken these tests.</p>
        </div>
        <div className="summary">
            <h1>Summary</h1>
      
       <span className="spans">Reaction</span>
        <span className="spans">Memory</span>
        <span className="spans">Verbal</span>
        <span className="spans">Visual</span>

         <button className="btn">Continue</button>
        </div>
    </main>
   )
};



export default App;

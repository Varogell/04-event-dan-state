export function Tombol_2({isiPesan, namaTombol}: any){
    return(
      <button 
      className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
      onClick={() => alert(isiPesan)}>
        {namaTombol}
      </button>
    );
  }
  export default function Tombol_1() {
      function handleClick(){
          alert("Tombol telah dipenek");
        }
        
        function handleMouseOver(){
          alert("Eits, mau ngaps ya?");
        }
      return(
          <button 
          className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
          onClick={handleClick}
          // onMouseOver={handleMouseOver}
          onMouseLeave={()=> {
            alert("lahkok pergi?, ayo ngopi")
          }
        }
          >
              Ini Tombol
          </button>
      );
  }
  
  export function Tombol_3({isiPesan, namaTombol}: any){
    return(
      <button 
      className="bg-green-400 hover:bg-green-700 text-white p-2 roun m-2"
      onClick={(e)=>{
        e.stopPropagation();
        alert(isiPesan)
      }
  
      }>
        {namaTombol}
      </button>
    );
  }
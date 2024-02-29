import Child from "./Child";
export default function Parent()
{
    let names = ["Rima","Akash","Roma","Prince","Rishi"]
    return(
        <div>
            {names.map((n,i)=>
            (
                <Child name={n} key={i} />)
            )}
        
        </div>
    )
    
}
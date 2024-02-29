import Child from "./Child"

function App()
{
    let name="Rima",name1="Akash",name2="Roma";
    let age =30, age1=27,age2=25;
    return (
        <div>
            <Child na={name} age={age} />
            <Child na={name1} age={age1}/>
            <Child na={name2} age={age2}/>
        </div>
    )
}
export default App
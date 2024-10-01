function sayHello(){
    console.log("Say Hello");
}

export default function Button(){
    return(
        <div>
            <button onClick={sayHello}>Click Me !!</button>
        </div>
    )
}


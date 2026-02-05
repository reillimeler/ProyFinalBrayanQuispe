export function divide(a,b){
     console.log(`\n[LOG]:divicion por cero ${a} ${b}`);
    if (b === 0) throw new Error(console.log("no  se puede divide entre cero"))
    return a/b;
}

export async function getUsuario() {
    console.log(`\n pasando usuario`);
    return  {id:1,name:'Brayan'};
} 

export async function getUser() {
    console.log(`\n pasando usuario con retraso`);
    return new Promise ((resolve) => {
        setTimeout(()=> {resolve ({id:1,name:'Brayan'});},4500);});
} 
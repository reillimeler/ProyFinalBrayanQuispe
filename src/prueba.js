export function divide(a,b){
    if (b === 0) throw new Error("no  se puede divide entre cero")
    return a/b;
}

export async function getUsuario() {
    return  {id:1,name:'Brayan'};
} 

export async function getUser() {
    return new Promise ((resolve) => {
        setTimeout(()=> {resolve ({id:1,name:'Brayan'});},4500);});
} 
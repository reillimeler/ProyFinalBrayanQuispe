import { describe, expect,it,test } from "vitest";
import {divide,getUser,getUsuario} from "../src/prueba.js";


test(" prueba con numero impar",()=> {
    expect(() => divide(5,0)).toThrow()
})
test(" prueba con numeroo impar",()=> {
    expect(divide(4,2)).toBe(2)
})

describe("brueba basicas",()=>{
    it("compara valores",()=>{
        expect(8).toBeGreaterThan(3)
        expect(4).toBeLessThan(10)
        expect(5).not.toBe(6)
    })
    it("comparacion  de objetos ",()=>{
        const user = { name:'Brayan ',nota:80}
        expect(user).toEqual( { name:'Brayan ',nota:80})
        expect(user.nota).toBeGreaterThan(50)
        
    })
    it('comparacion de textos',()=>{
        expect('vitest es genial').toContain( 'genial')
        
    })
     it('comparacion en un arreglo',()=>{
        expect([2,4,6,8,10]).toContain(8,1)
        expect([2,4,6,8,10,23,434]).toHaveLength(7)
        
    })
    
    
     it('funcion pruebas asincron',async()=>{
        const user = await getUsuario();
        expect(user.name).toBe('Brayan')
        
    })
     it('pruebas asincron',async()=>{
        const user = await getUser();
        expect(user).toEqual({id:1,name:'Brayan'})
        
    })
})
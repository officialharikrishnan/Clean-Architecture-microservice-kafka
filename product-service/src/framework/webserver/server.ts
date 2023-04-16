
import morgan from 'morgan'
import helmet from 'helmet'
import express,{ Application } from 'express'
export const configServer = (app:Application) => {
    app.use(morgan('dev'))
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use(helmet({xssFilter:true}))
}
export const startServer = (app:Application,PORT:number) =>{
    app.listen(PORT,()=>{
        console.log("Product server started on",PORT);
        
    })
}
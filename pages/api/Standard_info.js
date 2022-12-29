import axios from "axios";
import { pool } from "../../config/db";

export default async function handler(req, res){
        try{
            const results = await pool.query("SELECT * FROM standards")
                return res.status(200).json(results)
        } 
        catch(error){
            return res.status(500).json({error})
        }
};
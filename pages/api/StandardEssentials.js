import axios from "axios";
import { pool } from "../../config/db";

export default async function handler(req, res){
    try{
        const results = await Promise.all([
            pool.query("select question from essential_questions where standard_id = ?",[req.body.standard_id]),
            pool.query("select description from essential_skills where standard_id = ?",[req.body.standard_id]),
            pool.query("select vocab from essential_vocabulary where standard_id = ?",[req.body.standard_id]),
        ]) 
            return res.status(200).json(results)
    } 
    catch(error){
        return res.status(500).json({error})
    }
};
import axios from "axios";
import { pool } from "../../config/db";



export default async function handler(req, res){
        try{
            const results = await Promise.all([
                pool.query("call getStandardByGrade(?)",[req.body.firstCharOfGrade]),
                pool.query("call getQuestionsByGrade(?)",[req.body.firstCharOfGrade]),
                pool.query("call getSkillsByGrade(?)",[req.body.firstCharOfGrade]),
                pool.query("call getVocabByGrade(?)",[req.body.firstCharOfGrade]),
            ]) 
            return res.status(200).json(results)
        } 
        catch(error){
            return res.status(500).json({error})
        }
};
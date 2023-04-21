import { pool } from "../../config/db"

export default async function handler(req, res) {

    if (req.method == "GET"){
        try{
        const schools = await pool.query("SELECT school_name FROM schools");
        const divisions = await pool.query("select division_name from divisions");
        const grades = await pool.query("select grade_level from grades");
        const subjectList = await pool.query("select * from subjects");
        return res.status(200).json({schools,divisions, grades, subjectList});
        }
        catch(error){
            return res.status(500).json({ error });
        }
    }

    if (req.method == "POST"){
        try {
            const schools = await pool.query("call getSchoolsByDivision(?)", [req.body.selectedDivision]);
            const div_id = await pool.query("select division_id from divisions where division_name = ?", [req.body.selectedDivision]);
            return res.status(200).json(schools);
        }
        catch (error){
            return res.status(500).json({ error });
        }
    }
  }
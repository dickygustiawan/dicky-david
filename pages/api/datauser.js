//@ts-check
import {db} from '../../lib/db';

const handler = async(_,res) =>{
    
        const result = await db .query(
            
            `SELECT * FROM user ORDER BY nim ASC`
        );
        await db.end;
       
        return res.json(result)
    
};
export default handler;
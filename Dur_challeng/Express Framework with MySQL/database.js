import  mysql  from "mysql2";

const mypool = mysql.createPool({
    host: '127.0.0.1',
    user:'Ninshuti',
    password:'byasana',
    database:'notes_app'
}).promise()


export async function get_notes() {
    const [ans] = await mypool.query('select * from task3')
    return ans;
}

export async function get_note(id) {
    const [ans] = await mypool.query(`select * from task3 where id = ?`,[id])
    return ans;
}


export async function insert_note(title, body) {
    const [ans] = await mypool.query(`insert into task3 (title, body) values(?, ?)`,[title, body])
    return ans;
}

export async function update_note(title, body, id) {
    const [ans] = await mypool.query(`
        update task3 set title = ?, body = ?
        where id = ?`,[title,body,id])
    return ans;
}

export async function delete_note(id) {
    const [ans] = await mypool.query(`delete from task3 where id = ?`,[id])
    return ans;
}

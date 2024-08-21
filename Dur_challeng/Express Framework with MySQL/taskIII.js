import  express2 from "express";
import bodyParse from "body-parser";
import {get_notes,get_note, insert_note,update_note, delete_note} from "./database.js";

const route = express2()
route.use(bodyParse.json());

route.get('/notes', async(que, ans) => {
    const answers = await get_notes()
    console.log('Jama datum are sent by API\n--------------------------------------');
    ans.send(answers);
});

route.get('/note/:id', async(que, ans) => {
    const id = que.params.id
    const answers = await get_note(id)
    console.log('Jama datum are sent by API\n--------------------------------------');
    ans.send(answers);
});

route.post('/note', async(que, ans) => {
    const { title, body } = que.body
    const answers = await insert_note(title, body)
    console.log('Jama datum was inserted into db by API\n--------------------------------------');
    ans.status(200).send(answers);
});

route.put('/note/:id', async (que, ans) => {
    const id = que.params.id;
    const { title, body } = que.body;

    if (title === undefined && body === undefined) {
        return ans.status(400).send({ error: 'No fields to update' });
    }

    const answers = await update_note(title, body, id);
    console.log('Jama datum was updated in db by API\n--------------------------------------');
    ans.status(200).send(answers);
});

route.delete('/note/:id', async(que, ans) => {
    const id = que.params.id
    const answers = await delete_note(id)
    console.log('Jama datum were deleted into db by API\n--------------------------------------');
    ans.send(answers);
});


route.listen(4000, () => {
    console.log('\n--------------------------------------\nServer is running on port 4000\n--------------------------------------');
})
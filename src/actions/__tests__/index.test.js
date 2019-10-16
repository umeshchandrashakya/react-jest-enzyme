import { saveComments } from "actions";
import { SAVE_COMMENTS } from "actions/types";
describe('saveComment',()=>{
      it ('has correct type',()=>{
            const action = saveComments();
            expect
            (action.type).toEqual(SAVE_COMMENTS)
      })
      it ('has correct payload',()=>{
            const action = saveComments('New Comment');
            expect(action.payload).toEqual('New Comment');
      }) 
})
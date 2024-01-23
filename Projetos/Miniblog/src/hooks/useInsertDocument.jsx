import {useState,useEffect, useReducer} from  'react'
import {db} from '../firebase/config'
import {collection,addDoc,Timestamp} from 'firebase/firestore'

const initialState ={
    loading:null,
    error:null
}

const insertReducer = (state,action) =>{
    switch (action.type){
        case "LOADING":
            return {loading: true, error:null}
        case "INSERTED_DOC":
            return {loading:false, error:null}
        case "ERROR":
            return {loading:false, error : action.payload}
        default:
            return state;
    }
}

export const useInsertDocument = (docCollection) =>{
    const [response,dispactch] = useReducer(insertReducer,initialState)
    
    // memory leak

    const [cancelled,setCancelled] = useState(false)

    const chekCancelBeforeDispatch = (action) =>{
        if(!cancelled){
            dispactch(action)
        }
    }

    const insertDocument = async(document) =>{
        chekCancelBeforeDispatch({
            type:"LOADING",
        })
        try {
             const newDocument ={...document,createdAt : Timestamp.now()}

             const insertedDocument = await addDoc(
                collection(db,docCollection),
                newDocument
             )

            chekCancelBeforeDispatch({
                type:"INSERTED_DOC",
                payload:insertedDocument,
            })

        } catch (error) {
            chekCancelBeforeDispatch({
                type:"ERROR",
                payload:error.menssage,
            })
        }
    }

    useEffect(() =>{
        return () => setCancelled(true)
    },[])

    return {insertDocument,response};

}; 
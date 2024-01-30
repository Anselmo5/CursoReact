import {useState,useEffect, useReducer} from  'react'
import {db} from '../firebase/config'
import {doc, deleteDoc} from 'firebase/firestore'

const initialState ={
    loading:null,
    error:null
}

const deleteReducer = (state,action) =>{
    switch (action.type){
        case "LOADING":
            return {loading: true, error:null}
        case "DELETED_DOC":
            return {loading:false, error:null}
        case "ERROR":
            return {loading:false, error : action.payload}
        default:
            return state;
    }
}

export const useDelete = (docCollection) =>{
    const [response,dispactch] = useReducer(deleteReducer,initialState)
    
    // memory leak

    const [cancelled,setCancelled] = useState(false)

    const chekCancelBeforeDispatch = (action) =>{
        if(!cancelled){
            dispactch(action)
        }
    }

    const deleteDocument = async(id) =>{
        chekCancelBeforeDispatch({
            type:"LOADING",
        })
        try {
             const deletedDocument = await deleteDoc(doc(db,docCollection,id))

            chekCancelBeforeDispatch({
                type:"DELETED_DOC",
                payload:deletedDocument,
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

    return {deleteDocument,response};

}; 
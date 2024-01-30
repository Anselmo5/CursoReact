import {useState,useEffect} from 'react'
import {db} from '../firebase/config'
import {

    doc,
    getDoc
} from 'firebase/firestore'


export const useFecthPostDocument = (doCollection,id) =>{
    const [document,setDocument] = useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] =useState(null)

    const [cancelled,setCancelled] = useState(false);

    useEffect(() => {
        async function loadData(){
            if(cancelled) return;

            setLoading(true);

            try {
                const docRef = await doc(db,doCollection,id);
                const docSnap = await getDoc(docRef)

                setDocument(docSnap.data())

                setLoading(false)
            } catch (error) {
                console.log(error)
                setError(error.message)
                setLoading(false)
            }
              }
          
              loadData();
            }, [doCollection,cancelled]);
          
            console.log(document);
          
            useEffect(() => {
              return () => setCancelled(true);
            }, []);
          
            return { document, loading, error }
}
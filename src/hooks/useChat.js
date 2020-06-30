import { useState, useEffect } from 'react';
import { useFirestore } from 'reactfire';

export default function useChat() {
    const msgColl = useFirestore().collection('msg');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [msgs, setMsgs] = useState([]);

    useEffect(() => {
        const unsubscribe = msgColl.onSnapshot(s => {
            setLoading(false);
            setMsgs(s.docs.map(d => ({ id: d.id, ...d.data() })))
        },
        err => { setError(err); }
        )
        return (() => unsubscribe());
    }, [msgColl, setMsgs])

    return { error, loading, msgs }
}

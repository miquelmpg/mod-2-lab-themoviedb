import { useContext, useEffect } from 'react';
import { Form } from '../components/ui';
import { PosterContext } from '../context/poster-context';

function RegisterPage() {
    const { setPoster } = useContext(PosterContext);
    useEffect(() => {
        setPoster({back: null, detail: false, home: true});
    }, []);
    return (
        <Form registerForm/>
    );
}

export default RegisterPage;
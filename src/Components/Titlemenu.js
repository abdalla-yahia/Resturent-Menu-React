import React from 'react';
import { Button } from 'react-bootstrap';

function Titlemenu({ cat,fun }) {
    const btn = ["الكل",...new Set(cat)].map(e => {
        return (
            <Button className='mx-2' onClick={() => fun(e)} variant='info'>{e}</Button>
        )
    })
    return (
        <div className='d-flex justify-content-center flex-column align-items-center'>
            <h1 className='tx border-bottom py-3 my-3'>قائمة الطعام</h1>
            <div className='menu-list my-3'>
                {btn}
            </div>
        </div>
    );
}

export default Titlemenu;
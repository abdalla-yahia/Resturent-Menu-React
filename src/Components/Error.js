import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Error(props) {
    return (
        <div className='d-flex justify-content-center m-auto'>
            <h1>هناك خطأ حدث في العثور على الصفحة ...</h1>
            <h1>404</h1>
            <Link to='/'>
            <Button>رجوع</Button>
            </Link>
        </div>
    );
}

export default Error;
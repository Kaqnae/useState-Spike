import React from 'react';

const LoginPage = ({onLogin }: { onLogin: () => void}) =>{
    return(
        <div>
            <h2>Login Page</h2>
            <button onClick={onLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
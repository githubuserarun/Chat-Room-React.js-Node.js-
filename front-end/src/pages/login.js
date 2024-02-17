import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    return (
        <div className="container">
            <div className="logo">
                <img className='logoImg' src='https://t4.ftcdn.net/jpg/05/11/87/37/360_F_511873784_NLmIMOcuwo9JTuoXJNyR0jQSQOUXUvFk.jpg' alt="logo"/>
                <p>Chat Room</p>
            </div>
            <form method="post">
                <div >
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text" placeholder="Username" required className="form-control form-input" />
                </div>
                <div >
                    <input
                        onChange={(e) => setRoom(e.target.value)}
                        type="text" placeholder="Room" required className="form-control form-input" />
                </div>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null}
                    to={`/chat?name=${name}&room=${room}`}>
                    <input type="submit" className="form-submit" value="Log In" />
                </Link>
            </form>
        </div>
    )
}

export default Login;
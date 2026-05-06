import { useState } from 'react'
import logo from '/logo.svg'
const name = 'logotip'

export default function Header() {
    
    const [now, setNow] = useState(new Date())

    setInterval(() => setNow(new Date()) )

    return (
        <header>
            <img src={logo} alt={name || 'res'} />
            <span>Time is {now.toLocaleTimeString()}</span>
        </header>
    )
}
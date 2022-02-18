function About() {
    return <>
        <h1>About project:</h1>
        <p style={{fontSize: '1.5rem'}}>Simple SPA project to practice and improve knowledge of React-router, React Hooks</p>
        <h2>Using:</h2>
        <ul>
            <li>
                 <a className="blue-text text-lighten-3" href="https://www.themealdb.com/">
                    themealdb.com
                </a>
            </li>
            <li>
                <a className="blue-text text-lighten-3" href="https://materializecss.com/">
                    materializecss.com
                </a>
            </li>
            <li>
                <a className="blue-text text-lighten-3" href="https://ru.reactjs.org/docs/hooks-reference.html">
                    React Hooks
                </a>
            </li>
            <li>
                <a className="blue-text text-lighten-3" href="https://reactrouter.com/">
                    React-Router
                </a>
            </li>
        </ul>
</>
}

export {About};
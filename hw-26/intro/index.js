const Hello = ( {children }) => {
    return <h1>{children}</h1>
};



const div = <div>
    <span>{2 + 2 + 4}</span>
    {Hello({ children: 'Hello World 3'})}
    <Hello>Hello World 4</Hello>
</div>
ReactDOM.createRoot(document.querySelector('#root')).render(div);
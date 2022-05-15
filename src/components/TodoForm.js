import React, { useState } from 'react';

function TodoForm({ addTodo }) {

    const [userInput, setUserInput] = useState("");

    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: new Headers({
                "Content-Type": "application/json",
                "Access-Control-Request-Headers": "Content-Type,API-Key",
                "Accept": "application/json"

            }),
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        return await response.json();
     };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!userInput) return;
        await postData('http://localhost:5000/todo/create',
          { complete: false, task: userInput })
          .then(data => {
              addTodo(data);
              setUserInput("");
           });
     };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                placeholder="Nova tarefa"
                type="text"
                className="input"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
            />
        </form>
    );
};
export default TodoForm;
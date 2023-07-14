import react, { useState } from "react";

type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
};
function App({ value, onIncrement, onDecrement }: Props) {
  const [todoValue, setTodoValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //페이지 리프레쉬 방지
    setTodoValue("");
  };
  console.log(todoValue);

  return (
    <>
      {/* Clicked:{value}times */}
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>
    </>
  );
}

export default App;

type Props = {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
};
function App({ value, onIncrement, onDecrement }: Props) {
  return (
    <>
      Clicked:{value}times
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </>
  );
}

export default App;

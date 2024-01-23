import { useState } from "react";

export const Filter = () => {


  const [answer, setAnswer] = useState(``);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(`typing`);

  if (status === `success`) {
    return <h1>det ble riktig!</h1>;
  }

  async function handlesubmit(e){
  e.preventDefault();
    setStatus(`submitting`);
    try{
      await submitForm(answer);
      setStatus(`success`);
    } catch (err){
      setStatus(`typing`);
      setError(err);
    }
  }
  function handleTextareaChange(e){
    setAnswer(e.target.value)
  }
  return (
    <>
      <h2>Quiz</h2>
      <p>what is the capital of Norway</p>
      <form onSubmit={handlesubmit}>
        <textarea 
        value={answer}
        onChange={handleTextareaChange}
        disabled={status === `submitting`}
        />
        <br />
        <button disabled = {
            answer.length === 0 || status === `submitting`
        }>
          submit
        </button>
        {error !== null &&
        <p> {error.message}</p>
        }
      </form>
    </>
  );
};

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError =
        answer.toLowerCase() !== "oslo";
      if (shouldError) {
        reject(new Error("det ble feil, give up!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}

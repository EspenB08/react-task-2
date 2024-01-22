import { useState } from "react";

export const Filter = () => {
  let status = `empty`;

  if (status === `success`) {
    return <h1>det ble riktig!</h1>;
  }
  return (
    <>
      <h2>Game quiz</h2>
      <p>how much range strength does Masori body give.</p>
      <form>
        <textarea disabled = {
            status === `submitting`
        }/>
        <br />
        <button disabled = {
            status === `empty` || status === `submitting`
        }>
          submit
        </button>
        {status === `error` &&
        <p> give up</p>}
      </form>
    </>
  );
};

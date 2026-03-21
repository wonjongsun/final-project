import { useState, useEffect } from "react";

export default function Remove() {
  let [modals, setModals] = useState(true);
  useEffect(() => {
    let a = setTimeout(() => {
      setModals(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []); //의존성 배열.
  return (
    <div className="container">
      {modals == true ? (
        <div className="bg-warning p-4">
          <h2 style={{ marginBottom: "400px" }}>
            If you want remove your account please tab button{" "}
          </h2>
          <button>remove</button>
        </div>
      ) : null}
      <h2 className="my-2">sorry time out</h2>
      <img
        src="https://mblogthumb-phinf.pstatic.net/MjAyMjA3MDhfMjM1/MDAxNjU3MjY2NDMwMTUw.TMpPAEviN8RMubZbZS_qtyHYVh9oc8XCGGTm7Qc2EhAg.2HNlyzepoH0sbkNazZGpBBPQ0u2loljFcHOwfvJJo8cg.JPEG.ahtskswl/%25EB%258B%25A4%25EC%259A%25B4%25EB%25A1%259C%25EB%2593%259C_(17).jpg?type=w966"
        width="100%"
      />
    </div>
  );
}
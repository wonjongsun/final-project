import { useSelector } from "react-redux";

export default function Cart() {
  let states = useSelector((state) => state);
  console.log(states);
  console.log(states.users);
  console.log(states.carts);
  return (
    <div className="container">
      <h2 className="my-4">Your cart</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Count</th>
            <th scope="col">Change</th>
          </tr>
        </thead>
        <tbody>
          {states.carts.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>
                <button>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
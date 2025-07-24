import "./styles.css";

const LENGTH = 3;

function StackedComponent() {
  return (
    <div className="wrapper">
      {new Array(LENGTH).fill(0).map((_, i) => (
        <div className="card" key={i} style={{ "--index": LENGTH - 1 - i }} />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="box-inner"></div>
        </div>
      </div>
      <StackedComponent />
    </>
  );
}

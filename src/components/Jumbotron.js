const Jumbotron = ({ title, subtitle }) => (
  <div
    className="container-fluid shadow mb-5 text-center bg-secondary text-light"
    style={{ padding: "150px 20px 100px 20px" }}
  >
    <h1 className="display-5 fw-bold">{title}</h1>
    <div className="col-lg-6 mx-auto">
      <p>{subtitle}</p>
    </div>
  </div>
);

export default Jumbotron;

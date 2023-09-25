const ProgramDetail = ({ programa }) => {
  return (
    <>
      {programa.data.length !== 0 && (
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Temario</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <ul className="list-group">
                {programa.data[0].programa.map((item) => {
                  return (
                    <li key={item} className="list-group-item">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProgramDetail;

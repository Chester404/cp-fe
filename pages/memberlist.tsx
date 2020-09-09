import MainLayout from "../components/MainLayout";

export default function Home() {
  return (
    <>
      <MainLayout>
        <div>
          {/* page-header */}
          <div className="page-header">
            <h1 className="page-title">Member List</h1>
            <div className="ml-auto">
              <div className="input-group">
                <input
                  id="searchmember"
                  className="form-control border-right-0 form-rounded"
                  type="text"
                  placeholder="Search..."
                />
                <span
                  className="input-group-append bg-white border-left-0"
                  style={{
                    borderTopRightRadius: "50%",
                    borderBottomRightRadius: "50%",
                  }}
                >
                  <span className="input-group-text bg-transparent">
                    <i className="fe fe-search fa-lg" />
                  </span>
                </span>
              </div>
            </div>
          </div>
          {/* End page-header */}

          <div
            className="table-responsive table-lg"
            style={{ background: "#ffffff", marginBottom: "30px" }}
          >
            <h5 className="mt-5 mb-5 ml-3 table-title">
              Market Circle Individuals
            </h5>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="text-muted">
                    Name{" "}
                    <i
                      className="fe fe-align-left"
                      style={{ fontSize: "20px" }}
                    ></i>
                  </th>
                  <th scope="col" className="text-muted">
                    Location
                  </th>
                  <th scope="col" className="text-muted">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="dropdown">
                      <img
                        src="assets/images/img.jpg"
                        className="brround"
                        alt=""
                        style={{ width: "40px", height: "40px" }}
                      />
                      <span id="memberid" className="ml-5">
                        Godsway Hadson
                      </span>
                      <div className="dropdown-content">
                        <div>
                          <div className="drop-heading">
                            <img
                              src="assets/images/img.jpg"
                              className="brround"
                              alt=""
                              style={{ width: "40px", height: "40px" }}
                            />
                            <span className="ml-2">Godsway Hadson</span>
                          </div>
                          <div className="dropdown-divider m-0" />
                          <div className="ml-3 mr-3 mt-5 mb-5">
                            For more information, please register <br />
                            an <span style={{ color: "blue" }}> account</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="mt-2">Anaji, Takoradi</p>
                  </td>
                  <td>
                    <p className="mt-2">
                      <i
                        className="fe fe-alert-octagon"
                        style={{ fontSize: "large" }}
                      />
                      <i
                        className="fe fe-heart ml-1"
                        style={{ fontSize: "large" }}
                      />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="assets/images/img.jpg"
                      className="brround"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                    <span className="ml-5 column-color">Godsway Hadson</span>
                  </td>
                  <td>
                    <p className="mt-2">Anaji, Takoradi</p>
                  </td>
                  <td>
                    <p className="mt-2">
                      <i
                        className="fe fe-alert-octagon"
                        style={{ fontSize: "large" }}
                      />
                      <i
                        className="fe fe-heart ml-1"
                        style={{ fontSize: "large" }}
                      />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="assets/images/img.jpg"
                      className="brround"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                    <span className="ml-5 column-color">Godsway Hadson</span>
                  </td>
                  <td>
                    <p className="mt-2">Anaji, Takoradi</p>
                  </td>
                  <td>
                    <p className="mt-2">
                      <i
                        className="fe fe-alert-octagon"
                        style={{ fontSize: "large" }}
                      />
                      <i
                        className="fe fe-heart ml-1"
                        style={{ fontSize: "large" }}
                      />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="assets/images/img.jpg"
                      className="brround"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                    <span className="ml-5 column-color">Godsway Hadson</span>
                  </td>
                  <td>
                    <p className="mt-2">Anaji, Takoradi</p>
                  </td>
                  <td>
                    <p className="mt-2">
                      <i
                        className="fe fe-alert-octagon"
                        style={{ fontSize: "large" }}
                      />
                      <i
                        className="fe fe-heart ml-1"
                        style={{ fontSize: "large" }}
                      />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="assets/images/img.jpg"
                      className="brround"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                    <span className="ml-5 column-color">Godsway Hadson</span>
                  </td>
                  <td>
                    <p className="mt-2">Anaji, Takoradi</p>
                  </td>
                  <td>
                    <p className="mt-2">
                      <i
                        className="fe fe-alert-octagon"
                        style={{ fontSize: "large" }}
                      />
                      <i
                        className="fe fe-heart ml-1"
                        style={{ fontSize: "large" }}
                      />
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

            <div
              className="row"
              style={{ margin: "10px", background: "#ffffff" }}
            >
              <div className="col-md-5">
                <label>
                  Showing
                  <select
                    className="ml-3"
                    style={{
                      height: "30px !important",
                      borderRadius: "6px",
                    }}
                  >
                    <option>10</option>
                    <option>25</option>
                    <option selected>30</option>
                    <option>50</option>
                    <option>100</option>
                  </select>{" "}
                  entries
                </label>
              </div>
              <div className="col-md-7">
                <div className="pagination ml-auto" style={{ float: "right" }}>
                  <a href="#">«</a>
                  <a href="#" className="active">
                    1
                  </a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">5</a>
                  <a href="#">6</a>
                  <a href="#">»</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
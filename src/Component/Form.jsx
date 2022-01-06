import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <>
      <form className="form">
        <div className="title">
          <p>Add New Part</p>
        </div>
        {/*-------------------------------( R O W - 1 )-------------------------------------- */}
        <section className="row1">
          <div className="left">
            <div>
              <span>Category</span>
              &nbsp; &nbsp;
              <span>
                <b>Metal</b>
              </span>
            </div>
            <div>
              <label htmlFor="partnumber">Part Number</label>
              <input
                type="text"
                name="partnumber"
                id="partnumber"
                value="BOLT0000001"
                className="background"
              />
            </div>
          </div>
          <div className="right">
            <div>
              <span>SubCategory</span>
              &nbsp; &nbsp;
              <span>
                <b>Bolts</b>
              </span>
            </div>
            <div>
              <label htmlFor="partname">
                <span className="star">*</span>&nbsp; Part Name &nbsp;
                <span className="info">i</span>
              </label>
              <input
                type="text"
                name="partname"
                id="partname"
                value="3mm bolt"
              />
            </div>
          </div>
        </section>
        {/*-------------------------------( R O W - 2 )-------------------------------------- */}
        <section className="row2">
          <div>
            <label htmlFor="description">
              <span className="star">*</span>&nbsp; Part Description &nbsp;{" "}
              <span className="info">i</span>
            </label>
            <textarea
              type="text"
              name="description"
              id="description"
              value="Some brief description comes here"
            />
          </div>
        </section>
        {/*-------------------------------( R O W - 3 )-------------------------------------- */}
        <section className="row3">
          <div className="left">
            <div className="radio">
              <label htmlFor="partcategory">
                <span className="star">*</span>&nbsp; Part Category &nbsp;{" "}
                <span className="info">i</span>
              </label>
              <div id="partcategory">
                <div>
                  <label htmlFor="primarypart">
                    <input type="radio" name="partcategory" id="primarypart" />
                    &nbsp; Primary Part
                  </label>
                </div>
                <div>
                  <label htmlFor="substitutepart">
                    <input
                      type="radio"
                      name="partcategory"
                      id="substitutepart"
                    />
                    &nbsp; Substitute Part
                  </label>
                </div>
              </div>
            </div>
            <div className="radio">
              <label htmlFor="partprocurement">
                <span className="star">*</span> &nbsp; Part Procurement &nbsp;
                <span className="info">i</span>
              </label>
              <div id="partprocurement">
                <div>
                  <label htmlFor="boughtoutpart">
                    <input
                      type="radio"
                      name="partprocurement"
                      id="boughtoutpart"
                    />
                    &nbsp; Bought out Part
                  </label>
                </div>
                <div>
                  <label htmlFor="inhousepart">
                    <input
                      type="radio"
                      name="partprocurement"
                      id="inhousepart"
                    />
                    &nbsp; InHouse Part
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div>
              <label
                htmlFor="searchtheprimartpart"
                style={{
                  color: "#646362",
                }}
              >
                <span className="star">*</span> &nbsp;Select the Primary Part
                &nbsp;<span className="info">i</span>
              </label>
              <div
                style={{
                  color: "#555",
                  display: "flex",
                  padding: " 1px",
                  border: "2px solid #cec9be",
                  "border-radius": "5px",
                }}
              >
                <input
                  type="search"
                  name="searchtheprimartpart"
                  id="searchtheprimartpart"
                  value=""
                  disabled
                />
                <button type="submit">Search</button>
              </div>
            </div>
          </div>
        </section>
        {/*-------------------------------( R O W - 4 )-------------------------------------- */}
        <section className="rowrest">
          {/**----------------------------------------------------------------------- */}
          <div className="row1">
            <div className="left">
              <div>
                <label htmlFor="unitofmeasure">Unit of Measure</label>
                <select id="unitofmeasure" name="unitofmeasure">
                  <option value="">Millimeters (mm)</option>
                </select>
              </div>
            </div>
            <div className="right">
              <div>
                <label htmlFor="measurement">
                  <span className="star">*</span>&nbsp; Measurement &nbsp;
                  <span className="info">i</span>
                </label>
                <select id="measurement" name="measurement">
                  <option value="">10*20*30</option>
                </select>
              </div>
            </div>
          </div>
          {/**----------------------------------------------------------------------- */}
          {/**----------------------------------------------------------------------- */}
          <div className="row1">
            <div className="left">
              <div>
                <label htmlFor="status">
                  <span className="star">*</span>&nbsp; Status &nbsp;
                  <span className="info">i</span>
                </label>
                <input type="text" name="status" id="status" value="In Work" />
              </div>
            </div>
          </div>
          {/**----------------------------------------------------------------------- */}
          <div className="row1">
            <div className="left">
              <div>
                <label htmlFor="3dcadurl">
                  {" "}
                  <span className="star">*</span>&nbsp; 3D CAD Url &nbsp;
                  <span className="info">i</span>
                </label>
                <input
                  type="text"
                  name="3dcadurl"
                  id="3dcadurl"
                  value="abcd e"
                />
              </div>
            </div>
            <div className="right">
              <div>
                <label htmlFor="cost">
                  <span className="star">*</span>&nbsp; Cost &nbsp;
                  <span className="info">i</span>
                </label>
                <input
                  type="text"
                  name="cost"
                  id="cost"
                  value="Enter cost for the part"
                />
              </div>
            </div>
          </div>
          <div className="row1">
            <div className="left">
              <div>
                <label htmlFor="uploadthumbnail">Upload Thumbnail</label>
                <input
                  type="file"
                  name="uploadthumbnail"
                  id="uploadthumbnail"
                  className="custom-file-input"
                />
              </div>
            </div>
          </div>
          <div className="btnContainer">
            <div>
              <button
                style={{
                  color: "rgb(56, 102, 253)",
                  background: "#fff",
                  border: "2px solid #cec9be",
                }}
              >
                Cancel
              </button>
              <button
                style={{
                  color: "#fff",
                  background: "rgb(56, 102, 253)",
                  border: "2px solid rgb(56, 102, 253)",
                }}
              >
                Done
              </button>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default Form;

import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import { useParams, useNavigate } from "react-router-dom";
import PageTitle from "../../components/pagetitle/PageTitle";

const EditGift = () => {
  const { id } = useParams(); // Get the gift ID from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    price: 0,
    image: { preview: "" },
  });
  const [files, setFiles] = useState(null);

  useEffect(() => {
    // Fetch the gift data based on the ID (Mocked for now)
    const giftData = {
      id,
      price: 20,
      image: { preview: "/assets/images/default-ui-image.jpg" },
    };
    setFormData(giftData);
  }, [id]);

  const handleDrop = (acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    if (selectedFile) {
      const preview = URL.createObjectURL(selectedFile);
      setFiles(selectedFile);
      setFormData({ ...formData, image: { preview } });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the updated data to the API
    const updatedGift = { ...formData, image: files };
    console.log("Updated gift data: ", updatedGift);
    navigate("/gifts"); // Redirect back to the Gifts page after saving
  };

  return (
    <>
      <PageTitle title="Edit Gift" />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="price">Price</label>
                      <input
                        id="price"
                        name="price"
                        type="number"
                        className="form-control"
                        value={formData.price}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="card">
                      <div className="card-body p-0">
                        <h5 className="font-size-14 my-3">Upload Banner</h5>
                        <Dropzone
                          onDrop={handleDrop}
                          accept="image/*"
                          multiple={false}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps({ className: "dropzone" })}>
                              <input {...getInputProps()} />
                              <div className="dz-message needsclick">
                                <div className="mb-3">
                                  <i className="display-4 text-muted bx bxs-cloud-upload"></i>
                                </div>
                                <h4 className="text-center">
                                  Drop files here or click to upload.
                                </h4>
                              </div>
                            </div>
                          )}
                        </Dropzone>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="w-100 h-100">
                      <img
                        className="img-fluid rounded d-block mb-3"
                        src={
                          formData.image.preview ||
                          "/assets/images/default-ui-image.jpg"
                        }
                        alt="Gift Banner"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary waves-effect waves-light"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditGift;

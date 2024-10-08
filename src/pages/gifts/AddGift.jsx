import React, { useState } from "react";
import Dropzone from "react-dropzone";
import PageTitle from "../../components/pagetitle/PageTitle";

const AddGift = () => {
  const [formData, setFormData] = useState({
    price: 0,
  });

  // Set initial file with default image
  const [file, setFile] = useState({
    preview: "/assets/images/default-ui-image.jpg",
    name: "Default Image",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDrop = (acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    if (selectedFile) {
      const preview = URL.createObjectURL(selectedFile);
      setFile(Object.assign(selectedFile, { preview }));
    }
  };

  const handleRemoveFile = () => {
    if (file) {
      URL.revokeObjectURL(file.preview);
      setFile({
        preview: "/assets/images/default-ui-image.jpg", // Reset to default image
        name: "Default Image",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("price", formData.price);
    if (file) {
      data.append("file", file); // Send the selected file
    }
    console.log(formData);
    // fetch("/api/gifts", {
    //   method: "POST",
    //   body: data,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  return (
    <>
      <PageTitle title="Add Gift" />
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

                    {/* File Upload Section */}
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
                                  Drop file here or click to upload.
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
                        src={file.preview}
                        alt={file.name}
                      />
                      <button
                        onClick={handleRemoveFile}
                        className="btn btn-sm btn-danger"
                        disabled={file.name === "Default Image"} // Disable button if the image is the default one
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-wrap gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary waves-effect waves-light"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddGift;

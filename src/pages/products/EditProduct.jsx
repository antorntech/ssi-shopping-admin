import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import PageTitle from "../../components/pagetitle/PageTitle";
import { useParams } from "react-router-dom"; // To get the product ID from the URL

const EditProduct = () => {
  const { productId } = useParams(); // Assume the productId is passed in the route
  const [formData, setFormData] = useState({
    productName: "",
    manufacturerName: "",
    manufacturerBrand: "",
    price: "",
    category: "",
    features: [],
    productDescription: "",
    metaTitle: "",
    metaKeywords: "",
    metaDescription: "",
  });

  const [newFeature, setNewFeature] = useState("");
  const [files, setFiles] = useState([]); // State for storing uploaded files
  const [isLoading, setIsLoading] = useState(true); // To show loading spinner while fetching data

  // Fetch existing product details when component mounts
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Replace this with your actual API call to fetch the product by its ID
        const response = await fetch(`/api/products/${productId}`);
        const product = await response.json();

        // Assuming the product data has the same structure as the formData
        setFormData({
          productName: product.productName,
          manufacturerName: product.manufacturerName,
          manufacturerBrand: product.manufacturerBrand,
          price: product.price,
          category: product.category,
          features: product.features || [],
          productDescription: product.productDescription,
          metaTitle: product.metaTitle,
          metaKeywords: product.metaKeywords,
          metaDescription: product.metaDescription,
        });

        // Assuming product.images contains the uploaded images
        const fetchedFiles = product.images.map((image) =>
          Object.assign(new File([], image.fileName), {
            preview: image.url,
          })
        );
        setFiles(fetchedFiles);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setIsLoading(false); // Hide the loading spinner after data is fetched
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFeatureInputChange = (e) => {
    setNewFeature(e.target.value);
  };

  const handleAddFeature = (e) => {
    if (e.key === "Enter" && newFeature.trim()) {
      e.preventDefault(); // Prevent form submission
      setFormData((prev) => ({
        ...prev,
        features: [...prev.features, newFeature.trim()],
      }));
      setNewFeature(""); // Clear input after adding
    }
  };

  const handleRemoveFeature = (featureToRemove) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((feature) => feature !== featureToRemove),
    }));
  };

  const handleDrop = (acceptedFiles) => {
    const newFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemoveFile = (file) => {
    setFiles(files.filter((f) => f !== file));
    URL.revokeObjectURL(file.preview);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can now send formData and files to your update API
    console.log(formData);
    console.log(files);

    // Example of sending formData to update the product
    // Replace with your actual API call
    // fetch(`/api/products/${productId}`, {
    //   method: 'PUT',
    //   body: JSON.stringify({ ...formData, files }),
    // });
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading spinner while fetching data
  }

  return (
    <>
      <PageTitle title="Edit Product" />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-4">
                    {[
                      "productName",
                      "manufacturerName",
                      "manufacturerBrand",
                      "price",
                    ].map((field) => (
                      <div className="mb-3" key={field}>
                        <label htmlFor={field}>
                          {field
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, (str) => str.toUpperCase())}
                        </label>
                        <input
                          id={field}
                          name={field}
                          type="text"
                          className="form-control"
                          value={formData[field]}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    ))}
                  </div>
                  <div className="col-sm-4">
                    <div className="mb-3">
                      <label className="control-label">Category</label>
                      <select
                        name="category"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.category}
                      >
                        <option value="" disabled selected />
                        <option value="FA">Fashion</option>
                        <option value="EL">Electronic</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="control-label">Features</label>
                      <div className="tag-input">
                        {formData.features.map((feature) => (
                          <span key={feature} className="tag">
                            {feature}
                            <i
                              className="fa-solid fa-xmark ms-2 cross-icon"
                              onClick={() => handleRemoveFeature(feature)}
                            ></i>
                          </span>
                        ))}
                        <input
                          type="text"
                          value={newFeature}
                          onChange={handleFeatureInputChange}
                          onKeyDown={handleAddFeature}
                          className="form-control feature-input"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="productDescription">
                        Product Description
                      </label>
                      <textarea
                        className="form-control"
                        id="productDescription"
                        rows="5"
                        name="productDescription"
                        value={formData.productDescription}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    {/* File Upload Section */}
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title mb-3">Product Images</h4>

                        <Dropzone onDrop={handleDrop} accept="image/*" multiple>
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

                        <ul
                          className="list-unstyled mb-0"
                          id="dropzone-preview"
                        >
                          {files.map((file, index) => (
                            <li
                              className="mt-2"
                              key={index}
                              id="dropzone-preview-list"
                            >
                              <div className="border rounded">
                                <div className="d-flex p-2">
                                  <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm bg-light rounded">
                                      <img
                                        className="img-fluid rounded d-block"
                                        src={file.preview}
                                        alt={file.name}
                                      />
                                    </div>
                                  </div>
                                  <div className="flex-grow-1">
                                    <div className="pt-1">
                                      <h5 className="fs-md mb-1">
                                        {file.name}
                                      </h5>
                                      <p className="fs-sm text-muted mb-0">
                                        {(file.size / 1024).toFixed(2)} KB
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex-shrink-0 ms-3">
                                    <button
                                      onClick={() => handleRemoveFile(file)}
                                      className="btn btn-sm btn-danger"
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary waves-effect waves-light"
                  >
                    Update
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

export default EditProduct;

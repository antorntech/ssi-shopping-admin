// import React, { useEffect, useState } from "react";
// import Dropzone from "react-dropzone";
// import PageTitle from "../../components/pagetitle/PageTitle";

// const Gifts = () => {
//   const [gifts, setGifts] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);
//   const [editData, setEditData] = useState({ price: 0, image: null });

//   const fetchGifts = () => {
//     // Fetch data from API (Mocked data)
//     setGifts([
//       { image: { preview: "/assets/images/default-ui-image.jpg" }, price: 10 },
//       { image: { preview: "/assets/images/default-ui-image.jpg" }, price: 20 },
//     ]);
//   };

//   useEffect(() => {
//     fetchGifts();
//   }, []);

//   const handleDelete = (index) => {
//     const updatedGifts = gifts.filter((_, i) => i !== index);
//     setGifts(updatedGifts);
//   };

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setEditData(gifts[index]);
//   };

//   const handleDrop = (acceptedFiles) => {
//     const selectedFile = acceptedFiles[0];
//     if (selectedFile) {
//       const preview = URL.createObjectURL(selectedFile);
//       setEditData({
//         ...editData,
//         image: Object.assign(selectedFile, { preview }),
//       });
//     }
//   };

//   const handleSaveEdit = () => {
//     const updatedGifts = gifts.map((gift, index) =>
//       index === editIndex ? editData : gift
//     );
//     setGifts(updatedGifts);
//     setEditIndex(null);
//   };

//   return (
//     <>
//       <PageTitle title="Gifts" />
//       <div className="row">
//         <div className="col-12">
//           <div className="card">
//             <div className="card-body">
//               <h4 className="card-title">Gift List</h4>
//               <div className="table-responsive">
//                 <table className="table table-striped table-bordered">
//                   <thead>
//                     <tr>
//                       <th>Image</th>
//                       <th>Price</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {gifts.length > 0 ? (
//                       gifts.map((gift, index) => (
//                         <tr key={index}>
//                           <td>
//                             {editIndex === index ? (
//                               <div
//                                 className="d-flex align-items-center gap-3"
//                                 style={{ width: "300px" }}
//                               >
//                                 <Dropzone
//                                   onDrop={handleDrop}
//                                   accept="image/*"
//                                   multiple={false}
//                                 >
//                                   {({ getRootProps, getInputProps }) => (
//                                     <div
//                                       {...getRootProps({
//                                         className:
//                                           "dropzone d-flex align-items-center justify-content-center",
//                                       })}
//                                     >
//                                       <input {...getInputProps()} />
//                                       <p className="text-center">
//                                         Drag 'n' drop a new banner here, or
//                                         click to select.
//                                       </p>
//                                     </div>
//                                   )}
//                                 </Dropzone>
//                                 <img
//                                   src={
//                                     editData.image.preview ||
//                                     "/assets/images/default-ui-image.jpg"
//                                   }
//                                   alt={editData.image.name || "Gift Image"}
//                                   className="img-fluid rounded mt-2"
//                                   style={{ width: "100px", height: "100px" }}
//                                 />
//                               </div>
//                             ) : (
//                               <img
//                                 src={
//                                   gift.image.preview ||
//                                   "/assets/images/default-ui-image.jpg"
//                                 }
//                                 alt={gift.image.name || "Gift Image"}
//                                 className="img-fluid rounded"
//                                 style={{ width: "150px", height: "100px" }}
//                               />
//                             )}
//                           </td>
//                           <td>
//                             {editIndex === index ? (
//                               <input
//                                 type="number"
//                                 className="form-control"
//                                 value={editData.price}
//                                 onChange={(e) =>
//                                   setEditData({
//                                     ...editData,
//                                     price: e.target.value,
//                                   })
//                                 }
//                               />
//                             ) : (
//                               gift.price
//                             )}
//                           </td>
//                           <td>
//                             {editIndex === index ? (
//                               <>
//                                 <button
//                                   className="btn btn-primary btn-sm me-2"
//                                   onClick={handleSaveEdit}
//                                 >
//                                   Save
//                                 </button>
//                                 <button
//                                   className="btn btn-secondary btn-sm"
//                                   onClick={() => setEditIndex(null)}
//                                 >
//                                   Cancel
//                                 </button>
//                               </>
//                             ) : (
//                               <>
//                                 <button
//                                   className="btn btn-warning btn-sm me-2"
//                                   onClick={() => handleEdit(index)}
//                                 >
//                                   Edit
//                                 </button>
//                                 <button
//                                   className="btn btn-danger btn-sm"
//                                   onClick={() => handleDelete(index)}
//                                 >
//                                   Delete
//                                 </button>
//                               </>
//                             )}
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td colSpan="3" className="text-center">
//                           No gifts added yet.
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Gifts;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageTitle from "../../components/pagetitle/PageTitle";

const Gifts = () => {
  const [gifts, setGifts] = useState([]);
  const navigate = useNavigate();

  const fetchGifts = () => {
    // Fetch data from API (Mocked data)
    setGifts([
      {
        id: 1,
        image: { preview: "/assets/images/default-ui-image.jpg" },
        price: 10,
      },
      {
        id: 2,
        image: { preview: "/assets/images/default-ui-image.jpg" },
        price: 20,
      },
    ]);
  };

  useEffect(() => {
    fetchGifts();
  }, []);

  const handleDelete = (id) => {
    setGifts(gifts.filter((gift) => gift.id !== id));
  };

  return (
    <>
      <PageTitle title="Gifts" />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Gift List</h4>
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gifts.length > 0 ? (
                      gifts.map((gift) => (
                        <tr key={gift.id}>
                          <td>
                            <img
                              src={
                                gift.image.preview ||
                                "/assets/images/default-ui-image.jpg"
                              }
                              alt={gift.image.name || "Gift Image"}
                              className="img-fluid rounded"
                              style={{ width: "150px", height: "100px" }}
                            />
                          </td>
                          <td>{gift.price}</td>
                          <td>
                            <Link
                              className="btn border border-secondary btn-sm me-2"
                              to={`/edit-gift/${gift.id}`}
                            >
                              <i className="fa fa-pencil-alt"></i> Edit
                            </Link>
                            <button
                              className="btn border border-secondary btn-sm"
                              onClick={() => handleDelete(gift.id)}
                            >
                              <i className="fa fa-trash"></i> Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" className="text-center">
                          No gifts added yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gifts;

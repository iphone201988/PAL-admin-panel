// import { useEffect, useState } from "react";
// import { Box, Typography } from "@mui/material";
// import DataTable from "../../components/DataTable";
// import {
//   SmartphoneNfc
// } from "lucide-react";
// import {
//   allAiContactsList,
//   deleteAiContact,
// } from "../../utils";
// import Tooltip from "@mui/material/Tooltip";
// import Stack from "@mui/material/Stack";
// import IconButton from "@mui/material/IconButton";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Loader from "../../components/Loader";
// import Avatar from "@mui/material/Avatar";
// import EditAiContactModal from "../../components/EditAiContactModal";
// export default function AiContactList() {
//   const [loading, setLoading] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedContact, setSelectedContact] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await allAiContactsList();
//         console.log("response.data.users", response.data.AiContacts);
//         setUsers(response.data.AiContacts);
//       } catch (error) {
//         console.error("Failed to fetch users:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const s3Url = import.meta.env.VITE_S3_URL;
//   const rows = users.map((user) => ({
//     id: user._id,
//     name: user.name ,
//     expertise: user.expertise,
//     age: user.age ,
//     relationship: user.relationship ,
//     gender:
//       typeof user.gender === "string"
//         ? user.gender.charAt(0).toUpperCase() +
//           user.gender.slice(1).toLowerCase()
//         : "",
//     languagePreference: user.languagePreference,
//     personaContext: user.personaContext,
//     avatar: s3Url
//       ? s3Url + user.aiAvatar
//       : import.meta.env.VITE_SERVERIMG_URL + "/" + user.aiAvatar,
//     description: user.description,
//   }));

//   const handleDeleteClick = async (params) => {
//     setLoading(true);
//     const response = await deleteAiContact(params.id);
//     const users = await allAiContactsList();
//     setUsers(users?.data?.AiContacts);
//     console.log(response);
//     setLoading(false);
//   };

//   const handleEditClick = (contact) => {
//     setSelectedContact(contact);
//     setOpenModal(true);
//   };

//   const handleModalClose = () => {
//     setOpenModal(false);
//     setSelectedContact(null);
//   };

//   const columns = [
//     {
//       field: "avatar",
//       headerName: "Avatar",
//       flex: 0.4,
//       minWidth: 60,
//       sortable: false,
//       renderCell: (params) => (
//         <Avatar
//           alt={params.row.name}
//           src={params.value || "/default-avatar.png"} // fallback avatar
//           sx={{ width: 32, height: 32 }}
//         />
//       ),
//     },
//     { field: "name", headerName: "First name", flex: 1, minWidth: 120 },
//     { field: "expertise", headerName: "Expertise", flex: 1, minWidth: 120 },
//     {
//       field: "languagePreference",
//       headerName: "Language Preference",
//       flex: 1,
//       minWidth: 120,
//     },
//     {
//       field: "relationship",
//       headerName: "Relationship",
//       flex: 1,
//       minWidth: 120,
//     },
//     { field: "description", headerName: "description", flex: 1, minWidth: 120 },
//     {
//       field: "age",
//       headerName: "Age",
//       type: "number",
//       flex: 0.6,
//       minWidth: 80,
//       align: "left",
//       headerAlign: "left",
//     },
//     {
//       field: "gender",
//       headerName: "Gender",
//       flex: 1,
//       minWidth: 160,
//     },
//     {
//       field: "personaContext",
//       headerName: "Persona Context",
//       flex: 1,
//       minWidth: 160,
//       sortable: false,
//       renderCell: (params) => (
//         <Tooltip title={params.value || "--"}>
//           <Typography
//             variant="body2"
//             noWrap
//             sx={{
//               maxWidth: "100%",
//               overflow: "hidden",
//               textOverflow: "ellipsis",
//               whiteSpace: "nowrap",
//             }}
//           >
//             {params.value || "--"}
//           </Typography>
//         </Tooltip>
//       ),
//     },
//     {
//       field: "_id",
//       headerName: "Actions",
//       sortable: false,
//       flex: 0.8,
//       minWidth: 100,
//       renderCell: (params) => (
//         <Stack direction="row" spacing={1}>
//           <Tooltip title="Edit Contact">
//             <IconButton
//               onClick={() => handleEditClick(params.row)}
//               size="small"
//               color="primary"
//             >
//               <EditIcon fontSize="small" />
//             </IconButton>
//           </Tooltip>

//           <Tooltip title="Delete User">
//             <IconButton
//               onClick={() => handleDeleteClick(params.row)}
//               size="small"
//               color="error"
//             >
//               <DeleteIcon fontSize="small" />
//             </IconButton>
//           </Tooltip>
//         </Stack>
//       ),
//     },
//   ];

//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : error? (
//         <Typography  color="error" p={4} >Failed to load AI Contact List</Typography>
//       ):(
//         <Box p={4}>
//           <Box display="flex" alignItems="center" mb={2}>
//             <SmartphoneNfc color="primary" sx={{ mr: 1 }} />
//             <Typography
//               variant="h5"
//               fontWeight="bold"
//               color="primary"
//               sx={{ borderBottom: "2px solid #1976d2", pb: 1 }}
//             >
//               AI Contact List
//             </Typography>
//           </Box>

//           <DataTable users={users} columns={columns} rows={rows} />
//         </Box>
//       )}
//       <EditAiContactModal
//         open={openModal}
//         onClose={handleModalClose}
//         contact={selectedContact}
//         onUpdate={() => {
//           // refresh contacts after update
//           const fetchData = async () => {
//             setLoading(true);
//             try {
//               const response = await allAiContactsList();
//               setUsers(response.data.AiContacts);
//             } catch (error) {
//               console.error("Failed to fetch users:", error);
//             } finally {
//               setLoading(false);
//             }
//           };
//           fetchData();
//         }}
//       />
//     </>
//   );
// }














// import { useState } from "react";
// import { Box, Typography } from "@mui/material";
// import DataTable from "../../components/DataTable";
// import { SmartphoneNfc } from "lucide-react";
// import Tooltip from "@mui/material/Tooltip";
// import Stack from "@mui/material/Stack";
// import IconButton from "@mui/material/IconButton";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Loader from "../../components/Loader";
// import Avatar from "@mui/material/Avatar";
// import EditAiContactModal from "../../components/EditAiContactModal";
// import toast from "react-hot-toast";

// import {
//   useAllAiContactsListQuery,
//   useDeleteAiContactMutation,
//   useUpdateAiContactMutation,
// } from "../../rtk/api/adminApi";

// export default function AiContactList() {
//   const { data, error, isLoading } = useAllAiContactsListQuery();
//   const [deleteAiContact] = useDeleteAiContactMutation();
//   const [updateAiContact] = useUpdateAiContactMutation();
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedContact, setSelectedContact] = useState(null);

//   const users = data?.data?.AiContacts || [];

//   const s3Url = import.meta.env.VITE_S3_URL;

//   const rows = users.map((user) => ({
//     id: user._id,
//     name: user.name,
//     expertise: user.expertise,
//     age: user.age,
//     relationship: user.relationship,
//     gender:
//       typeof user.gender === "string"
//         ? user.gender.charAt(0).toUpperCase() +
//           user.gender.slice(1).toLowerCase()
//         : "",
//     languagePreference: user.languagePreference,
//     personaContext: user.personaContext,
//     avatar: s3Url
//       ? s3Url + user.aiAvatar
//       : import.meta.env.VITE_SERVERIMG_URL + "/" + user.aiAvatar,
//     description: user.description,
//   }));

//   const handleDeleteClick = async (params) => {
//     try {
//       await deleteAiContact(params.id).unwrap();
//       toast.success("AI contact deleted successfully");
//     } catch (error) {
//       toast.error("Failed to delete AI contact");
//       console.error("Delete error:", error);
//     }
//   };

//   const handleEditClick = (contact) => {
//     setSelectedContact(contact);
//     setOpenModal(true);
//   };

//   const handleModalClose = () => {
//     setOpenModal(false);
//     setSelectedContact(null);
//   };

//   const handleSubmit = () => {
//     const updatedData = {
//       name,
//       expertise,
//       languagePreference,
//       relationship,
//       description,
//       age,
//       gender,
//       personaContext,
//       avatar,
//     };
//     onUpdate(updatedData);
//   };

//   const columns = [
//     {
//       field: "avatar",
//       headerName: "Avatar",
//       flex: 0.4,
//       minWidth: 60,
//       sortable: false,
//       renderCell: (params) => (
//         <Avatar
//           alt={params.row.name}
//           src={params.value || "/default-avatar.png"}
//           sx={{ width: 32, height: 32 }}
//         />
//       ),
//     },
//     { field: "name", headerName: "First name", flex: 1, minWidth: 120 },
//     { field: "expertise", headerName: "Expertise", flex: 1, minWidth: 120 },
//     {
//       field: "languagePreference",
//       headerName: "Language Preference",
//       flex: 1,
//       minWidth: 120,
//     },
//     {
//       field: "relationship",
//       headerName: "Relationship",
//       flex: 1,
//       minWidth: 120,
//     },
//     { field: "description", headerName: "Description", flex: 1, minWidth: 120 },
//     {
//       field: "age",
//       headerName: "Age",
//       type: "number",
//       flex: 0.6,
//       minWidth: 80,
//       align: "left",
//       headerAlign: "left",
//     },
//     {
//       field: "gender",
//       headerName: "Gender",
//       flex: 1,
//       minWidth: 160,
//     },
//     {
//       field: "personaContext",
//       headerName: "Persona Context",
//       flex: 1,
//       minWidth: 160,
//       sortable: false,
//       renderCell: (params) => (
//         <Tooltip title={params.value || "--"}>
//           <Typography
//             variant="body2"
//             noWrap
//             sx={{
//               maxWidth: "100%",
//               overflow: "hidden",
//               textOverflow: "ellipsis",
//               whiteSpace: "nowrap",
//             }}
//           >
//             {params.value || "--"}
//           </Typography>
//         </Tooltip>
//       ),
//     },
//     {
//       field: "_id",
//       headerName: "Actions",
//       sortable: false,
//       flex: 0.8,
//       minWidth: 100,
//       renderCell: (params) => (
//         <Stack direction="row" spacing={1}>
//           <Tooltip title="Edit Contact">
//             <IconButton
//               onClick={() => handleEditClick(params.row)}
//               size="small"
//               color="primary"
//             >
//               <EditIcon fontSize="small" />
//             </IconButton>
//           </Tooltip>

//           <Tooltip title="Delete Contact">
//             <IconButton
//               onClick={() => handleDeleteClick(params.row)}
//               size="small"
//               color="error"
//             >
//               <DeleteIcon fontSize="small" />
//             </IconButton>
//           </Tooltip>
//         </Stack>
//       ),
//     },
//   ];

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : error ? (
//         <Typography color="error" p={4}>
//           Failed to load AI Contact List
//         </Typography>
//       ) : (
//         <Box p={4}>
//           <Box display="flex" alignItems="center" mb={2}>
//             <SmartphoneNfc color="primary" style={{ marginRight: 8 }} />
//             <Typography
//               variant="h5"
//               fontWeight="bold"
//               color="primary"
//               sx={{ borderBottom: "2px solid #1976d2", pb: 1 }}
//             >
//               AI Contact List
//             </Typography>
//           </Box>

//           <DataTable users={users} columns={columns} rows={rows} />
//         </Box>
//       )}
//       <EditAiContactModal
//         open={openModal}
//         onClose={handleModalClose}
//         contact={selectedContact}
//         onUpdate={() => {
//           refetch();
//           handleModalClose();
//         }}
//       />

//       {/* <EditAiContactModal
//         open={openModal}
//         onClose={handleModalClose}
//         contact={selectedContact}
//         onUpdate={async (updatedData) => {
//           try {
//             await updateAiContact({
//               id: selectedContact._id,
//               aiContact: updatedData,
//             }).unwrap();
//             toast.success("AI contact updated successfully");
//             handleModalClose();
//           } catch (err) {
//             toast.error("Failed to update contact");
//             console.error("Update error:", err);
//           }
//         }}
//       /> */}

//     </>
//   );
// }



















import { useState } from "react";
import { Box, Typography } from "@mui/material";
import DataTable from "../../components/DataTable";
import { SmartphoneNfc } from "lucide-react";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "../../components/Loader";
import Avatar from "@mui/material/Avatar";
import EditAiContactModal from "../../components/EditAiContactModal";
import toast from "react-hot-toast";

import {
  useAllAiContactsListQuery,
  useDeleteAiContactMutation,
  useUpdateAiContactMutation,
} from "../../rtk/api/adminApi";

export default function AiContactList() {
  const { data, error, isLoading, refetch } = useAllAiContactsListQuery();
  const [deleteAiContact] = useDeleteAiContactMutation();
  const [updateAiContact] = useUpdateAiContactMutation();
  const [openModal, setOpenModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const users = data?.data?.AiContacts || [];

  const s3Url = import.meta.env.VITE_S3_URL;

  const rows = users.map((user) => ({
    id: user._id,
    name: user.name,
    expertise: user.expertise,
    age: user.age,
    relationship: user.relationship,
    gender:
      typeof user.gender === "string"
        ? user.gender.charAt(0).toUpperCase() +
          user.gender.slice(1).toLowerCase()
        : "",
    languagePreference: user.languagePreference,
    personaContext: user.personaContext,
    avatar: s3Url
      ? s3Url + user.aiAvatar
      : import.meta.env.VITE_SERVERIMG_URL + "/" + user.aiAvatar,
    description: user.description,
  }));

  const handleDeleteClick = async (params) => {
    try {
      await deleteAiContact(params.id).unwrap();
      toast.success("AI contact deleted successfully");
    } catch (error) {
      toast.error("Failed to delete AI contact");
      console.error("Delete error:", error);
    }
  };

  const handleEditClick = (contact) => {
    setSelectedContact(contact);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setSelectedContact(null);
  };

  const handleUpdate = async (updatedData) => {
    try {
      await updateAiContact({
        id: selectedContact.id,
        aiContact: updatedData,
      }).unwrap();
      toast.success("AI contact updated successfully");
      refetch(); 
      handleModalClose();
    } catch (error) {
      toast.error("Failed to update AI contact");
      console.error("Update error:", error);
    }
  };

  const columns = [
    {
      field: "avatar",
      headerName: "Avatar",
      flex: 0.4,
      minWidth: 60,
      sortable: false,
      renderCell: (params) => (
        <Avatar
          alt={params.row.name}
          src={params.value || "/default-avatar.png"}
          sx={{ width: 32, height: 32 }}
        />
      ),
    },
    { field: "name", headerName: "First name", flex: 1, minWidth: 120 },
    { field: "expertise", headerName: "Expertise", flex: 1, minWidth: 120 },
    {
      field: "languagePreference",
      headerName: "Language Preference",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "relationship",
      headerName: "Relationship",
      flex: 1,
      minWidth: 120,
    },
    { field: "description", headerName: "Description", flex: 1, minWidth: 120 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      flex: 0.6,
      minWidth: 80,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
      minWidth: 160,
    },
    {
      field: "personaContext",
      headerName: "Persona Context",
      flex: 1,
      minWidth: 160,
      sortable: false,
      renderCell: (params) => (
        <Tooltip title={params.value || "--"}>
          <Typography
            variant="body2"
            noWrap
            sx={{
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {params.value || "--"}
          </Typography>
        </Tooltip>
      ),
    },
    {
      field: "_id",
      headerName: "Actions",
      sortable: false,
      flex: 0.8,
      minWidth: 100,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <Tooltip title="Edit Contact">
            <IconButton
              onClick={() => handleEditClick(params.row)}
              size="small"
              color="primary"
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete Contact">
            <IconButton
              onClick={() => handleDeleteClick(params.row)}
              size="small"
              color="error"
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>
      ),
    },
  ];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Typography color="error" p={4}>
          Failed to load AI Contact List
        </Typography>
      ) : (
        <Box p={4}>
          <Box display="flex" alignItems="center" mb={2}>
            <SmartphoneNfc color="primary" style={{ marginRight: 8 }} />
            <Typography
              variant="h5"
              fontWeight="bold"
              color="primary"
              sx={{ borderBottom: "2px solid #1976d2", pb: 1 }}
            >
              AI Contact List
            </Typography>
          </Box>

          <DataTable users={users} columns={columns} rows={rows} />
        </Box>
      )}
      <EditAiContactModal
        open={openModal}
        onClose={handleModalClose}
        contact={selectedContact}
        onUpdate={handleUpdate}
      />
    </>
  );
}
// import { useEffect, useState } from "react";
// import { Box, Typography } from "@mui/material";
// import DataTable from "../../components/DataTable";
// import {
//   SmartphoneNfc
// } from "lucide-react";
// import {
//   getContacts
// } from "../../utils";
// import Tooltip from "@mui/material/Tooltip";
// import Stack from "@mui/material/Stack";
// import IconButton from "@mui/material/IconButton";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Loader from "../../components/Loader";
// import Avatar from "@mui/material/Avatar";
// import EditAiContactModal from "../../components/EditAiContactModal";

// export default function Contact() {
//   const [loading, setLoading] = useState(false);
//   const [contacts, setContacts] = useState([]);


//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await getContacts();
//         setContacts(response.data.contacts);
//       } catch (error) {
//         console.error("Failed to fetch Cotacts:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);



//   const rows = contacts.map((contact) => ({
//     id: contact._id,
//     name: contact.name ,
//     email: contact.email,
//     message: contact.message,
//   }));

//   const columns = [
    
//     { field: "name", headerName: "Sender Name", flex: 1, minWidth: 120 },
//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1,
//       minWidth: 120,
//     },
//     {
//       field: "message",
//       headerName: "Message",
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
//   ];

//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Box p={4}>
//           <Box display="flex" alignItems="center" mb={2}>
//             <SmartphoneNfc color="primary" sx={{ mr: 1 }} />
//             <Typography
//               variant="h5"
//               fontWeight="bold"
//               color="primary"
//               sx={{ borderBottom: "2px solid #1976d2", pb: 1 }}
//             >
//               Contacts
//             </Typography>
//           </Box>

//           <DataTable users={contacts} columns={columns} rows={rows} />
//         </Box>
//       )}
//     </>
//   );
// }










import { Box, Typography } from "@mui/material";
import DataTable from "../../components/DataTable";
import { SmartphoneNfc} from "lucide-react";
import Tooltip from "@mui/material/Tooltip";
import Loader from "../../components/Loader";
import { useGetContactsQuery } from "../../rtk/api/adminApi";
import { useEffect, useState } from "react";


export default function Contact() {

const { data, error, isLoading } = useGetContactsQuery();
const [rows,setRows] = useState([]);
const [contacts, setContacts] = useState([]);

useEffect(()=>{
  const contacts = data?.data?.contacts || [];

  const rows = contacts.map((contact) => ({
    id: contact._id,
    name: contact.name ,
    email: contact.email,
    message: contact.message,
  }));

  setRows(rows);
  setContacts(contacts);

},[data])


  const columns = [
    
    { field: "name", headerName: "Sender Name", flex: 1, minWidth: 120 },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "message",
      headerName: "Message",
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
  ];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Typography color="error" p={4}>Failed to Load Contacts.</Typography>
      ) : (
        <Box p={4}>
          <Box display="flex" alignItems="center" mb={2}>
            <SmartphoneNfc color="primary" sx={{ mr: 1 }} />
            <Typography
              variant="h5"
              fontWeight="bold"
              color="primary"
              sx={{ borderBottom: "2px solid #1976d2", pb: 1 }}
            >
              Contacts
            </Typography>
          </Box>

          <DataTable users={contacts} columns={columns} rows={rows} />
        </Box>
      )}
    </>
  );
}

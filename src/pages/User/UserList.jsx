import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import DataTable from "../../components/DataTable";
import GroupIcon from "@mui/icons-material/Group";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "../../components/Loader";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import toast from "react-hot-toast";
import Avatar from "@mui/material/Avatar";

import {
  useGetUserListQuery,
  useDeleteUserMutation,
  useActivateOrDeactivateMutation,
} from "../../rtk/api/adminApi";

export default function UserList() {
  const { data, error, isLoading } = useGetUserListQuery();
  const [deleteUser] = useDeleteUserMutation();
  const [toggleUserStatus] = useActivateOrDeactivateMutation();
  const [rows, setRows] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const users = data?.data?.users || [];
    console.log('users', users);

    const s3Url = import.meta.env.VITE_S3_URL;
    const rows = users.map((user) => ({
      id: user._id,
      name: user.fullName || "--",
      nickName: user.nickName || "--",
      email: user.email || "--",
      gender:
        typeof user.gender === "string"
          ? user.gender.charAt(0).toUpperCase() + user.gender.slice(1).toLowerCase()
          : "--",
      isActive: user.isActive,
      avatar: s3Url
        ? s3Url + user.avatar
        : import.meta.env.VITE_SERVERIMG_URL + "/" + user.avatar,
    }));

    setRows(rows);
    setUsers(users);
  }, [data]);

  const handleDeleteClick = async (params) => {
    try {
      await deleteUser(params.id).unwrap();
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error("Failed to delete user");
      console.error("Delete user error:", error);
    }
  };

  const handleToggleStatus = async (params) => {
    try {
      const res = await toggleUserStatus(params.id).unwrap();
      toast.success(res?.message || "Status updated successfully");
    } catch (err) {
      toast.error("Failed to update user status");
    }
  };

  const columns = [
    {
      field: "avatar",
      headerName: "Profile",
      flex: 0.3,
      minWidth: 50,
      sortable: false,
      renderCell: (params) => (
        <Avatar
          alt={params.row.name}
          src={params.value || "/default-avatar.png"}
          sx={{ width: 28, height: 28 }}
        />
      ),
    },
    { field: "name", headerName: "First name", flex: 0.8, minWidth: 100 },
    { field: "nickName", headerName: "Nick Name", flex: 0.8, minWidth: 100 },
    { field: "email", headerName: "Email", flex: 1, minWidth: 120 },
    {
      field: "gender",
      headerName: "Gender",
      flex: 0.7,
      minWidth: 80,
    },
    {
      field: "isActive",
      headerName: "Status",
      flex: 0.6,
      minWidth: 80,
      renderCell: (params) => (
        <Chip
          label={params.value ? "Active" : "Inactive"}
          color={params.value ? "success" : "default"}
          size="small"
          variant="outlined"
        />
      ),
    },
    {
      field: "_id",
      headerName: "Actions",
      sortable: false,
      flex: 0.7,
      minWidth: 80,
      renderCell: (params) => (
        <Stack direction="row" spacing={0.5}>
          <Tooltip
            title={params.row.isActive ? "Deactivate User" : "Activate User"}
          >
            <IconButton
              onClick={() => handleToggleStatus(params.row)}
              size="small"
              color={params.row.isActive ? "success" : "default"}
            >
              {params.row.isActive ? (
                <CheckCircleIcon fontSize="small" />
              ) : (
                <CancelIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete User">
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
          Failed to Load Users.
        </Typography>
      ) : (
        <Box p={2} sx={{ width: "100%", overflowX: "auto" }}>
        
          <Box sx={{ 
            "& .MuiDataGrid-root": {
              border: "none",
              "& .MuiDataGrid-cell": {
                padding: "8px",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#f5f5f5",
              },
            },
            "@media (max-width: 600px)": {
              "& .MuiDataGrid-root": {
                minWidth: "100vw",
                "& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell": {
                  padding: "4px",
                  fontSize: "0.75rem",
                },
              },
            },
          }}>
            <Typography
              variant="h5"
              component="h1"
              fontWeight="bold"
              className="text-2xl sm:text-3xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent relative pb-2"
              sx={{
                borderBottom: "2px solid #4B5EAA",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              Users List
            </Typography>
            <DataTable users={users} columns={columns} rows={rows} />
          </Box>
        </Box>
      )}
    </>
  );
}
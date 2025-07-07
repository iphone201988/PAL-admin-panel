import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import { Lock } from "lucide-react";
import { useUpdatePasswordMutation } from "../../rtk/api/adminApi";
import { useState } from "react";

export default function Setting() {
  const [updatePassword, { isLoading, isError, error, isSuccess }] = useUpdatePasswordMutation();
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (formData.newPassword !== formData.confirmNewPassword) {
      setErrorMessage("New password and confirm password do not match");
      return;
    }
    if (!formData.currentPassword || !formData.newPassword || !formData.confirmNewPassword) {
      setErrorMessage("All fields are required");
      return;
    }

    try {
      await updatePassword({
        oldPassword: formData.currentPassword,
        password: formData.newPassword,
      }).unwrap();
      setSuccessMessage("Password updated successfully!");
      setFormData({ currentPassword: "", newPassword: "", confirmNewPassword: "" });
    } catch (err) {
      setErrorMessage(err?.data?.message || "Failed to update password. Please try again.");
    }
  };

  return (
    <Box 
      p={4} 
      display="flex" 
      flexDirection="column" 
      alignItems="center"
    >
      <Box display="flex" alignItems="center" mb={4}>
        <Lock color="primary" sx={{ mr: 1, fontSize: 28 }} />
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
          Change Password
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 500,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
        }}
      >
        {errorMessage && (
          <Alert severity="error" sx={{ width: "100%" }}>
            {errorMessage}
          </Alert>
        )}
        {successMessage && (
          <Alert severity="success" sx={{ width: "100%" }}>
            {successMessage}
          </Alert>
        )}
        <TextField
          label="Current Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange}
        />
        <TextField
          label="New Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
        />
        <TextField
          label="Confirm New Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          name="confirmNewPassword"
          value={formData.confirmNewPassword}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={isLoading}
          className="flex items-center w-full px-6 py-3 rounded-lg transition-all duration-200 ease-in-out hover:bg-[#4B5EAA] hover:text-white"
          sx={{ mt: 2, alignSelf: "center" }}
        >
          {isLoading ? "Updating..." : "Update Password"}
        </Button>
      </Box>
    </Box>
  );
}
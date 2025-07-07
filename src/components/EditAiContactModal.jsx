import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import { updateAiContact } from "../utils";
import toast from "react-hot-toast";
import Loader from "./Loader";

function EditAiContactModal({ open, onClose, contact, onUpdate }) {
  const [formData, setFormData] = useState(contact || {});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setFormData(contact || {});
  }, [contact]);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      onClose();
      const response = await updateAiContact(formData.id, formData);
      onUpdate(); // refetch or refresh the list
      toast.success("Contact updated successfully!");
      setLoading(false);
    } catch (err) {
      toast.error("Update failed");
    }
  };

  return (
    <>
      {loading && <Loader />}
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>Edit AI Contact</DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                value={formData.name || ""}
                onChange={handleChange("name")}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Age"
                type="number"
                value={formData.age || ""}
                onChange={handleChange("age")}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Gender"
                value={formData.gender || ""}
                onChange={handleChange("gender")}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Relationship"
                value={formData.relationship || ""}
                onChange={handleChange("relationship")}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Expertise"
                value={formData.expertise || ""}
                onChange={handleChange("expertise")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Language Preference"
                value={formData.languagePreference || ""}
                onChange={handleChange("languagePreference")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Description"
                value={formData.description || ""}
                onChange={handleChange("description")}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditAiContactModal;








import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";




const paginationModel = { page: 0, pageSize: 10 };

export default function DataTable({ users , columns, rows}) {
   

  console.log('rows======================',rows);


  return (
    <Box sx={{ width: "100%", overflowX: "auto" }}>
      <Paper
        sx={{
          minWidth: 700,
          height: {
            xs: 400,
            sm: 500,
            md: 600,
            lg: 700,
          },
          p: 1,
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{
            border: 0,
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f5f5f5",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold",
            },
          }}
        />
      </Paper>
    </Box>
  );
}

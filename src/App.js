import React from "react";
import SearchAppBar from "./components/SearchAppBar";
import JobCard from "./components/JobCard";
import jobs from "./jobs.json";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SearchAppBar />
      <Box
        sx={{
          maxWidth: "65%",
          margin: "auto",
          display: "flex",
          flexGrow: 1,
          flexWrap: "wrap",
        }}
      >
        <Grid
          container
          spacing={6}
          sx={{
            mt: 2,
          }}
        >
          {jobs.slice(0, 5).map((job) => (
            <Grid key={job.id} item xs={12} md={4}>
              <Paper elevation={16}>
                <JobCard job={job} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Stack spacing={2}>
        <Pagination count={3} color="error" sx={{ marginX: "auto", mt: 7 }} />
      </Stack>
    </ThemeProvider>
  );
}

export default App;

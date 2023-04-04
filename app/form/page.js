"use client";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import styles from "../page.module.css";
import Link from "next/link";
// this form file  for studying
export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(data.firstName);
  };

  return (
    <main className={styles.main}>
      <Box
        className={styles.mainbox}
        sx={{
          borderRadius: "20px",
          padding: "50px",
        }}
      >
        <Typography variant="h3" margin={2}>
          Form Validation
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: "flex" }}>
            <Box m={2}>
              <Stack spacing={2}>
                <TextField
                  id="outlined-basic"
                  label="FirstName"
                  helperText={errors?.firstName ? "check the name" : null}
                  variant="outlined"
                  {...register("firstName", { required: true, maxLength: 10 })}
                  error={!!errors?.firstName}
                />

                <TextField
                  id="outlined-basic"
                  label="Email"
                  type="email"
                  variant="outlined"
                  helperText={errors?.email ? "check the email " : null}
                  error={!!errors?.email}
                  {...register("email", {
                    required: true,
                    
                    pattern: "[A-Za-z]+@.com",
                  })}
                />
              </Stack>
            </Box>
            <Box m={2}>
              <Stack spacing={2}>
                <TextField
                  id="outlined-basic"
                  label="LastNamne"
                  variant="outlined"
                  helperText={errors?.lastName ? "check the name" : null}
                  {...register("lastName", { required: true, maxLength: 10 })}
                  error={!!errors?.lastName}
                />

                <TextField
                  id="outlined-basic"
                  label="PhoneNumber"
                  variant="outlined"
                  helperText={
                    errors?.phoneNumber ? "phoneNumber is worng" : null
                  }
                  {...register("phoneNumber", {
                    required: true,
                    maxLength: 10,
                  })}
                  error={!!errors?.phoneNumber}
                />
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              helperText={
                errors?.password ? "password must be 8 to 16 dig" : null
              }
              {...register("password", {
                required: true,
                maxLength: 16,
                minLength: 8,
              })}
              error={!!errors?.password}
            />
          </Box>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mb: "20px", mt: "20px" }}
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Link href={"/update"}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mb: "20px", mt: "20px" }}
              fullWidth
            >
              ok
            </Button>
          </Link>
        </form>
      </Box>
    </main>
  );
}

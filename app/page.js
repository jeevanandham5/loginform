"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import styles from "./page.module.css";
import { useForm } from "react-hook-form";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm("");

  const onSubmit = (data) => {
    console.log(data);
    alert("Your form is valid" )
  };
  return (
    <main className={styles.main}>
      <>
        <Typography variant="h2" mb={"100px"} sx={{ fontFamily: "Alkatra" }}>
          Form Validation Using React-hooks-useform
        </Typography>
        <Typography
          variant="h4"
          textAlign={"center"}
          justifyContent={"center"}
          sx={{ fontFamily: "Alkatra", color: "#a10808" }}
        >
          Lets Get started
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Image src={"/form.png"} alt="img" width={250} height={400} priority />
            </Box>
            <Box
              className={styles.formbox}
              sx={{
                borderRadius: "20px",
                border: "2px solid black",
                padding: "50px",
                width: "500px",
                height: "500px",
                marginLeft: "-3px",
                alignItems: "cenetr",
              }}
            >
              <Box sx={{ display: "flex", margin: "15px" }}>
                <Typography
                  variant="h5"
                  sx={{ m: "15px", fontFamily: "Alkatra" }}
                >
                  FirstName
                </Typography>
                <TextField
                  id="FirstName"
                  label="FirstName"
                  type="text"
                  helperText={errors?.firstName ? "check the firstname" : null}
                  variant="outlined"
                  {...register("firstName", { required: true, maxLength: 10 })}
                  error={!!errors?.firstName}
                />
              </Box>
              <Box sx={{ display: "flex", margin: "15px" }}>
                <Typography
                  variant="h5"
                  sx={{ m: "15px", fontFamily: "Alkatra" }}
                >
                  LastName
                </Typography>
                <TextField
                  id="LastName"
                  label="LastName"
                  type="text"
                  helperText={errors?.lastName ? "check the lastName" : null}
                  variant="outlined"
                  {...register("lastName", { required: true, maxLength: 10 })}
                  error={!!errors?.lastName}
                />
              </Box>
              <Box sx={{ display: "flex", margin: "15px" }}>
                <Typography
                  variant="h5"
                  sx={{ m: "15px", marginRight: "58px", fontFamily: "Alkatra" }}
                >
                  Email
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  name="Email"
                  type="email"
                  variant="outlined"
                  helperText={errors?.email ? "invalid email address" : null}
                  {...register("email", {
                    required: true,
                    //use email pattern here
                    pattern: "[A-Za-z]+@.com",
                  })}
                  error={!!errors?.email}
                />
              </Box>
              <Box sx={{ display: "flex", margin: "15px" }}>
                <Typography
                  variant="h5"
                  sx={{ m: "15px", marginRight: "20px", fontFamily: "Alkatra" }}
                >
                  Password
                </Typography>
                <TextField
                  id="Password-basic"
                  label="Password"
                  name="Password"
                  type="Password"
                  variant="outlined"
                  helperText={
                    errors?.password ? "password must contain 8 to 16 " : null
                  }
                  {...register("password", {
                    required: true,
                    maxLength: 16,
                    minLength: 8,
                  })}
                  error={!!errors?.password}
                />
              </Box>
              <Button variant="contained" type="submit" fullWidth>
                Submit
              </Button>
            </Box>
          </Box>
        </form>
      </>
    </main>
  );
}

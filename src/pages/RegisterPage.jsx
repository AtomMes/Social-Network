import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { SocButton } from "./LoginPage";
import LockIcon from "@mui/icons-material/Lock";
import {
  Box,
  Button,
  Input,
  InputAdornment,
  Link,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { blue, purple } from "@mui/material/colors";
import React from "react";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { AccountCircle } from "@mui/icons-material";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "400px",
  margin: "0 auto",
  borderRadius: "10px",
  padding: "40px",
}));

const RegisterButton = styled(Button)(({ theme }) => ({
  backgroundColor: blue[500],
  "&:hover": {
    backgroundColor: blue[600],
  },
}));

const RegisterPage = () => {
  const [err, setErr] = React.useState(false);
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const displayName = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);



      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
          alert("something went wrong");
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, 'userChats', res.user.uid), {
            })
            navigate('/')
          });
        }
      );
    } catch (err) {
      setErr(true);
      alert("something went wrong");
      console.log(err);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "DeepSkyBlue",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <StyledPaper elevation={24}>
        <Typography variant="h4" fontWeight={500} textAlign="center">
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3} flexDirection="column" marginTop="50px">
            <TextField
              label="Email"
              type="email"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="filled"
              label="Username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="filled"
              label="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Stack direction="row" alignItems="center">
              <label for="atom">
                <AddPhotoAlternateOutlinedIcon
                  color="primary"
                  fontSize="large"
                  labeledFor="atom"
                />{" "}
              </label>
              <input id="atom" type="file" style={{ display: "none" }} />
              <Typography textAlign="center">Add an avatar</Typography>
            </Stack>
          </Stack>
          <Stack marginTop="40px">
            <RegisterButton
              variant="contained"
              sx={{ borderRadius: "20px", padding: "8px" }}
              type="submit"
            >
              Register
            </RegisterButton>
          </Stack>
        </form>
        <Stack marginTop="30px" spacing={3}>
          <Typography variant="subtitle2" color="gray" textAlign="center">
            or login with
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <SocButton variant="outlined" color="error">
              Google
            </SocButton>
            <SocButton variant="outlined">Facebook</SocButton>
          </Box>
        </Stack>
      </StyledPaper>
    </Box>
  );
};

export default RegisterPage;

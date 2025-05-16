import { useState } from "react";
import { Box, Button, Modal, Typography, Avatar, Stack } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import useLanguageOption from "../hooks/useLanguageOption";

export default function FileUploadModal({
  handleUploadParent,
  value,
  onChange,
  name,
}) {
  const [open, setOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);
  const { t } = useTranslation();
  const languageOption = useLanguageOption();
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setImagePreview(null);
    setFile(null);
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setImagePreview(URL.createObjectURL(selected));
      setFile(selected);
    }
    onChange({
      target: {
        name: name,
        value: selected,
      },
    });
  };

  const handleUpload = () => {
    // Burada dosyayı backend'e yollayabilirsin.
    console.log("Gönderilecek dosya:", file);
    handleUploadParent(file.name);
    handleClose(); // işlemler bitince modal'ı kapat
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Button
        variant="contained"
        startIcon={<PhotoCamera />}
        onClick={handleOpen}
        style={
          languageOption === "ar"
            ? {
                cursor: "pointer",
                backgroundColor: "white",
                color: "#007BFF",
                width: "16rem",

                display: "flex",
                alignItems: "center", // ikon ve yazı aynı hizada olsun diye
                justifyContent: "center",
                flexDirection: "row-reverse", // RTL için ikon sağda
              }
            : {
                cursor: "pointer",
                backgroundColor: "white",
                color: "#007BFF",
                width: "16rem",
                marginBottom: "2rem",
              }
        }
      >
        {t("upload-photo")}
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 350,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={languageOption === "ar" ? { direction: "rtl" } : {}}
          >
            {t("select-photo")}
          </Typography>

          {imagePreview && (
            <Avatar
              src={imagePreview}
              alt="Önizleme"
              sx={{ width: 200, height: 200, margin: "0 auto", mb: 2 }}
            />
          )}

          <Stack spacing={2} direction="column" alignItems="center">
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="uploadPhoto"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="uploadPhoto">
              <Button
                variant="outlined"
                component="span"
                sx={{ color: "#007BFF", borderColor: "#007BFF" }}
              >
                {t("select-photo")}
              </Button>
            </label>

            <Button
              variant="contained"
              sx={{ backgroundColor: "#007BFF" }}
              disabled={!file}
              onClick={handleUpload}
            >
              {t("upload")}
            </Button>
            <Button onClick={handleClose} sx={{ color: "#007BFF" }}>
              {t("cancel")}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
}

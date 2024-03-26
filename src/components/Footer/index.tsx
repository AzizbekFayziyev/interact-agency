import { Instagram, Telegram, YouTube } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

const Footer = () => {
  return (
    <div className="mt-8 py-5">
      <Divider />
      <Container maxWidth="xl">
        <Stack flexDirection="row" justifyContent="space-around" alignItems="center" flexWrap='wrap'>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ mt: 2 }}
            variant="h6"
          >
            INTERACT 2023 - Barcha huquqlar himoyalangan!
          </Typography>

          <Box sx={{mt: 2}}>
            <IconButton LinkComponent="a" href="https://t.me/interact_uz" target="_blank" sx={{mr: 2}}>
              <Telegram fontSize="large" />
            </IconButton>
            <IconButton LinkComponent="a" href="https://www.instagram.com/interact.uz?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" sx={{mr: 2}}>
              <Instagram fontSize="large" />
            </IconButton>
            <IconButton LinkComponent="a" href="https://youtube.com/@interact_uz?si=q3XQqE-aLFARNE3c" target="_blank">
              <YouTube fontSize="large" />
            </IconButton>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default Footer;

import { Button, Container, InputAdornment, TextField } from "@mui/material";
import Title from "../Title";
import {
  AccountCircle,
  Telegram,
  Create,
  EmailOutlined,
} from "@mui/icons-material";
import { FormEvent, useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const msg = `INTERACT UZ || YANGI XABAR! \n\n Ismingiz: ${name} \n Telefon raqam: ${phone} \n Telegram username: ${username} \n Xabar: ${message}`;
    // Axios settings
    const settings = {
      async: true,
      crossDomain: true,
      url:
        "https://api.telegram.org/bot" +
        import.meta.env.VITE_TELEGRAM_BOT_ID +
        "/sendMessage",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      data: JSON.stringify({
        chat_id: import.meta.env.VITE_TELEGRAM_BOT_CHAT_ID,
        text: msg,
      }),
    };
    // Disable Btn
    setIsDisabled(true);
    //  Send message to telegram bot
    axios(settings)
      .then(function () {
        window.alert(
          "Xabaringiz menejerlarimizga yuborildi, tez orada aloqaga chiqamiz!"
        );

        setName("");
        setUsername("");
        setPhone("");
        setMessage("");
      })
      .catch(function (error) {
        console.log(error);
        window.alert(
          "Xabarni yuborishda xatolik yuz berdi, iltimos qayta urinib ko'ring!"
        );
      })
      .finally(() => {
        setIsDisabled(false);
      });

    return false;
  };
  

  return (
    <Container id="contact" maxWidth="xl" className="my-8">
      <Title
        color="text.primary"
        title={
          <>
            <span className="text-primaryLight">Buyurtma</span> berish uchun 
          </>
        }
      />

      <Container maxWidth="sm">
        <form
          onSubmit={sendMessage}
          data-aos="zoom-in-up"
          data-aos-duration="800"
          className="contact mt-8"
        >
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
            variant="standard"
            label="Ismingiz"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AccountCircle sx={{ mr: 1, mb: 2 }} htmlColor="#8BAAB7" />
                </InputAdornment>
              ),
            }}
            required
          />
          <div className="flex justify-between my-5">
            <TextField
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-[48%]"
              variant="standard"
              label="Telefon raqam"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailOutlined sx={{ mr: 1, mb: 2 }} htmlColor="#8BAAB7" />
                  </InputAdornment>
                ),
              }}
              required
            />
            <TextField
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-[48%]"
              variant="standard"
              label="Telegram username"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Telegram sx={{ mr: 1, mb: 2 }} htmlColor="#8BAAB7" />
                  </InputAdornment>
                ),
              }}
              required
            />
          </div>
          <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            multiline
            rows={4}
            className="w-full"
            variant="standard"
            label="Xabaringiz"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Create sx={{ mr: 1, mb: 2 }} htmlColor="#8BAAB7" />
                </InputAdornment>
              ),
            }}
            required
          />

          <Button
            disabled={isDisabled}
            type="submit"
            fullWidth
            sx={{ mt: 3 }}
            variant="contained"
            size="large"
          >
            Xabarni yuborish
          </Button>
        </form>
      </Container>
    </Container>
  );
};

export default ContactForm;

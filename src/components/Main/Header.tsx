import { Star, OfflineBolt, MonetizationOn } from "@mui/icons-material";
import { Button, Container, Typography, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  const media = useMediaQuery("(max-width: 1180px)");
  const mediaSm = useMediaQuery("(max-width: 620px)");

  useEffect(() => {
    const img: NodeListOf<HTMLImageElement> =
      document.querySelectorAll(".hoverImg");

    window.addEventListener("mousemove", (event) => {
      img.forEach((item, id) => {
        const x = event.pageX / (20 * (id + 1));
        const y = event.pageY / (20 * (id + 1));

        item.style.transform = `translateX(-${x}px) translateY(-${y}px)`;
      });
    });
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mb: 2, position: "relative" }}>
      <div className={`header ${media ? "justify-center" : "justify-between"}`}>
        <div
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos="fade-right"
          className="max-w-[620px]"
        >
          <Typography
            fontWeight={700}
            component="h1"
            variant={mediaSm ? "h4" : "h2"}
            gutterBottom
          >
            Biz taqdim etamiz:{" "}
            <span className="text-primaryLight block">
              <Typewriter
                words={[
                  "Web sayt.",
                  "internet do'kon.",
                  "Landing page.",
                  "Telegram Bot.",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </span>
          </Typography>

          <Typography
            fontWeight={400}
            color="gray"
            variant={mediaSm ? "body1" : "h6"}
            gutterBottom
          >
            Bizning jamoa o'z brendini yangi bosqichga olib chiqmoqchi
            bo'lganlar uchun web sayt, telegram bot, onlayn do'konlar va shunga
            o'xshash online dasturlar tuzib berish bilan shug'ullanadi. Bung
            uchun biz eng zamonaviy texnalogiyalardan foydalanamiz.
          </Typography>

          <div className="mt-5">
            <Button
              LinkComponent="a"
              href="#contact"
              sx={{ mr: 2 }}
              size="large"
              variant="contained"
            >
              Buyurtma berish
            </Button>

            <Button
              LinkComponent="a"
              href="https://t.me/interact_admin"
              target="_blank"
              size="large"
            >
              Kontakt
            </Button>
          </div>

          <Typography variant="body1" sx={{ mt: 7 }}>
            <span className="border-b-2 border-primary">BIZNING</span>{" "}
            AFZALLIKLARIMIZ
          </Typography>

          <div className="header__info">
            <div className="flex">
              <div className="header__info_item">
                <Star fontSize="large" />
                <Typography sx={{ mt: 1 }} variant="h6">
                  SIFATLI
                </Typography>
              </div>
              <div className="header__info_item">
                <OfflineBolt fontSize="large" />
                <Typography sx={{ mt: 1 }} variant="h6">
                  TEZKOR
                </Typography>
              </div>
              <div className="header__info_item">
                <MonetizationOn fontSize="large" />
                <Typography sx={{ mt: 1 }} variant="h6">
                  ARZON
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {!mediaSm && (
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="header__imgs"
          >
            <img
              className="hoverImg absolute top-[15%] right-[25%]"
              src="/hero6.svg"
              alt="developer with laptop"
            />

            <img
              className="hoverImg absolute bottom-0 right-0"
              src="/hero2.svg"
              alt="item"
            />
            <img
              className="hoverImg absolute top-[30%] left-[10%]"
              src="/hero5.svg"
              alt="item"
            />
            <img
              className="hoverImg absolute bottom-0 right-[65%]"
              src="/hero3.svg"
              alt="item"
            />
            <img
              className="hoverImg absolute top-0 right-[70%]"
              src="/hero1.svg"
              alt="item"
            />
            <img
              className="hoverImg absolute left-0 bottom-[15%]"
              src="/hero4.svg"
              alt="item"
            />

            <svg
              id="sw-js-blob-svg"
              viewBox="10 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  <stop
                    id="stop1"
                    stopColor="rgba(210, 116, 253, 1)"
                    offset="0%"
                  ></stop>
                  <stop
                    id="stop2"
                    stopColor="rgba(195, 97, 240, 1)"
                    offset="100%"
                  ></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#sw-gradient)"
                d="M15.5,-24.3C20.8,-23.8,26.3,-21.1,27.1,-16.6C28,-12.2,24.3,-6.1,26,1C27.8,8.1,35,16.3,35.6,23.3C36.3,30.3,30.3,36.2,23.2,33.2C16.2,30.1,8.1,18.2,3.3,12.5C-1.5,6.8,-3.1,7.4,-6.4,8.2C-9.6,9.1,-14.7,10.2,-21.7,8.9C-28.7,7.6,-37.6,3.8,-39.8,-1.2C-41.9,-6.2,-37.1,-12.5,-33,-18.8C-28.9,-25.2,-25.5,-31.7,-20.1,-32C-14.7,-32.4,-7.3,-26.6,-1.1,-24.7C5.1,-22.7,10.2,-24.7,15.5,-24.3Z"
                width="100%"
                height="100%"
                transform="translate(50 50)"
                strokeWidth="0"
                stroke="url(#sw-gradient)"
              ></path>
            </svg>
          </div>
        )}
      </div>

      <div className="bgBlur left-[-10%] top-[20%]"></div>
      <div className="bgBlur right-[-10%] top-[-20%]"></div>
    </Container>
  );
};

export default Header;

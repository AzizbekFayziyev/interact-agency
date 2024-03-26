import { Container, Typography } from "@mui/material";
import Title from "../Title";

const AboutUs = () => {
  return (
    <Container id="about" maxWidth="xl">
      <div className="about mt-14">
        <div className="about__img">
          <img
            data-aos-duration="500"
            data-aos-delay="200"
            data-aos="fade-up"
            src="./about1.png"
            alt="about image"
          />

          <img
            data-aos-duration="500"
            data-aos-delay="400"
            data-aos="fade-up"
            src="./about2.png"
            alt="about image"
          />
        </div>

        <div className="about__content">
          <Title
            align="text-left"
            color="text.primary"
            title="Bizning vazifamiz"
            subTitle="Biz haqimizda"
          />
          <Typography
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="400"
            variant="h6"
            fontWeight={300}
          >
            Biz har bir Brendga ma'sulyat bilan yondashamiz va har bir qilgan
            ishlarimiz mukammal va takrorlanmasligiga e'tibor qaratamiz. Mijozning
            har bir istagini biz iloji boricha mukammal qilib bajarishga
            intilamiz va buning uchun eng ilg'or texnologiyalardan foydalanamiz!
          </Typography>
        </div>

        <div className="bgBlur left-[-15%] top-[20%]"></div>
      </div>

      <img className="mb-10 mt-5" src="/line.png" alt="line" width="100%" />
    </Container>
  );
};

export default AboutUs;

import { Container, Typography } from "@mui/material";
import Title from "../Title";

const BuildingProgress = () => {
  return (
    <Container className="relative" maxWidth="xl">
      <div className="buildingProgress">
        <Title
          align="text-left"
          color="text.primary"
          title="Bizning yondashuvimiz"
        />

        <div className="progress">
          <div
            className="progress__card"
            data-aos="zoom-in-right"  
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <Typography
              color="primary"
              gutterBottom
              component="span"
              variant="h4"
            >
              01.
            </Typography>
            <Typography variant="h6" sx={{ my: 1.5 }}>
              Buyurtmani qabul qilish
            </Typography>
            <Typography variant="body2" color="gray" fontWeight={300}>
              Siz bizga xabar qoldirganingizdan so'ng menejerlarimiz siz bilan
              24 soat ichida aloqaga chiqishadi. Va Siz ularga o'zingizga nima
              kerak ekanligini aytasiz. Ular sizga 0 dan tushintrishadi va har
              bir g'oya va istagingizni inobatga olib ish rejasi tuzishadi.
            </Typography>
          </div>
          <div
            className="progress__card"
            data-aos="zoom-in-right"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            <Typography
              color="primary"
              gutterBottom
              component="span"
              variant="h4"
            >
              02.
            </Typography>
            <Typography variant="h6" sx={{ my: 1.5 }}>
              Bajarilish tartibi
            </Typography>
            <Typography variant="body2" color="gray" fontWeight={300}>
              Biz buyurtmani qabul qilib olganimizdan so'ng uni jamoa azolariga
              taqsimlab beramiz va reja bo'yicha ish bajariladi. Agar siz sayt
              yoki landing page yasatmoqchi bo'lsangiz ular sizdan dizaynini ham
              so'arshadi. Agar sizda dizayn uchun g'oya bo'lmasa biz uni jamo
              dizaynerlariga topshiramiz, siz dizaynni maqulasangiz ish davom
              ettiriladi.
            </Typography>
          </div>
          <div
            className="progress__card"
            data-aos="zoom-in-right"
            data-aos-duration="500"
            data-aos-delay="600"
          >
            <Typography
              color="primary"
              gutterBottom
              component="span"
              variant="h4"
            >
              03.
            </Typography>
            <Typography variant="h6" sx={{ my: 1.5 }}>
              Buyurtmani topshirish
            </Typography>
            <Typography variant="body2" color="gray" fontWeight={300}>
              Biz loyihani oxiriga yetqazganimizdan so'ng demo varyantini sizga
              topshiramiz agar siz maqullasangiz va to'lovni amalga oshirsangiz
              Biz loyihani serverlarga joylab sizga topshiramiz.
            </Typography>
          </div>
        </div>
      </div>

      <div className="bgBlur right-[-15%] top-[30%]"></div>
    </Container>
  );
};

export default BuildingProgress;

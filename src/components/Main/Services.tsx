import {
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  SvgIconTypeMap,
  Typography,
} from "@mui/material";
import {
  ArrowOutward,
  Description,
  ShoppingBasket,
  Layers,
  SmartToy,
  Code,
  DataObject,
} from "@mui/icons-material";
import Title from "../Title";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useState } from "react";

interface IService {
  title: string;
  img: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  desc: string;
}

const Services = () => {
  const [dialog, setDialog] = useState(false);
  const [dialogDesc, setDialogDesc] = useState<IService | undefined>();

  const onHandleOpen = (service: IService) => {
    setDialog(true);
    setDialogDesc(service);
  };

  const onHandleClose = () => {
    setDialog(false);
  };

  const serviceTypes: IService[] = [
    {
      title: "Bir sahifali sayt",
      desc: "Landing page (bir sahifali sayt) – bu foydalanuvchi e’lonni bosganida saytga kiradigan sahifa. Landing sahifasining asosiy xususiyati shundaki, u harakatga da’vatni o’z ichiga oladi va mehmonga faqat ushbu saytga kelgan ma’lumotni taqdim etadi.",
      img: "/services/1.png",
      icon: Description,
    },
    {
      title: "Internet do'kon",
      desc: "Internet do’kon – elektron tijorat bilan shug’ullanishga qaror qilgan kompaniyalar uchun ajoyib yechimdir. Onlayn do’konni yaratish kompaniyani tez o’sib borayotgan Internet bozoriga olib chiqadi va kompaniyaga mahsulotlarini butun dunyo bo’ylab sotish imkonini beradi. Saytni boshqarish uchun qulay Sayt Boshqaruv Tizimi (CMS) taqdim etiladi, bu foydalanuvchi matn va foto materiallarni osongina yangilashga imkon beradi.",
      img: "/services/2.png",
      icon: ShoppingBasket,
    },
    {
      title: "Web sayt",
      desc: "Web sayt –  bu qanday faoliyat yuritayotgan korxona uchun ideal yechim. Ushbu toifadagi veb-resurslarning o’ziga xosligi butunlay kompaniyaning ish faoliyatiga bog’liq. Aynan shu omillar asosida korporativ veb-saytlar ishlab chiqiladi. Ammo uning asosiy vazifasi – bu mavjud tashkilotni har tomonlama qo’llab quvvatlash, ish olib borishning  kerakli innovatsion asboblarini taqdim etishdir.",
      img: "/services/3.png",
      icon: Layers,
    },
    {
      title: "Telegram Bot",
      desc: "Telegram Bot - Bu o'z biznesini telegram orqali rivojlantrishni xohlaganlar uchun eng yaxshi yechim. Telegram botlar har xil turda bo'lishi mumkin. Masalan Online dokonlar yoki brend haqida info beruvchi botlar hozirda ommalashgan. Bunday botlar orqali mijozlar uydan chiqmasdan telegramdan mahsulotlar buyurtma qilishlari mumkin va bu sotuvchi va mijozga bir qancha qulayliklar keltradi.",
      img: "/services/4.png",
      icon: SmartToy,
    },
    {
      title: "API",
      desc: "Api - Bu ma'lumotlar bazasidagi ma'lumotlarni hamma birdek tushunuvchi json, xml yoki shunga oxshash boshqa javob turlariga o'zgartrib beradigan texnalogiya. Bu api orqali frontend dasturchilar o'z loyihalarida ma'lumotlar bazasi bilan ishlay oladilar.",
      img: "/services/5.png",
      icon: DataObject,
    },
    {
      title: "Back End",
      desc: "Back-end - Bu web sitelarni ko'p vazifa bajarishini va katta malumotlar bilan ishlashini taminlovchi texnalogiya. Ushbu texnalogiyani qoshish orqali oddiy web-saytlarni ham ancha mukammal ko'rinishga olib kelish mumkin. Web sitelar orqali ishlab chiqaruvchilar o'z mahsulotlari haqida ma'lumot berishlari va ularni ancha oson sotishlari mumkin bo'ladi.",
      img: "/services/6.png",
      icon: Code,
    },
  ];

  return (
    <div id="services" className="services pb-10">
      <Container maxWidth="xl">
        <Title
          subTitle="Xizmatlarimiz"
          title="Biz nima qilamiz"
          desc="Bizning jamoamiz veb-saytlarni ishlab chiqishga ixtisoslashgan bo'lib, har bir mijozning ehtiyojlarini qondirishga moslashtirilgan yechimlarni taklif qiladi. Biz noyob dizayn, ajoyib funksionallik va yuqori unumdorlikka ega veb-saytlarni yaratamiz."
          color="black"
        />

        <div className="service">
          {serviceTypes.map((service, id) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay={100 * id}
              onClick={() => onHandleOpen(service)}
              key={id}
              className="service__item"
            >
              <service.icon
                className="service__item_icon"
                fontSize="large"
                sx={{ mb: 2 }}
              />
              <div className="flex justify-between">
                <Typography className="service__item_text" variant="h6">
                  {service.title}
                </Typography>
                <div className="service__item_arrow">
                  <ArrowOutward />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Modal description of services */}
      <Dialog
        className="backdrop-blur-sm"
        open={dialog}
        onClose={onHandleClose}
      >
        <div className="p-1">
          <img src={dialogDesc?.img} alt="img" />
        </div>
        <DialogTitle>{dialogDesc?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogDesc?.desc}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Services;

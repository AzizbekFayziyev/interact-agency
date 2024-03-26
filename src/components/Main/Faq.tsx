import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import Title from "../Title";
import { ExpandMore } from "@mui/icons-material";

interface IFaqs {
  question: string;
  answer: string;
}

const Faq = () => {
  const faqs: IFaqs[] = [
    {
      question: "Mening buyurtmamga qancha vaqt sarflaysizlar?",
      answer:
        "Buyurtma turiga qarab buyurtmani to'liq bitqazish uchun 7 kundan 1 oygacha vaqt sarflanadi.",
    },
    {
      question:
        "Men buyurtma berganimdan so'ng jarayon haqida xabardor bo'lib tura olamanmi?",
      answer:
        "Xa albatta, bizning menejerlamiz sizga jarayon haqida xabar berib turishadi. Sizga qayeridir yoqmasa biz sizning taklifingizdan kelib chiqqan holda o'zgartrib beramiz.",
    },
    {
      question: "To'lov oldindan olinadimi?",
      answer:
        "Yoq to'lovni buyurtma bitganidan so'ng to'lshingiz mumkin bo'ladi va biz to'lovni olganimizdan so'ng buyurtmani sizga taqdim etamiz!",
    },
    {
      question: "Men qandaydir chegirmalardan foydalana olamanmi?",
      answer:
        "Ha biz har oy ijtimoiy tarmoqlarmizda har xil chegirmalar o'tkazib turamiz. Agar siz bizni ijtimoiy tarmoqlarda kuzatib borsangiz, chegirmalarni qo'lga kiritishingiz mumkin bo'ladi",
    },
    
  ];

  return (
    <div id="faq" className="faq">
      <Container maxWidth="xl" className="mt-20 py-8">
        <Title
          color="black"
          desc="Tez-tez beriladigan savollarga javoblar"
          title="FAQ"
        />

        <Container maxWidth="md" className="mt-8">
          <div data-aos="zoom-in-up" data-aos-duration="800">
            {faqs.map((e, id) => (
              <Accordion
                className="mt-2"
                key={id}
                sx={{
                  borderRadius: "30px",
                  padding: "8px",
                  background: "transparent",
                  border: "1px solid #555B60",
                  overflow: "hidden",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMore fontSize="large" className="text-primary" />
                  }
                >
                  <Typography color="black" fontWeight={400} variant="h6">
                    {e.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="black">{e.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Faq;

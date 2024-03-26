import { Typography, useMediaQuery } from "@mui/material";
import { FC } from "react";

interface IProps {
  color: "text.primary" | "black";
  subTitle?: string;
  title: string | any;
  desc?: string;
  align?: string;
}

const Title: FC<IProps> = ({
  color,
  subTitle,
  title,
  desc,
  align = "text-center",
}) => {
  const mediaSm = useMediaQuery("(max-width: 620px)");

  return (
    <div className={`${align} max-w-[500px] mx-auto`}>
      {subTitle && (
        <Typography
          data-aos="fade-up"
          data-aos-delay="300"
          className="syne"
          color={color}
          variant="h6"
        >
          {subTitle}
        </Typography>
      )}

      <Typography
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
        fontWeight={500}
        letterSpacing={5}
        color={color}
        variant={mediaSm ? "h4" : "h3"}
        component="h1"
      >
        {title}
      </Typography>

      {desc && (
        <Typography
          data-aos="fade-in"
          data-aos-duration="600"
          data-aos-delay="400"
          sx={{ mt: 2 }}
          fontWeight={300}
          color="gray"
          paragraph
        >
          {desc}
        </Typography>
      )}
    </div>
  );
};

export default Title;

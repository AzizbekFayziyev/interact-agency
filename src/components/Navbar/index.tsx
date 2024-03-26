import { DarkMode, LightMode, NotesOutlined } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import React, { useContext, useState } from "react";
import ThemeContext from "../../theme/themeContext";

const Navbar = () => {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchor);
  // Navbar links
  const links = [
    {
      text: "Xizmatlar",
      link: "#services",
    },
    {
      text: "Biz haqimizda",
      link: "#about",
    },
    {
      text: "FAQ",
      link: "#faq",
    },
    {
      text: "Kontakt",
      link: "#contact",
    },
  ];

  const openMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchor(null);
  };
  // Site mode
  const theme = useContext(ThemeContext);
  // Responsive
  const media = useMediaQuery("(max-width: 1000px)");
  const mediaMb = useMediaQuery("(max-width: 1180px)");
  // Change site mode
  const changeTheme = () => {
    theme?.setToggleTheme((e) => !e);
    // Save site mode to localStorage
    localStorage.setItem("siteTheme", theme?.toggleTheme ? "light" : "dark");
  };

  return (
    <>
      <AppBar
        position="relative"
        color="transparent"
        sx={{ boxShadow: 0, mb: mediaMb ? 5 : 10 }}
      >
        <div className={!media ? "px-8" : ""}>
          <Toolbar className="flex items-center justify-between">
            <img
              className="pt-3"
              src={theme?.toggleTheme ? "/logo-dark.png" : "/logo.png"}
              width={180}
              height={180}
              alt="logo"
            />
            {!media && (
              <ul>
                {links.map((e, id) => (
                  <Link
                    className="border-b-2 border-transparent hover:border-primary transition"
                    sx={{ mx: 3, fontSize: 20, fontWeight: 300 }}
                    key={id}
                    href={e.link}
                    color="inherit"
                    underline="none"
                  >
                    {e.text}
                  </Link>
                ))}
              </ul>
            )}

            <div className="flex">
              <IconButton onClick={changeTheme}>
                {theme?.toggleTheme ? <LightMode /> : <DarkMode />}
              </IconButton>
              <Divider sx={{ mx: 1 }} flexItem orientation="vertical" />
              {media ? (
                <IconButton onClick={openMenu} edge="end">
                  <NotesOutlined fontSize="large" />
                </IconButton>
              ) : (
                <Button
                  LinkComponent="a"
                  href="#contact"
                  sx={{ ml: 1 }}
                  color="primary"
                  size="large"
                  variant="outlined"
                >
                  Buyurtma berish
                </Button>
              )}
            </div>
          </Toolbar>
        </div>
      </AppBar>

      <Menu anchorEl={anchor} open={menuOpen} onClose={closeMenu}>
        {links.map((e, id) => (
          <Link
            color="inherit"
            underline="none"
            onClick={closeMenu}
            key={id}
            href={e.link}
          >
            <MenuItem>{e.text}</MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  );
};

export default Navbar;

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import { theme } from "./theme/mainTheme";
import { QRCodeComponent } from "./components/QRCodeComponent/QRCodeComponent";
import qrImg from "./assets/qr-code-component-main/images/image-qr-code.png";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <QRCodeComponent
          qrImg={qrImg}
          boldText="Improve your front-end skills by building projects"
          descriptionText="Scan the QR code to visit Frontend Mentor and take your coding
        skills to the next level"
        />
      </ThemeProvider>
    </>
  );
};

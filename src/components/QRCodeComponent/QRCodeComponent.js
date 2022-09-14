import {
  StyledQRCodeComponent,
  StyledQRCodeComponentWrapper,
  StyledQRCode,
  StyledTitle,
  StyledDescription,
} from "./QRCodeComponentStyle";

export const QRCodeComponent = ({ qrImg, boldText, descriptionText }) => {
  return (
    <>
      <StyledQRCodeComponentWrapper>
        <StyledQRCodeComponent>
          <StyledQRCode qrImg={qrImg} />
          <StyledTitle>{boldText}</StyledTitle>
          <StyledDescription>{descriptionText}</StyledDescription>
        </StyledQRCodeComponent>
      </StyledQRCodeComponentWrapper>
    </>
  );
};

import styled from "styled-components";
import qrCode from "../../assets/qr-code-component-main/images/image-qr-code.png";

export const StyledQRCodeComponentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledQRCodeComponent = styled.div`
  width: 320px;
  height: 520px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledQRCode = styled.div`
  background-image: ${({ qrImg }) => `url(${qrImg})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 15px;
  width: 300px;
  height: 300px;
  border-radius: 20px;
  flex-basis: 60%;
`;

export const StyledTitle = styled.p`
  flex-basis: 15%;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.darkBlue};
  display: flex;
  align-items: center;
  text-align: center;
  width: 80%;
`;

export const StyledDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.grayishBlue};
  flex-basis: 15%;
  display: flex;
  align-items: center;
  text-align: center;
  width: 80%;
`;

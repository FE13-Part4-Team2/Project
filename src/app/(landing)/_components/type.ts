export interface MiddleBoxProps {
  imageSrc: string;
  imageAlt: string;
  imageOnTop?: boolean;
  iconSrc: string;
  iconAlt: string;
  textLines: [string, string];
  textLeft?: boolean;
  tabletReverse?: boolean;
  mobileReverse?: boolean;
  gradient?: boolean;
  className?: string;
}

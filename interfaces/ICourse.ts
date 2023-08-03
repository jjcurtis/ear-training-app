import { StaticImageData } from "next/image";

export default interface ICourse
{
  imageSrc: string | StaticImageData,
  title: string,
  description: string,
  width?: number,
}
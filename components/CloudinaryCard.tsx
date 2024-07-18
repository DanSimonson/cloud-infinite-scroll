import Image from "next/image";

export interface CloudinaryProp {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
}

interface Prop {
  CLProp: CloudinaryProp;
  index: number;
}

function CloudinaryCard({ CLProp }: Prop) {
  return (
    <div className="max-w-sm rounded relative w-full">
      <div className="relative w-full h-[37vh]">
        <Image
          src={CLProp.secure_url}
          alt="cloud image"
          width={CLProp.width}
          height={CLProp.height}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
export default CloudinaryCard;

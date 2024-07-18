import Image from "next/image";
import { v2 as cloudinary } from "cloudinary";
import CloudinaryCard, { CloudinaryProp } from "@/components/CloudinaryCard";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

async function Home() {
  const { resources } = await cloudinary.search
    .expression("tags=all")
    .max_results(10)
    .execute();

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {resources.map((item: CloudinaryProp, index: number) => (
          <CloudinaryCard key={item.public_id} CLProp={item} index={index} />
        ))}
      </section>
    </main>
  );
}

export default Home;

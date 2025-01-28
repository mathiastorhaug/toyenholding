"use client";

import { useState } from "react";
import AlbumCover from "../components/album-cover";
import Search from "../components/search";

const albums = [
  {
    title: "Vito",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/3b5e/c7cc/285ea1dc0e7b6f23741b4373fea572c2?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=drBR9KZV0dW7RagYGZgNKQxjURp5kH6oa19mYRRGEUKaAuLqQPMC797~LJHTICVVRauONHNR7m4iQ6nwro2AvRihQFVU3s8SYv-TWT~fATDIzcSCJRTvTSUiuiHtwTanbjqfPUcEyHgsD7xmYxV-fujKmNsZbcfrrPjkNysYBSzldPTI546vRoQwx3P~jhZi28TVkXFR~-feBzrJ2-hNTIqRdA8Bbg7JnM5Mo49LW52NzH5xhlDMb-YPA5lv9AnvHy5qDtMkxHBRR23H9jc-6jG1pcIsdIw2eqyQ3LAqOcqjnmoV7OuA2kghxaQZAi7OZV8xGRyDxTMqFEbAxbwy9A__",
  },
  {
    title: "Tøyen Holding 3",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/44a6/4d38/78b245e850bcdf15a9aaed03fa5e545b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l2LBw3vkfNoXgVshSv4AXbXDZXwcfJM3A3X1pzCujaeUKtuDx5riXJgGnCqVrHKW3YlHH9AjQ4miCKWGGuzB3UUfSa2xPwhD4s9eSRWmQtyRu5KyG9EOpx6wewGilVfXewLCitEnT~jBU9QEfw6HBnKe17pdG8GmdIKgVUp4f7vQXFKd~v0Ec~9w~OckCEaci3NzBRjGIoc0rm6R8YtcOpkTrR8ezv-NZMatNLWOQDyTJDev-NFyo-Y4VWEIkj8UOgeK1VVOQOuRzVpfX7OT~GxqONA7wZbCPfKEa814E-OoIWSamlxxlJmCwgGaZkQqR6DlsNneDzK6hiipOTW9TA__",
  },
  {
    title: "Tøyen Holding 2",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/8898/6e8b/8d148270bdac64ebda2d96e08e19fbd2?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HDsQ5nu-L4VZO5sybNCrS8jL6Og26-Hq7326UsqlotvBSFlexoi0UeWMeazOn0ZWGscRMt2CttghTkRtWrgVJgKaFyqzenCv1sHha0f1eqx45oQT7h2UR7XNxTxqZP9jBKYiFfLyffwtAgqJ5wAyzhHIxz9BZw0EjRIoqrDeA5CqeWPK~k67xPdi5RhYAksQGiU6PB4FBXW-DDiHWhxfiwGuqa1u6yciNreFGnbDgJ1RyBdg1boLNcasNfkYEMjEXtLAnB1ZRbVXq8-EV2WhPV3-hM4QnyYDucQFGzhY~TfbiSEGs3fu~XkgzYM2SZ9ADS3PV2iDi4z09ikXozKzbw__",
  },
  {
    title: "Tøyen Holding",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/a60f/d386/fe4ac9aa599b34680ef828b6c1151428?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mi9d8TpfcklwJ7rAhunYiOGrWKPUd~jSRfN-lJLJh2JsI2-ofGxP3YnrWMZcOkgJLNGjnPxNOwuSRIN74qRNcR~5GvvUcWeeQkw48zdRmh~zxFTJ7PfEnak19zJvvy4oDINHb53ZiWwbq84wXPdd3Qou78i4rXadtcqeWplTMoI0re3I153xsc1s9tm8OvSNL5qSe4jqcFLQMpMSIJPF8cceRvh2WmlIBsDHKbr49a1Qbe07Y4gV7K14is31S1lXggc7sUffqP-3yNq1K-CoP0wTkYcYbUrtqdH4v7~E5wIbn7z8~xH9cFPsaWTKOyVg2FeSLRZEnJXrQaQrzibuNg__",
  },
];

const Releases = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAlbums = albums.filter((album) =>
    album.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-grow lg:mt-[35vh]">
      <div className="mb-20">
        <Search onSearch={setSearchQuery} />
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
        {filteredAlbums.map((album, index) => (
          <div
            className="flex items-start justify-center min-w-[348px]"
            key={index}
          >
            <AlbumCover title={album.title} imageUrl={album.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Releases;

export default function PostSummary({ post }) {
  const {
    data: { thumb_image, title, author, date },
    slug,
  } = post;
  return (
    <>
      <div className="flex justify-center">
        <article className="block">
          <a href={`/blog/${slug}`}>
            <img
              className="rounded-lg"
              src={thumb_image.image}
              alt={thumb_image.image_alt}
              loading="lazy"
            />
          </a>
          <a className="flex flex-col justify-start mt-2 max-w-[500px]" href={`/blog/${slug}`}>
            <p className="text-2xl font-semibold">
              {title}
            </p>
            <p className="font-light">
              {author}
            </p>
            <p className="font-light">
              {
                date.toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              }
            </p>
          </a>
        </article>
      </div>
    </>
  );
}

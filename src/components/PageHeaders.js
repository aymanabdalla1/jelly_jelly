export default function PageHeaders({
  h1Text = 'Hello',
  h2Text = 'Subheader',
}) {
  return (
    <section className="text-center mt-12 sm:mt-24 mb-4 sm:mb-8">
      <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold tracking-normal sm:text-7xl text-white">
        Easily add captions to your videos
        <span className="relative whitespace-nowrap text-[#7DF9FF]">
          <span className="relative"> using AI.</span>
        </span>
      </h2>
      <p className="mx-auto mt-4 md:mt-12 max-w-xl text-lg text-stone-400 leading-7">
        Take your videos to the next level with custom captions.
      </p>
    </section>
  );
}
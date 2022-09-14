export default function Article({ className }) {
  return (
    <article className={`bg-white p-4 ${className}`}>
      <h3 className="text-2xl mb-2">Post Title</h3>
      <span className="text-gray-600 mb-4 block">
        <date>12 Feb 21</date> | Design System
      </span>
      <p>
        Amet minim Mollie non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </article>
  );
}

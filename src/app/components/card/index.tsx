/* eslint-disable @next/next/no-img-element */
type CardProps = {
  joke: Joke;
};
export const Card = ({ joke }: CardProps) => {
  return (
    <div
      className={`justify-self-cente p-4 ml-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-purple-800 dark:border-gray-700`}
    >
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={joke.icon_url}
          alt="Card image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {joke.value}
        </h5>
      </div>
    </div>
  );
};

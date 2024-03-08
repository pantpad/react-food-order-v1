export default function FoodItemSkeleton() {
  //console.log("FoodItem");

  return (
    <>
      <article className="h-96 rounded-xl bg-black/30 p-4">
        <div className="flex h-full animate-[pulse_1s_ease-in-out_infinite] flex-col gap-2">
          <img className="flex-1 rounded-md bg-slate-300" />
          <div className="flex flex-col [&>*]:rounded-md">
            <h1 className="mb-2 h-8 bg-slate-300"></h1>
            <button className="mx-auto mb-2 h-5 w-1/2 bg-slate-300"></button>
            <p className="mb-4 h-16 bg-slate-300"></p>
            <button className="button h-8"></button>
          </div>
        </div>
      </article>
    </>
  );
}

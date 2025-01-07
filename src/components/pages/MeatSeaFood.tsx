const MeatSeaFood = () => {
  return (
    <>
      <div className="mt-3 p-3">
        <h2 className="text-lg font-semibold py-2">
          Mead and Sea Food Component
        </h2>
        <div>
          <h2 className="text-lg font-semibold text-center py-2">Meats:</h2>
          <div className="flex flex-wrap justify-between gap-3 items-center">
            <div className="w-32 border rounded-md p-3">
              <img src="#" alt="" className="w-full h-4/5" />
              <p>Chicken</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeatSeaFood;

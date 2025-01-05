const Beverages: React.FC = () => {
  return (
    <>
      <h2 className="font-semibold text-lg">Beverages page</h2>
      <div className="p-4 mt-4">
        <h3 className="font-semibold text-lg py-2">Beverages</h3>
        <div className="flex flex-wrap justify-between items-center gap-3">
          <div>
            <img src="#" alt="" className="w-16 h-20" />
            <p>Beverage 1</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beverages;

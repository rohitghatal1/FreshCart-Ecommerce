const Contacts: React.FC = () => {
  return (
    <>
      <div>
        <h2 className="font-semibold text-lg">Contacts</h2>
        <div className="flex items-center justify-between gap-4">
          <div className="border p-3 rounded-md">
            <p className="text-center font-semibold">Left Section</p>
          </div>
          <div className="border p-3 rounded-md">
            <p className="text-center font-semibold">Right Section</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;

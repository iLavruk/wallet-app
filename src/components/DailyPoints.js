const DailyPoints = () => {
  const numberDailyPoints = 456;
  return (
    <div className="block py-4">
      <h2 className="block-title">Daily Points</h2>
      <p className="description">{`${numberDailyPoints}K`}</p>
    </div>
  );
};

export default DailyPoints;

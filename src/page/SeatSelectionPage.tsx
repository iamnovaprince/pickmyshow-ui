import SeatSelection from "src/component/seat/SeatSelectionComponent";

// Example usage
const SeatSelectionPage = () => {
    const rowsConfig = [5, 4, 6, 3]; // Example: First row has 5 seats, second row has 4 seats, etc.

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">Select Your Seat</h1>
          <SeatSelection rowsConfig={rowsConfig} />
        </div>
      </div>
    );
};

export default SeatSelectionPage;

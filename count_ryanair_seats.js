/**
 * Logs seat availability stats from the DOM.
 * Counts priority, extra legroom, standard, and unavailable seats,
 * then calculates availability and "good seat" percentages.
 */
function logSeatAvailability() {
  const prioritySeatCount = document.querySelectorAll('.seatmap__seat--priority').length;
  const extraLegroomSeatCount = document.querySelectorAll('.seatmap__seat--extraleg').length;
  const standardSeatCount = document.querySelectorAll('.seatmap__seat--standard').length;
  const unavailableSeatCount = document.querySelectorAll('.seatmap__seat--unavailable').length;

  // Count the first three as available
  const availableSeatCount = prioritySeatCount + extraLegroomSeatCount + standardSeatCount;
  const totalSeatCount = availableSeatCount + unavailableSeatCount;
  
  // Calculate % of good seats
  const goodSeatCount = prioritySeatCount + extraLegroomSeatCount;
  const goodSeatPercentage = goodSeatCount > 0 
    ? ((goodSeatCount / availableSeatCount) * 100).toFixed(2) 
    : '0.00';

  // Calculate availability %
  const availabilityPercentage = totalSeatCount > 0 
    ? ((availableSeatCount / totalSeatCount) * 100).toFixed(2) 
    : '0.00';

  console.log(`Available Seats:`);
  console.log(`  Priority: ${prioritySeatCount}`);
  console.log(`  Extra Legroom: ${extraLegroomSeatCount}`);
  console.log(`  Standard: ${standardSeatCount}`);
  console.log(`Total Available: ${availableSeatCount}`);
  console.log(`Good Seats: ${goodSeatPercentage}%`);
  console.log(`Total Seats: ${totalSeatCount}`);
  console.log(`Availability: ${availableSeatCount} / ${totalSeatCount} (${availabilityPercentage}%)`);
}

// Call the function
logSeatAvailability();

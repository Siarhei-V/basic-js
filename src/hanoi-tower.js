

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsCount = Math.pow(2, disksNumber) - 1;
  const durationTurns = Math.floor(turnsCount / (turnsSpeed / 3600));
  return {turns: turnsCount, seconds: durationTurns};
};

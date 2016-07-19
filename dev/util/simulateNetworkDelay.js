/**
 * @param {Function} callback
 * @returns {void}
 */

function simulateNetworkDelay (callback) {
  setTimeout(callback, Math.random() * 2000)
}

module.exports = simulateNetworkDelay

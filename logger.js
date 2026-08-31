function timestamp() {
  return new Date().toISOString();
}
function info(message) {
  console.log(`[INFO]  [${timestamp()}] ${message}`);
}
function success(message) {
  console.log(`[OK]    [${timestamp()}] ${message}`);
}
function error(message) {
  console.error(`[ERROR] [${timestamp()}] ${message}`);
}
module.exports = { info, success, error };
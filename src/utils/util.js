const formatTime = ns => {
  return new Date(parseInt(ns) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     

}
module.exports = {
  formatTime: formatTime
}

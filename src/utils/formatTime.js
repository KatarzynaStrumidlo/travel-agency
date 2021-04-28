export const formatTime = (arg) => {
  if(!arg || typeof(arg) !== 'number' || arg < 0){
    return null;
  }

  let ss = Math.floor(arg%60).toString();
  let mm = Math.floor((arg/60)%60).toString();
  let hh = Math.floor((arg/3600)%60).toString();

  if (ss.length <= 1 || mm.length <= 1 || hh.length <= 1){
    return (hh.padStart(2, '0') + ':' + mm.padStart(2, '0') + ':' + ss.padStart(2, '0'));
  } else {
    return (hh + ':' + mm + ':' + ss);
  }
};

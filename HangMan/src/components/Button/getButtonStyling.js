
function getStyle(styleType) {
  if(styleType === 'primary') {
    return 'bg-blue-500 text-white hover:bg-blue-600';
}
else if(styleType === 'danger') {
  return 'bg-red-500 text-white hover:bg-red-600';
}
else if(styleType === 'success') {
  return 'bg-green-500 text-white hover:bg-green-600';
}
else {
  return 'bg-gray-500 text-white hover:bg-gray-600';
}
};
export default getStyle;
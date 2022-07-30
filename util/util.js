const filterBasedOnProjectionKeys = (projections,item) =>{
    console.log(projections)
 return  Object.fromEntries(
    Object.entries(item).filter((i) => projections.includes(i[0]) && i)
  );
}

module.exports = { filterBasedOnProjectionKeys };

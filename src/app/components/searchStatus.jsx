import React from 'react';

const SearchStatus = ({length}) => {

const renderPhrase = (number) => {
  const lastNumber =Number(number.toString().slice(-1))
  if (number > 4 && number < 15) return "человек тусанет"
  if([2, 3, 4].indexOf(lastNumber) >= 0) return "человека тусанут"
  if(lastNumber === 1) return "Человек тусанет"
}
  
return(
  <div>
   <h2> <span className={"badge bg-lg p-2 bg-" + (length > 0?"primary":"danger")}>
      {length > 0 
      ? `${length} ${renderPhrase(length)} с тобой сегодня`
      :'Никто не тусанет стобой'
      }
      </span></h2>
  </div>
)
}
export default SearchStatus
import React from "react";

export const SectionTag = ({ className, children }) => {
   return (
       <div className={className}>
           <div className="container">
               {children}
           </div>
       </div>
   )
};
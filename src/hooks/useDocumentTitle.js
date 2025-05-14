import React from 'react'
 import { useEffect } from 'react'
export default function useDocumentTitle(title) {
    useEffect(() =>{
         document.title = title;
    }
       
    , [title]);
}

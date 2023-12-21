import React, { useEffect, useState } from 'react'

function useLocal() {
    const [local, setLocal] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) ) : [])

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(local))
    }, [local])
    
function localData(data) {
    setLocal(data)
}

  return [local , localStorage]
}

export default useLocal
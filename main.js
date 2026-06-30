const Node = (value, nextNode = null) => ({ value, nextNode })

const linkedList = () => {
  let head = null
  

  const addNode = (value) => {
    
  if(head === null) {
    head = Node(value, null)
  }else {
    let current = head
    while(current.nextNode !== null) {
    current = current.nextNode
    }
    current.nextNode = Node(value, null)
  }

  }
  
  const prepend = (value) => {
      head = Node(value, head)
      return head
  }
  
  
  const size = () => {
    let current = head 
    let count = 0
    
  
    
    while(current !== null) {
      count++
      current = current.nextNode
    }
    
    console.log(`the size of the linked list is ${count}`)
  }
  
  const firstNode = () => {
    if(!head) {
      console.log('undefined')
      return
    }
    
console.log(`"${head.value}" is the first node`)
  }
  
  const lastNode = () => {
     if(!head) {
      console.log('undefined')
      return
    }
    
    
    let current = head
    while(current.nextNode !== null) {
      current = current.nextNode
    }
    
    console.log(`"${current.value}" is the last node`)
  }
  
  
  const atIndex = (num) => {
    
    let current = head
    let count = 0
    
    if(!head) {
      console.log('undefined')
      return
    }
    
  

    while(current !== null) {
      
      if(num === count) {
        console.log(`"${current.value}" at index ${num}`)
        return
      }
      
      count++
      
      current = current.nextNode
    }
    
    if(num !== count) {
      console.log('undefined')
    }
  }
  
  const shift = () => {
    if(!head) {
      console.log("undefined")
      return
    }
    
    console.log(`${head.value} has been removed`)
    head = head.nextNode
  }
  
  
  const pop = () => {
    if(!head) return
    
    let current = head
    let prevNode;
    while(current) {
      if(current.nextNode !== null) {
        prevNode = current 
      }
     current = current.nextNode
    }
    console.log(`${prevNode.nextNode.value} has been removed`)
    prevNode.nextNode = null
  }
  
  const contains = (value) => {
    if(!head) return 
    
    let current = head 
    
    while(current) {
      if(current.value === value) {
      console.log('true')
      return
    }
      current = current.nextNode
    }
    
    console.log('false')
  }
  
  const findIndex = (value) => {
    if(!head) return
    
    let current = head
    let count = 0
    
    while(current) {
      
      if(current.value === value) {
        console.log(count)
        return
      }
      count++
      current = current.nextNode
    }
    
    console.log('-1')
  }
  
  const toString = () => {
    
    let string = ""
    
    if(!head) {
      console.log(string)
      return 
    }
    
    
    let current = head 
    while(current) {
      
      string += `(${current.value}) => `
      current = current.nextNode
    }
    console.log(string + "null")
    
  }
  
  const insertAt = (index, val) => {
    
    
    if(!head) {
      console.log("linked list is empty")
      return
    }
    if(index < 0) {
      console.log("rangeError")
      return
    }
    
    let current = head 
    let count = 0
    
    if(index === 0) {
      prepend(val)
      return
    }
    
    while(current) {
      
      
      if(count === index-1) {
        let next = current.nextNode
        console.log(current)
        current.nextNode = Node(val, next)
        return
      }
      
      count++
      
      current = current.nextNode
    }
    
    console.log("rangeError")
    
  }
  
  
  const removeAt = (index) => {
    if(!head) {
      console.log('linked list is empty')
      return
    }
    
    let current = head
    let count = 0
    
    
    if(index === 0) {
      head = head.nextNode
      return
    }
    while(current) {
      if(index -1 === count) {
        if(current.nextNode === null) {
          console.log('rangeError')
          return
        }
        let next = current.nextNode.nextNode
          current.nextNode = next
          return 
        }
        count++
      current = current.nextNode
      }
      
      
    }
  
  
  const print = () => {
    if(!head) return
    let current = head
    while (current) {
      console.log(current.value)
      current = current.nextNode
    }
  }
  
  
  
  
  return { addNode, print, prepend, size, firstNode, lastNode, atIndex, shift, pop, contains, findIndex, toString, insertAt, removeAt}
}


const list = linkedList()
list.addNode(5)
list.addNode(6)
list.addNode(7)
list.prepend(4)
list.prepend(3)

list.toString()
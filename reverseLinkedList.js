// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/description/

// 1. Create prev variable and assign it to null
 // 2. loop through the linked list while(head !== null)
 //   a. create nextNode variable and assign it to head.next
 //   b. assign head.next to prev
 //   c. assign prev to head
 //   d. assign head to nextNode
 // 3. Return prev 

 var reverseList = function(head) {
  let prev = null

  while(head !== null){
      let nextNode = head.next
      head.next = prev
      prev = head
      head = nextNode
  }
      return prev
};

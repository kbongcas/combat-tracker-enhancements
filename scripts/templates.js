 let generateTemplate = (userId, senderName) => {
      return {
        user: userId,
        content: senderName + "It is your turn up next.",
      }
 }

 export { generateTemplate }
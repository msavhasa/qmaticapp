module.exports = async function (context, documents) {
    const messages = documents.map(update => {
      return {
        target: 'statusUpdates',
        arguments: [update]
      }
    })
    context.bindings.signalRMessages = messages
  }
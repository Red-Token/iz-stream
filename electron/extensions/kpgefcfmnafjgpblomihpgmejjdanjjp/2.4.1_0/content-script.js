// import browser from 'webextension-polyfill'

console.log('ExtensiSDFSDFSDFSFSFSDFSDFS')

// inject the script that will provide window.nostr
let script = document.createElement('script')
script.setAttribute('async', 'false')
script.setAttribute('type', 'text/javascript')
script.setAttribute('src', chrome.runtime.getURL('nostr-provider.js'))
document.head.appendChild(script)

// listen for messages from that script
window.addEventListener('message', async message => {
  console.log("Zool is cool" + message)

  if (message.source !== window) return
  if (!message.data) return
  if (!message.data.params) return
  if (message.data.ext !== 'nos2x') return

  console.log("Zool is cool2" + message)

  // pass on to background
  var response
  try {
    response = await chrome.runtime.sendMessage({
      type: message.data.type,
      params: message.data.params,
      host: location.host
    })
  } catch (error) {
    console.log(error)
    response = {error}
  }

  console.log("Zool is coo333l" + message)


  // return response
  window.postMessage(
    {id: message.data.id, ext: 'nos2x', response},
    message.origin
  )
})

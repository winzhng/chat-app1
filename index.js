const messages = [
    {
       id: 1,
       from: {
          id: 123,
          name:`Ada Smith`,
          image:`img/ada.jpg`
       },
       time: {
          date: 3,
          month: 3,
          year: 2014,
          hour: 14,
          minute: 32
       },
       text:`You should check out this little script I just wrote. 😂 lol`
    },{
        id: 2,
        from: {
           id: 234,
           name:`Ariel Tye`,
           image:`img/ariel.jpg`
        },
        time: {
           date: 3,
           month: 3,
           year: 2014,
           hour: 14,
           minute: 34
        },
        text: `Haha what is it for?`
    },{
        id: 3,
        from: {
           id: 123,
           name: `Ada Smith`,
           image: `img/ada.jpg`
        },
        time: {
           date: 3,
           month: 3,
           year: 2014,
           hour: 14,
           minute: 35
        },
        text: `It's for my potential short film!`
    },{
        id: 4,
        from: {
           id: 234,
           name: `Ariel Tye`,
           image: `img/ariel.jpg`
        },
        time: {
           date: 3,
           month: 3,
           year: 2014,
           hour: 14,
           minute: 36
        },
        text: `Okay send me a copy now!!! :)`
    }
 ]

 function renderMessages(arr) {
    const arrOfHtml = arr.map(getMessagesAsHtmlString)
    const strOfHtml = arrOfHtml.join('\n');
    document.getElementById('messages').innerHTML = strOfHtml; 
}

function getMessagesAsHtmlString(messages){
    return `
    <section id="messages">
        <article class="message">
            <img src="${messages.image}" alt="icon">
            <h3 class="from-me" id="123">From:${messages.from}</h3>
            <div class="time">Time:${messages.time}</div>
            <div class="text">Text:${messages.text}</div>
        </article>
    `}
    renderMessages(messages)
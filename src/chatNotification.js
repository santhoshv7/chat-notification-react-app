import './chatNotification.css'
const chatData = [
    {
        name: 'Rahul',
     message: 'Hey, Arun, can you share the address of ...',
     time: '10:45 am',
     starred:true

    },
    {
        name: 'Nitish',
        message: 'Tomorrow we have the team meeting...',
        time: '2:14 pm',
        starred: true

    },
    {
        name: 'Arun',
        message: 'Currently I am occupied with...',
        time: '4:25 pm',
        starred: true

    },
    {
        name: 'John',
        message: 'I reached the gym. Where are you?',
        time: '4:53 pm',
        starred: false

    },
    {
        name: 'Priya',
        message: 'The builder is quoting higher price...',
        time: '5:47 pm',
        starred: true

    },
    {
        name: 'Mom',
        message: 'Buy 1kg sugar, 2kg tomato...',
        time: '6:10 pm',
        starred: false

    },


]

function ChatNotification(){
    return(
        <div className="chat-list-container">
        <input type = "text" className="search-bar" placeholder="Search..." />
        <ul className = "chat-list">
            {chatData.map((chat,index)=>(
                <li key={index} className="chat-item">
                    <div className="chat-info">
                        <h4 className="chat-name">{chat.name}</h4>
                        <p className = "chat-message">{chat.message}</p>

                    </div>
                    <div className="chat-meta">
                        <span className = "-tchatime">{chat.time}</span>
                        {chat.starred && <span className="chat-star">★</span>}
                    </div>
                </li>

            ))}
           


        </ul>

        </div>
    )
}

export default ChatNotification
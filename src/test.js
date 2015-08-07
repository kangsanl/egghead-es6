class Chat {

    constructor() {
        // an array of ChatMessage
        this.messages = ko.observableArray([]);

        // all remote recipients as a list of { id, name }
        this.recipients = ko.observableArray([]);

        // the message body to send
        this.bodyToSend = ko.observable();

        // the select recipient group or attendee id
        this.recipientId = ko.observable(ChatGroups.Everyone);
    }

    init(commChat) {
        this.commChat = commChat;

        this.commChat.on(commStack.Chat.chatReceived, message => {
            this.messages.push(new ReceivedMessage(message));
    });

    Object.keys(ChatGroups.Ids).forEach(groupId => {
        this.recipients.push({ id: groupId, name: ChatGroups.Ids[groupId] });
});
};

sendMessage() {
    let message = new SentMessage(this.bodyToSend(), this.recipientId());

    this.commChat.sendMessage(message);

    this.messages.push(message);

    this.bodyToSend('');
};


};

export default Chat;
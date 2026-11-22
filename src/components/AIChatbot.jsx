
import { useState, useRef, useEffect } from 'react';

import {
    Bot,
    X,
    Send,
    User,
    MessageCircle,
    Sparkles
} from 'lucide-react';

function AIChatbot() {

    const [isOpen, setIsOpen] = useState(false);

    const [input, setInput] = useState("");

    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Hello! 👋 Welcome to Ashish's portfolio. I am his virtual assistant. Ask me about his skills, education or projects."
        }
    ]);

    const chatEndRef = useRef(null);

    // AUTO SCROLL

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [messages, isOpen]);

    // QUICK QUESTIONS

    const quickQuestions = [
        "Tell me about Ashish",
        "What are his skills?",
        "Show his projects",
        "What is his education?"
    ];

    // BOT RESPONSE FUNCTION

    const getBotResponse = (question) => {

        const q = question.toLowerCase();

        if (
            q.includes("hello") ||
            q.includes("hi") ||
            q.includes("hey")
        ) {
            return "Hello! 👋 Nice to meet you. How can I help you today?";
        }

        if (
            q.includes("about") ||
            q.includes("ashish") ||
            q.includes("yourself")
        ) {
            return "Ashish Kumar Sahu is a Java Full-Stack Developer and MCA graduate. He is passionate about software development and building responsive web applications.";
        }

        if (
            q.includes("skill") ||
            q.includes("technology") ||
            q.includes("tech stack")
        ) {
            return "Ashish's technical skills include Java, DSA, Spring Boot, Hibernate, HTML5, CSS3, JavaScript, React, SQL Server, JDBC and OOPs.";
        }

        if (
            q.includes("project") ||
            q.includes("work")
        ) {
            return "Ashish has developed three projects: 1. Hospital Management System using Spring Boot, Angular and MySQL. 2. OneCart E-Commerce Website using MERN Stack. 3. Royal Restaurant Billing System using HTML, CSS, JavaScript and Bootstrap.";
        }

        if (
            q.includes("education") ||
            q.includes("degree") ||
            q.includes("qualification")
        ) {
            return "Ashish completed his MCA from Centurion University of Technology and Management, Bhubaneswar, with 8.80 CGPA in 2026. He completed his BCA from Vikash School of Business Management, Bargarh, with 74.9%.";
        }

        if (
            q.includes("experience") ||
            q.includes("fresher")
        ) {
            return "Ashish is a fresher looking for opportunities as a Java Developer or Full-Stack Developer.";
        }

        if (
            q.includes("contact") ||
            q.includes("email") ||
            q.includes("hire")
        ) {
            return "You can contact Ashish using the Contact section of this portfolio. He is open to suitable career opportunities.";
        }

        if (
            q.includes("java")
        ) {
            return "Ashish has knowledge of Core Java, OOPs, JDBC, DSA, Spring Boot and Hibernate.";
        }

        if (
            q.includes("thank")
        ) {
            return "You're welcome! 😊 Feel free to explore the portfolio.";
        }

        return "Thanks for your question! I can help you with Ashish's profile, technical skills, projects, education and experience. Please ask me something about these topics.";
    };

    // SEND MESSAGE

    const sendMessage = (message = input) => {

        const userMessage = message.trim();

        if (!userMessage) return;

        setMessages((previousMessages) => [

            ...previousMessages,

            {
                sender: "user",
                text: userMessage
            }

        ]);

        setInput("");

        // BOT RESPONSE

        setTimeout(() => {

            const response = getBotResponse(userMessage);

            setMessages((previousMessages) => [

                ...previousMessages,

                {
                    sender: "bot",
                    text: response
                }

            ]);

        }, 500);

    };

    // ENTER KEY

    const handleKeyDown = (event) => {

        if (event.key === "Enter") {
            sendMessage();
        }

    };

    return (

        <div className="chatbot-container">

            {/* CHAT WINDOW */}

            {isOpen && (

                <div className="chatbot-window">

                    {/* CHAT HEADER */}

                    <div className="chatbot-header">

                        <div className="chatbot-header-info">

                            <div className="chatbot-avatar">
                                <Bot size={25} />
                            </div>

                            <div>
                                <h5>Portfolio Assistant</h5>

                                <span>
                                    <span className="chat-online-dot"></span>
                                    Online
                                </span>
                            </div>

                        </div>

                        <button
                            className="chat-close-btn"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chatbot"
                        >
                            <X size={23} />
                        </button>

                    </div>

                    {/* CHAT MESSAGES */}

                    <div className="chatbot-messages">

                        <div className="chat-date">
                            <Sparkles size={14} />
                            Welcome to Ashish's Portfolio
                        </div>

                        {messages.map((message, index) => (

                            <div
                                key={index}
                                className={`chat-message ${message.sender}`}
                            >

                                <div className="message-avatar">

                                    {message.sender === "bot"
                                        ? <Bot size={17} />
                                        : <User size={17} />
                                    }

                                </div>

                                <div className="message-text">
                                    {message.text}
                                </div>

                            </div>

                        ))}

                        <div ref={chatEndRef}></div>

                    </div>

                    {/* QUICK QUESTIONS */}

                    <div className="chatbot-quick-questions">

                        <p>Quick Questions</p>

                        <div className="quick-question-list">

                            {quickQuestions.map((question, index) => (

                                <button
                                    key={index}
                                    onClick={() => sendMessage(question)}
                                >
                                    {question}
                                </button>

                            ))}

                        </div>

                    </div>

                    {/* CHAT INPUT */}

                    <div className="chatbot-input-area">

                        <input
                            type="text"
                            placeholder="Ask me anything..."
                            value={input}
                            onChange={(event) =>
                                setInput(event.target.value)
                            }
                            onKeyDown={handleKeyDown}
                        />

                        <button
                            onClick={() => sendMessage()}
                            disabled={!input.trim()}
                            aria-label="Send message"
                        >
                            <Send size={19} />
                        </button>

                    </div>

                    <div className="chatbot-footer">
                        Powered by Portfolio Assistant
                    </div>

                </div>

            )}

            {/* FLOATING CHAT BUTTON */}

            <button
                className="chatbot-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle chatbot"
            >

                {isOpen
                    ? <X size={28} />
                    : <MessageCircle size={28} />
                }

            </button>

        </div>

    );

}

export default AIChatbot;

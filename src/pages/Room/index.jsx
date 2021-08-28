import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { RoomPage } from "./styles";
import { useHistory, useParams } from "react-router-dom";
import { ButtonFilled } from "../../components/ButtonFilled";

import { database } from "../../services/firebase";
import moment from "moment";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import toast, { Toaster } from "react-hot-toast";

export default function Index() {
    const { user, signInWithGoogle } = useAuth();
    const params = useParams().id;
    const history = useHistory();

    const [newQuestion, setNewQuestion] = useState("");
    const [questions, setQuestions] = useState([]);
    const [title, setTitle] = useState("");
    const [numberOfQuestions, setNumberOfQuestions] = useState(0)

    const notifyQuestion = () => toast.success("Question sended!");

    useEffect(() => {
        const dbRef = database.ref(`rooms/${params}`);

        dbRef.on("value", (snapshot) => {
            if (snapshot.exists()) {
                const rawData = snapshot.val();
                const firebaseQuestions = rawData.questions ?? {};
                const parsedData = Object.entries(firebaseQuestions).map(
                    ([key, value]) => {
                        return {
                            id: key,
                            content: value.content,
                            authorName: value.authorName,
                            authorAvatar: value.authorAvatar,
                            createdAt: value.createdAt,
                            responded: value.responded
                        };
                    }
                );

                setTitle(rawData.title);
                setQuestions(parsedData);
            }
    });
    }, [params]);

    useEffect(() => {
        let i = questions.length
        questions.forEach(question => {
            if(!question.responded){
                return
            } else {
                return i = i - 1
            }
        })

        setNumberOfQuestions(i)

    }, [questions])

    async function handleLogin() {
        await signInWithGoogle();

        history.push(`/rooms/${params}`);
    }

    async function handleNewQuestion(e) {
        e.preventDefault();

        if (!user) {
            return;
        }

        if (newQuestion.trim() === "") {
            return;
        }

        const question = {
            content: newQuestion,
            authorName: user.name,
            authorAvatar: user.avatar,
            responded: false,
            createdAt: moment().format("lll"),
        };

        await database.ref(`rooms/${params}/questions`).push(question);

        notifyQuestion();
        setNewQuestion("");
    }

    return (
        <RoomPage>
            <Header handleLogin={handleLogin} />

            <main>
                <div className="room-info">
                    <h2>{title}</h2>
                    <span>
                        <strong>{numberOfQuestions}</strong> question remaining
                    </span>
                </div>
                <form onSubmit={handleNewQuestion}>
                    <textarea
                        placeholder="Type your question"
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                    />
                    {user ? (
                        <ButtonFilled type="submit">Send Question</ButtonFilled>
                    ) : (
                        <span className="warn">
                            You need to be logged in to make a question.
                            <button onClick={handleLogin} href="#">
                                Click here.
                            </button>
                        </span>
                    )}

                    <Toaster
                        toastOptions={{
                            duration: 2500,
                        }}
                    />
                </form>

                <div>
                    <ul>
                        {questions
                            ? questions.map((question, i) => (
                                  <li key={i}>
                                      <p>{question.content}</p>
                                      <div>
                                          <div className="user-container">
                                              <img
                                                  src={question.authorAvatar}
                                                  alt={question.authorName}
                                              />
                                              <span>{question.authorName}</span>
                                          </div>
                                          <span className="datetime">
                                              {question.createdAt}
                                          </span>
                                      </div>
                                      <div className="status">
                                        {!question.responded ? "" : <span>responded</span> }
                                      </div>
                                  </li>
                              ))
                            : ""}
                    </ul>
                </div>
            </main>

            <Footer />
        </RoomPage>
    );
}

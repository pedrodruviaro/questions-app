import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { RoomPage } from "./styles";
import { useParams } from "react-router-dom";
import { ButtonFilled } from "../../components/ButtonFilled";

import { database } from "../../services/firebase";
import moment from "moment";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

export default function Index() {
    const { user } = useAuth();
    const params = useParams().id;

    const [newQuestion, setNewQuestion] = useState("");
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const dbRef = database.ref(`rooms/${params}/questions`);
        dbRef.on("value", (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const parsedData = Object.entries(data).map(([key, value]) => {
                    return {
                        id: key,
                        content: value.content,
                        authorName: value.authorName,
                        authorAvatar: value.authorAvatar,
                        createdAt: value.createdAt,
                    };
                });

                setQuestions(parsedData);
            }
        });
    }, [params]);
    async function handleNewQuestion(e) {
        e.preventDefault();

        if (newQuestion.trim() === "") {
            return;
        }

        const question = {
            content: newQuestion,
            authorName: user.name,
            authorAvatar: user.avatar,
            createdAt: moment().format('lll'),
        }

        await database.ref(`rooms/${params}/questions`).push(question)
    }

    return (
        <RoomPage>
            <Header />

            <main>
                <h2>NOME DA SALA</h2>
                <form onSubmit={handleNewQuestion}>
                    <textarea
                        placeholder="Type your question"
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                    />
                    <ButtonFilled type="submit">Send Question</ButtonFilled>
                </form>

                <div>
                    <ul>
                        {questions
                            ? questions.map((question, i) => (
                                  <li key={i}>
                                      <p>{question.content}</p>
                                      <div>
                                          <img
                                              src={question.authorAvatar}
                                              alt={question.authorName}
                                          />
                                          <span>{question.authorName}</span>
                                      </div>
                                      <span>{question.createdAt}</span>
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

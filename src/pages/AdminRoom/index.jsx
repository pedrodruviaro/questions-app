import React, { useEffect, useState } from 'react'
import { AdminPage } from './styles'
import { useAuth } from "../../hooks/useAuth";
import { useHistory, useParams } from "react-router-dom";

import { database } from "../../services/firebase";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
// import toast, { Toaster } from "react-hot-toast";
import { FiTrash, FiCheckSquare } from "react-icons/fi";

export default function Index() {

    const { signInWithGoogle } = useAuth();
    const params = useParams().id;
    const history = useHistory();
    const [questions, setQuestions] = useState([]);
    const [title, setTitle] = useState("");

    // const notifyQuestion = () => toast.success("Question sended!");

    async function handleLogin() {
        await signInWithGoogle();

        history.push(`/rooms/${params}`);
    }

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
                        };
                    }
                );

                setTitle(rawData.title);
                setQuestions(parsedData);
            }
    });
    }, [params]);


    return (
        <AdminPage>
            <Header handleLogin={handleLogin} />

            <main>
                <div className="room-info">
                    <h2>{title}</h2>
                    <span>
                        <strong>{questions.length}</strong> question remaining
                    </span>
                </div>
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
                                      <footer>
                                          <button>
                                              <FiTrash />
                                          </button>
                                          <button>
                                            <FiCheckSquare />
                                          </button>
                                      </footer>
                                  </li>
                              ))
                            : ""}
                    </ul>
                </div>
            </main>

            <Footer />
        </AdminPage>
    );
}

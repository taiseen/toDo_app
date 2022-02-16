import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import ToDoList from "./components/ToDoList/ToDoList";

// 15-May-2021

const App = () => {

    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" >
                    <ToDoList />
                </Route>

                <Route exact path="/about">
                    <About />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;